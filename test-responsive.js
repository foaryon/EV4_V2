#!/usr/bin/env node
/**
 * Responsive design stress test – simulates multiple viewport sizes
 * Verifies no horizontal overflow and correct layout at each breakpoint
 */
const { chromium } = require('playwright');

const VIEWPORTS = [
  { name: 'iPhone SE', width: 320, height: 568 },
  { name: 'iPhone 12 Mini', width: 375, height: 812 },
  { name: 'iPhone 14 Pro', width: 393, height: 852 },
  { name: 'Pixel 5', width: 393, height: 851 },
  { name: 'Galaxy S20', width: 412, height: 915 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad Air', width: 820, height: 1180 },
  { name: 'iPad Pro 11', width: 834, height: 1194 },
  { name: 'Surface Duo', width: 540, height: 720 },
  { name: 'Laptop S', width: 1024, height: 768 },
  { name: 'Laptop M', width: 1280, height: 800 },
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Desktop XL', width: 1920, height: 1080 },
  { name: '4K', width: 3840, height: 2160 },
];

async function testPage(page, url, viewport) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  
  const overflow = await page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollWidth = Math.max(html.scrollWidth, body.scrollWidth);
    const clientWidth = html.clientWidth;
    return scrollWidth > clientWidth;
  });
  
  return { overflow, scrollWidth: 0, clientWidth: 0 };
}

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const base = 'file://' + require('path').resolve(__dirname);
  const pages = ['index.html', 'changelog.html', '404.html'];
  
  console.log('Responsive Design Stress Test\n' + '='.repeat(50));
  let failures = 0;
  
  for (const pageName of pages) {
    const pageUrl = base + '/' + pageName;
    console.log('\n--- ' + pageName + ' ---');
  for (const vp of VIEWPORTS) {
    try {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(pageUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
      
      const result = await page.evaluate(() => {
        const html = document.documentElement;
        const body = document.body;
        const scrollWidth = Math.max(html.scrollWidth, body.scrollWidth);
        const clientWidth = html.clientWidth;
        return { overflow: scrollWidth > clientWidth, scrollWidth, clientWidth };
      });
      
      const status = result.overflow ? 'FAIL' : 'OK';
      if (result.overflow) failures++;
      console.log(`${vp.name.padEnd(20)} ${vp.width}x${vp.height}  ${status}  (scroll: ${result.scrollWidth}, client: ${result.clientWidth})`);
    } catch (e) {
      console.log(`${vp.name.padEnd(20)} ${vp.width}x${vp.height}  ERROR: ${e.message}`);
      failures++;
    }
  }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(failures === 0 ? 'All viewports: NO horizontal overflow' : `FAILED: ${failures} viewport(s) have overflow`);
  await browser.close();
  process.exit(failures > 0 ? 1 : 0);
}

run().catch(e => { console.error(e); process.exit(1); });
