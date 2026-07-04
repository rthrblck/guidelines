import { chromium } from 'playwright';

const PORT = 5175;
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

page.on('console', msg => console.log(`[BROWSER ${msg.type()}] ${msg.text()}`));
page.on('pageerror', err => console.log(`[BROWSER ERROR] ${err.message}`));

for (let i = 0; i < 10; i++) {
  try {
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'load', timeout: 5000 });
    break;
  } catch (e) {
    if (i === 9) throw e;
    console.log(`  waiting for server (attempt ${i + 1})...`);
    await new Promise(r => setTimeout(r, 1000));
  }
}

await page.waitForTimeout(2000);
await page.screenshot({ path: 'screenshot-debug.png', fullPage: true });
console.log('✓ Debug screenshot taken');

const html = await page.content();
console.log(`--- PAGE HTML (first 2000 chars) ---`);
console.log(html.substring(0, 2000));
console.log(`--- END ---`);

await browser.close();
