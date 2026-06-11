import fs from 'node:fs';
import puppeteer from 'puppeteer-core';

const BASE = 'http://localhost:3001';
const OUT = '/tmp/portfolio-verify';
const CHROME =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

fs.mkdirSync(OUT, { recursive: true });

const consoleIssues = [];

async function preparePage(browser, { width, height, theme, reducedMotion }) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  if (reducedMotion) {
    await page.emulateMediaFeatures([
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ]);
  }
  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleIssues.push(`[${msg.type()}] ${msg.text()}`);
    }
  });
  page.on('pageerror', (err) => consoleIssues.push(`[pageerror] ${err}`));
  await page.evaluateOnNewDocument((t) => {
    localStorage.setItem('theme', t);
  }, theme);
  return page;
}

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  await new Promise((r) => setTimeout(r, 800));
}

async function shootSections(page, label) {
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
  for (const id of sections) {
    await page.evaluate((sid) => {
      const el = document.getElementById(sid);
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 70);
    }, id);
    await new Promise((r) => setTimeout(r, 1200));
    await page.screenshot({ path: `${OUT}/${label}-${id}.png` });
  }
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars'],
});

// ---- Full matrix: quick scroll-through + console capture; screenshots for key combos
const matrix = [];
for (const locale of ['en', 'de'])
  for (const theme of ['light', 'dark'])
    for (const [width, height, vp] of [[1440, 900, 'desktop'], [390, 844, 'mobile']])
      matrix.push({ locale, theme, width, height, vp });

for (const { locale, theme, width, height, vp } of matrix) {
  const page = await preparePage(browser, { width, height, theme });
  await page.goto(`${BASE}/${locale}`, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  await scrollThrough(page);
  const label = `${locale}-${theme}-${vp}`;
  // Full section screenshots only for the two primary combos; hero+contact for the rest
  if ((locale === 'en' && theme === 'light') || (locale === 'de' && theme === 'dark')) {
    await shootSections(page, label);
  } else {
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: `${OUT}/${label}-hero.png` });
  }
  await page.close();
  console.log(`done: ${label}`);
}

// ---- Reduced motion check
{
  const page = await preparePage(browser, {
    width: 1440,
    height: 900,
    theme: 'light',
    reducedMotion: true,
  });
  await page.goto(`${BASE}/en`, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  const result = await page.evaluate(() => {
    const lenisActive = document.documentElement.classList.contains('lenis');
    const h1 = document.querySelector('h1');
    const h1Visible = h1 && getComputedStyle(h1).opacity !== '0';
    const track = document.querySelector('.marquee-track');
    const marqueeAnimation = track ? getComputedStyle(track).animationName : 'none';
    return { lenisActive, h1Visible, marqueeAnimation };
  });
  console.log('reduced-motion:', JSON.stringify(result));
  await page.screenshot({ path: `${OUT}/reduced-motion-hero.png` });
  await page.close();
}

// ---- Locale switch scroll restore
{
  const page = await preparePage(browser, { width: 1440, height: 900, theme: 'light' });
  await page.goto(`${BASE}/en`, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  await page.evaluate(() => window.scrollTo(0, 2000));
  await new Promise((r) => setTimeout(r, 500));
  // click the DE button in the navbar language switch
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll('header button')];
    const de = buttons.find((b) => b.textContent?.trim() === 'DE');
    de?.click();
  });
  await new Promise((r) => setTimeout(r, 3500));
  const after = await page.evaluate(() => ({
    url: location.pathname,
    scrollY: Math.round(window.scrollY),
  }));
  console.log('locale-switch:', JSON.stringify(after), '(expected /de, scrollY≈2000)');
  await page.screenshot({ path: `${OUT}/locale-switch-restored.png` });
  await page.close();
}

await browser.close();

console.log('\n--- console issues ---');
if (consoleIssues.length === 0) console.log('none');
else [...new Set(consoleIssues)].forEach((i) => console.log(i));
