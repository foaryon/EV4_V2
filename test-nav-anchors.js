#!/usr/bin/env node
/**
 * Nav anchor stress test – clicks each menu point and verifies correct scroll target.
 * Runs across many viewports; ensures Preisliste, Galerie, etc. land correctly.
 */
const { chromium } = require('playwright');

const ANCHORS = [
  'main', 'toc', 'empfohlene-einstellungen', 'checkliste-uebersicht',
  'methodology', 'quellen', 'ev4-referenz', 'galerie', 'preisliste',
  'drive-mode', 'regen', 'adas', 'climate', 'lighting', 'parking',
  'battery', 'navigation', 'personalization',
];

const VIEWPORTS = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 14', width: 390, height: 844 },
  { name: 'Galaxy S20', width: 412, height: 915 },
  { name: 'Galaxy Fold', width: 280, height: 653 },
  { name: 'iPhone SE landscape', width: 568, height: 320 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad Pro 12.9', width: 1024, height: 1366 },
  { name: 'Surface Duo', width: 540, height: 720 },
  { name: 'Laptop 1024', width: 1024, height: 768 },
  { name: 'Desktop 1440', width: 1440, height: 900 },
  { name: 'Desktop 1920', width: 1920, height: 1080 },
  { name: 'Narrow 240', width: 240, height: 320 },
  { name: '4K', width: 3840, height: 2160 },
];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.emulateMedia({ reducedMotion: 'reduce' });

  const base = 'file://' + require('path').resolve(__dirname);
  const url = base + '/index.html';

  console.log('Nav Anchor Stress Test');
  console.log('Verifies each menu point scrolls to correct section\n' + '='.repeat(60));

  let failCount = 0;
  const results = [];

  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(url, { waitUntil: 'load', timeout: 20000 });

    const isMobile = vp.width < 769;
    if (isMobile) {
      const trigger = await page.$('.nav-menu-trigger');
      if (trigger) {
        await trigger.click();
        await page.waitForTimeout(150);
      }
    }

    for (const id of ANCHORS) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(100);
      if (isMobile) {
        const open = await page.$('nav.nav-menu-open');
        if (!open) {
          const t = await page.$('.nav-menu-trigger');
          if (t) { await t.click(); await page.waitForTimeout(150); }
        }
      }
      const el = await page.$(`#${id}`);
      if (!el) continue;

      await page.evaluate((targetId) => {
        const link = document.querySelector(`nav a[href="#${targetId}"]`);
        if (link) link.click();
      }, id);
      await page.waitForTimeout(isMobile ? 500 : 300);

      const result = await page.evaluate((targetId) => {
        const target = document.getElementById(targetId);
        if (!target) return { ok: false, rectTop: 0, navH: 0 };
        const rect = target.getBoundingClientRect();
        const nav = document.querySelector('nav');
        const navH = nav ? nav.offsetHeight : 0;
        const topInRange = rect.top >= navH - 120 && rect.top <= navH + 250;
        const visible = rect.top >= -80 && rect.top <= navH + 300;
        return { ok: topInRange || visible, rectTop: rect.top, navH };
      }, id);
      const ok = result.ok;

      const status = ok ? 'OK' : 'FAIL';
      if (!ok) failCount++;
      results.push({ vp: vp.name, id, status });
    }
  }

  const failed = results.filter((r) => r.status === 'FAIL');
  if (failed.length) {
    console.log('\nFailed anchor scrolls:');
    failed.forEach((r) => console.log(`  ${r.vp} → #${r.id}`));
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Total: ${results.length} checks, ${failCount} failures`);
  if (failCount === 0) {
    console.log('PASS: All nav anchors scroll correctly.');
  } else {
    console.log('FAIL: Some anchors did not land at correct position.');
  }

  await browser.close();
  process.exit(failCount > 0 ? 1 : 0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
