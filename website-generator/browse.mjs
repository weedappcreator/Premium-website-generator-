import puppeteer from 'puppeteer';

const query = process.argv.slice(2).join(' ') || 'https://www.google.com';
const isUrl = query.startsWith('http://') || query.startsWith('https://');
const url = isUrl ? query : `https://www.google.com/search?q=${encodeURIComponent(query)}`;

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ['--start-maximized']
});

const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle2' });

console.log(`Opened: ${url}`);
console.log('Browser is running. Close the window to exit.');
