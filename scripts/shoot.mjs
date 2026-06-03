// Скриншот стори Storybook в PNG 1920×1080 через системный Chrome.
// Usage: node scripts/shoot.mjs <storyId> <outPath> [storybookUrl]
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const [, , storyId, outPath, baseArg] = process.argv;
const base = baseArg || 'http://localhost:6006';

if (!storyId || !outPath) {
  console.error('Usage: node scripts/shoot.mjs <storyId> <outPath> [url]');
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  const url = `${base}/iframe.html?id=${encodeURIComponent(storyId)}&viewMode=story`;
  const resp = await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  if (!resp || !resp.ok()) {
    console.error('Failed to load', url, resp && resp.status());
  }
  // дождаться шрифтов и стейджа
  await page.evaluate(async () => { if (document.fonts) await document.fonts.ready; });
  await page.waitForSelector('[data-slide-stage]', { timeout: 15000 }).catch(() => {});
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1920, height: 1080 } });
  console.log('shot ->', outPath);
} finally {
  await browser.close();
}
