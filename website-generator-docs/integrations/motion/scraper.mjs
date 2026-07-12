import puppeteer from 'puppeteer';

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scraper.mjs <example-slug>');
  console.error('Example: node scraper.mjs react-scroll-zoom-hero');
  console.error('');
  console.error('Browse examples: https://motion.dev/examples');
  process.exit(1);
}

const url = `https://motion.dev/examples/${slug}`;

console.log(`Fetching: ${url}\n`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for code block to render
  await page.waitForSelector('pre, code, [class*="code"]', { timeout: 10000 }).catch(() => {});

  // Try to extract the title
  const title = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1 ? h1.textContent.trim() : slug;
  });

  // Try to extract code content
  const codeContent = await page.evaluate(() => {
    // Look for code blocks
    const codeBlocks = document.querySelectorAll('pre code, pre, [class*="code"]');
    if (codeBlocks.length === 0) return null;
    
    // Get the largest code block (usually the main example)
    let largestBlock = '';
    codeBlocks.forEach(block => {
      const text = block.textContent || '';
      if (text.length > largestBlock.length) {
        largestBlock = text;
      }
    });
    return largestBlock;
  });

  // Get page text content as fallback
  const pageText = await page.evaluate(() => {
    const main = document.querySelector('main') || document.body;
    return main.textContent || '';
  });

  console.log(`# ${title}`);
  console.log(`# Source: ${url}\n`);

  if (codeContent && codeContent.length > 50) {
    console.log('```tsx');
    console.log(codeContent.trim());
    console.log('```');
  } else {
    // Fallback: show relevant text sections
    console.log('Note: Could not extract code directly. Page content summary:\n');
    const lines = pageText.split('\n').filter(l => l.trim().length > 20);
    console.log(lines.slice(0, 50).join('\n'));
    console.log('\n---');
    console.log('To get the source code manually:');
    console.log(`1. Visit ${url}`);
    console.log('2. Click "Copy code" or view source');
    console.log('3. Paste into your project');
  }
} catch (error) {
  console.error(`Error fetching ${url}:`, error.message);
  console.log(`\nFallback: Visit ${url} manually to get the source code.`);
} finally {
  await browser.close();
}
