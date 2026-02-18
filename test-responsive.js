#!/usr/bin/env node
/**
 * Responsive design stress test – simulates many device viewports
 * Checks: horizontal overflow, vertical clipping, JS errors, layout integrity
 */
const { chromium } = require('playwright');

const VIEWPORTS = [
  /* Phones – portrait */
  { name: 'iPhone SE 1st', width: 320, height: 568 },
  { name: 'iPhone SE 2nd', width: 375, height: 667 },
  { name: 'Galaxy Fold closed', width: 280, height: 653 },
  { name: 'Galaxy S8', width: 360, height: 740 },
  { name: 'iPhone 12 Mini', width: 375, height: 812 },
  { name: 'iPhone 14', width: 390, height: 844 },
  { name: 'iPhone 14 Pro', width: 393, height: 852 },
  { name: 'Pixel 5', width: 393, height: 851 },
  { name: 'Galaxy S20', width: 412, height: 915 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
  { name: 'Pixel 7 Pro', width: 412, height: 915 },
  /* Phones – landscape */
  { name: 'iPhone SE landscape', width: 568, height: 320 },
  { name: 'Galaxy S20 landscape', width: 915, height: 412 },
  /* Tablets */
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad 10th', width: 820, height: 1180 },
  { name: 'iPad Air', width: 820, height: 1180 },
  { name: 'iPad Pro 11', width: 834, height: 1194 },
  { name: 'iPad Pro 12.9', width: 1024, height: 1366 },
  { name: 'Surface Duo', width: 540, height: 720 },
  { name: 'Galaxy Tab S7', width: 800, height: 1280 },
  /* Laptops & desktops */
  { name: 'Laptop 1024', width: 1024, height: 768 },
  { name: 'Laptop 1280', width: 1280, height: 800 },
  { name: 'Laptop 1366', width: 1366, height: 768 },
  { name: 'Desktop 1440', width: 1440, height: 900 },
  { name: 'Desktop 1536', width: 1536, height: 864 },
  { name: 'Desktop 1920', width: 1920, height: 1080 },
  { name: 'Desktop 2560', width: 2560, height: 1440 },
  { name: '4K', width: 3840, height: 2160 },
  /* Edge cases */
  { name: 'Narrow 240', width: 240, height: 320 },
  { name: 'Ultra-wide', width: 5120, height: 1440 },
];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const jsErrors = [];
  page.on('pageerror', (e) => jsErrors.push(e.message));

  const base = 'file://' + require('path').resolve(__dirname);
  const pages = ['index.html', 'changelog.html', '404.html'];

  console.log('Responsive Design Stress Test');
  console.log('Full HTML load (waitUntil: load) – overflow, JS errors\n' + '='.repeat(60));

  let hOverflow = 0;
  let vClip = 0;
  let loadErrors = 0;

  for (const pageName of pages) {
    const pageUrl = base + '/' + pageName;
    console.log('\n--- ' + pageName + ' ---');

    for (const vp of VIEWPORTS) {
      jsErrors.length = 0;
      try {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(pageUrl, { waitUntil: 'load', timeout: 20000 });

        const result = await page.evaluate((isIndex) => {
          const html = document.documentElement;
          const body = document.body;
          const hOverflow = Math.max(html.scrollWidth, body.scrollWidth) > html.clientWidth;
          const vClip = body.scrollHeight > 0 && html.clientHeight > 0 && body.scrollHeight <= html.clientHeight && body.scrollHeight < 100;
          let loadOk = true;
          if (isIndex) {
            const required = ['main', 'toc', 'preisliste', 'galerie', 'nav'];
            loadOk = required.every((id) => (id === 'nav' ? document.querySelector('nav') : document.getElementById(id)));
          }
          return {
            hOverflow,
            loadOk,
            scrollWidth: Math.max(html.scrollWidth, body.scrollWidth),
            clientWidth: html.clientWidth,
            scrollHeight: body.scrollHeight,
            clientHeight: html.clientHeight,
          };
        }, pageName === 'index.html');

        const issues = [];
        if (result.hOverflow) {
          issues.push('H_OVERFLOW');
          hOverflow++;
        }
        if (!result.loadOk) {
          issues.push('LOAD');
          loadErrors++;
        }
        if (jsErrors.length) {
          issues.push('JS_ERR');
          loadErrors++;
        }

        const status = issues.length ? 'FAIL' : 'OK';
        const detail = result.hOverflow ? ` (scrollW:${result.scrollWidth} > clientW:${result.clientWidth})` : '';
        console.log(`${vp.name.padEnd(22)} ${String(vp.width).padStart(4)}x${String(vp.height).padStart(4)}  ${status}${detail}`);
        if (jsErrors.length) console.log('    JS: ' + jsErrors[0].slice(0, 60) + '…');
      } catch (e) {
        console.log(`${vp.name.padEnd(22)} ${String(vp.width).padStart(4)}x${String(vp.height).padStart(4)}  ERROR: ${e.message.slice(0, 50)}`);
        loadErrors++;
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  const total = hOverflow + vClip + loadErrors;
  if (total === 0) {
    console.log('PASS: No horizontal overflow, vertical clipping, or load errors across ' + (VIEWPORTS.length * pages.length) + ' simulations.');
  } else {
    console.log(`FAIL: ${hOverflow} horizontal overflow, ${vClip} vertical clip, ${loadErrors} load/JS errors`);
  }
  await browser.close();
  process.exit(total > 0 ? 1 : 0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
