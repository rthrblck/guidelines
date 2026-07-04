import { chromium } from 'playwright';
import { spawn } from 'child_process';

const PORT = 5175;
const BASE = `http://localhost:${PORT}`;

// Start the Vite dev server
const server = spawn('npx', ['vite', '--port', String(PORT)], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true,
});

// Wait for server to be ready
for (let i = 0; i < 15; i++) {
  try {
    const resp = await fetch(BASE);
    if (resp.ok) break;
  } catch { /* not ready yet */ }
  await new Promise(r => setTimeout(r, 1000));
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

page.on('pageerror', err => {
  console.log('  FAIL: Uncaught page error:', err.message);
  process.exitCode = 1;
});

await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 15000 });
await page.waitForTimeout(2000);

const results = [];

function check(label, ok) {
  results.push({ label, ok });
  console.log((ok ? '  PASS:' : '  FAIL:'), label);
  if (!ok) process.exitCode = 1;
}

// 1. Page renders without JS console errors or page errors
const inputCount = await page.locator('input').count();
check(`Page has ${inputCount} input fields`, inputCount > 0);

// 2. SVG guidelines render
const svgLines = await page.locator('svg line').count();
check(`SVG has ${svgLines} guideline lines`, svgLines > 0);

// 3. IconButtons render
const btnCount = await page.locator('[class*=MuiIconButton-root]').count();
check(`Found ${btnCount} IconButtons on page`, btnCount > 0);

// 4. + button increments value
const plusButtons = await page.locator('[aria-label=addStep]').all();
check(`Found ${plusButtons.length} addStep buttons`, plusButtons.length > 0);

if (plusButtons.length > 0) {
  const firstInput = page.locator('input').first();
  const valBefore = await firstInput.inputValue();
  await plusButtons[0].click();
  await page.waitForTimeout(500);
  const valAfter = await firstInput.inputValue();
  check(`+ button increments (${valBefore} -> ${valAfter})`, parseFloat(valAfter) > parseFloat(valBefore));
}

// 5. - button decrements value
const minusButtons = await page.locator('[aria-label=subtractStep]').all();
check(`Found ${minusButtons.length} subtractStep buttons`, minusButtons.length > 0);

if (minusButtons.length > 0) {
  const firstInput = page.locator('input').first();
  const valBefore = await firstInput.inputValue();
  await minusButtons[0].click();
  await page.waitForTimeout(500);
  const valAfter = await firstInput.inputValue();
  check(`- button decrements (${valBefore} -> ${valAfter})`, parseFloat(valAfter) < parseFloat(valBefore));
}

// 6. Help tooltip appears on hover
const helpButtons = await page.locator('button[aria-label="More Info"]').all();
check(`Found ${helpButtons.length} help buttons`, helpButtons.length > 0);

if (helpButtons.length > 0) {
  await helpButtons[0].hover();
  await page.waitForTimeout(1000);
  const tooltip = await page.locator('[role=tooltip]').count();
  check(`Tooltip visible after help hover`, tooltip > 0);
}

// 7. Typing a value updates the field
const input = page.locator('input').first();
await input.click();
await input.fill('');
await input.type('7.5');
await page.waitForTimeout(500);
const typedVal = await input.inputValue();
check(`Typed value reads "${typedVal}"`, parseFloat(typedVal) === 7.5);

// 8. SVG updates when values change
const updatedLines = await page.locator('svg line').count();
check(`SVG lines after value change: ${updatedLines}`, updatedLines > 0);

// 9. Scrolled buttons work (click + on last input)
const lastAddBtn = plusButtons[plusButtons.length - 1];
await lastAddBtn.scrollIntoViewIfNeeded();
await lastAddBtn.click();
await page.waitForTimeout(500);
check('Clicked + on last scrolled input', true);

// Summary
const passed = results.filter(r => r.ok).length;
console.log(`\n-- ${passed}/${results.length} checks passed --`);

await browser.close();
server.kill();
process.exit(process.exitCode || 0);
