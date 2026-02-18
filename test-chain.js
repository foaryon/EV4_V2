#!/usr/bin/env node
/**
 * Chain test – runs all stress tests in sequence.
 * Ensures index.html and other pages are fully loaded and working.
 */
const { spawn } = require('child_process');

const TESTS = [
  { name: 'Responsive (30 viewports × 3 pages, full load)', script: 'test-responsive.js' },
  { name: 'Nav anchors (14 viewports × 18 anchors)', script: 'test-nav-anchors.js' },
];

async function run() {
  console.log('='.repeat(60));
  console.log('CHAIN TEST – Full HTML load, overflow, nav anchors');
  console.log('='.repeat(60));

  let exitCode = 0;
  for (const t of TESTS) {
    console.log('\n>>> ' + t.name + '\n');
    const code = await new Promise((resolve) => {
      const proc = spawn('node', [t.script], {
        stdio: 'inherit',
        cwd: __dirname,
      });
      proc.on('close', (c) => resolve(c || 0));
    });
    if (code !== 0) exitCode = code;
  }

  console.log('\n' + '='.repeat(60));
  if (exitCode === 0) {
    console.log('CHAIN PASS: All simulations completed successfully.');
  } else {
    console.log('CHAIN FAIL: One or more tests failed.');
  }
  console.log('='.repeat(60));
  process.exit(exitCode);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
