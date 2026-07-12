const https = require('https');
const fs = require('fs');
const path = require('path');

const REGISTRY_PATH = path.join(__dirname, '../../website-generator/TEMPLATE_REGISTRY.md');
const CACHE_DIR = path.join(__dirname, '../../.template-cache');

const INTEGRATIONS = [
  { name: 'Landing-Page', type: 'landing', stack: 'html/tailwind', owner: 'tailwindtoolbox', repo: 'Landing-Page', branch: 'master' },
  { name: 'Next-JS-Landing-Page-Starter-Template', type: 'landing', stack: 'nextjs', owner: 'ixartz', repo: 'Next-JS-Landing-Page-Starter-Template', branch: 'main' },
  { name: 'Precart', type: 'ecommerce', stack: 'nextjs', owner: 'mukesh7700', repo: 'Precart', branch: 'main' },
  { name: 'astro-landing-page', type: 'landing', stack: 'astro', owner: 'mhyfritz', repo: 'astro-landing-page', branch: 'master' },
  { name: 'landwind', type: 'landing', stack: 'tailwind', owner: 'themesberg', repo: 'landwind', branch: 'master' },
  { name: 'next-enterprise', type: 'enterprise', stack: 'nextjs', owner: 'Blazity', repo: 'next-enterprise', branch: 'main' },
  { name: 'next-js-boilerplate', type: 'boilerplate', stack: 'nextjs', owner: 'ixartz', repo: 'Next-js-Boilerplate', branch: 'main' },
  { name: 'next-saas-starter', type: 'saas', stack: 'nextjs', owner: 'Blazity', repo: 'next-saas-starter', branch: 'master' },
  { name: 'nextjs-subscription-payments', type: 'saas', stack: 'nextjs/stripe', owner: 'vercel', repo: 'nextjs-subscription-payments', branch: 'main' },
  { name: 'nextly-template', type: 'landing', stack: 'nextjs', owner: 'web3templates', repo: 'nextly-template', branch: 'master' },
  { name: 'nike_landing_page', type: 'landing', stack: 'react/tailwind', owner: 'adrianhajdin', repo: 'nike_landing_page', branch: 'main' },
  { name: 'open-react-template', type: 'landing', stack: 'react', owner: 'cruip', repo: 'open-react-template', branch: 'master' },
  { name: 'orebishopping', type: 'ecommerce', stack: 'react', owner: 'noorjsdivs', repo: 'orebishopping', branch: 'main' },
  { name: 'shadcn-landing-page', type: 'landing', stack: 'react/shadcn', owner: 'leoMirandaa', repo: 'shadcn-landing-page', branch: 'main' },
  { name: 'skateshop', type: 'ecommerce', stack: 'nextjs/shadcn', owner: 'sadmann7', repo: 'skateshop', branch: 'main' },
  { name: 'tailwind-landing-page-template', type: 'landing', stack: 'html/tailwind', owner: 'cruip', repo: 'tailwind-landing-page-template', branch: 'master' },
  { name: 'vercel-platforms', type: 'multi-tenant', stack: 'nextjs', owner: 'vercel', repo: 'platforms', branch: 'main' },
  { name: 'material-tailwind-dashboard', type: 'dashboard', stack: 'react/tailwind', owner: 'creativetimofficial', repo: 'material-tailwind-dashboard-react', branch: 'main' },
];

async function getDefaultBranch(owner, repo) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    https.get(url, { headers: { 'User-Agent': 'UIGen-Template-Loader' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.default_branch || 'main');
        } catch {
          resolve('main');
        }
      });
    }).on('error', () => resolve('main'));
  });
}

function fetchFromGitHub(owner, repo, branch, filePath) {
  return new Promise((resolve, reject) => {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        fetchFromGitHub(owner, repo, branch, filePath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`GitHub fetch failed: ${res.statusCode} for ${url}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function fetchTemplateStructure(owner, repo, branch) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
    const options = {
      headers: { 'User-Agent': 'UIGen-Template-Loader' }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.tree) {
            resolve(parsed.tree.filter(f => f.type === 'blob').map(f => f.path));
          } else {
            reject(new Error(`No tree in response: ${data}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function fetchTemplate(name, options = {}) {
  const template = INTEGRATIONS.find(t => t.name === name);
  if (!template) {
    throw new Error(`Template "${name}" not found. Run "list" to see available templates.`);
  }

  const cacheDir = path.join(CACHE_DIR, name);
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }

  const branch = await getDefaultBranch(template.owner, template.repo);
  console.log(`Fetching template structure: ${template.owner}/${template.repo} (branch: ${branch})...`);
  const files = await fetchTemplateStructure(template.owner, template.repo, branch);
  
  const includePatterns = options.include || ['package.json', 'src/', 'app/', 'pages/', 'components/', 'public/', 'styles/', 'tailwind.config', 'postcss.config', 'tsconfig', 'next.config'];
  const excludePatterns = options.exclude || ['.git/', 'node_modules/', '.next/', 'dist/', 'build/', 'yarn.lock', 'package-lock.json', '.env'];

  const relevantFiles = files.filter(f => {
    const isIncluded = includePatterns.some(p => f.startsWith(p) || f.includes(p));
    const isExcluded = excludePatterns.some(p => f.includes(p));
    return isIncluded && !isExcluded;
  });

  console.log(`Fetching ${relevantFiles.length} files...`);
  
  const results = {};
  for (const file of relevantFiles.slice(0, 50)) {
    try {
      const content = await fetchFromGitHub(template.owner, template.repo, branch, file);
      const localPath = path.join(cacheDir, file);
      const dir = path.dirname(localPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(localPath, content);
      results[file] = content;
    } catch (e) {
      console.warn(`  Failed to fetch ${file}: ${e.message}`);
    }
  }

  console.log(`Cached ${Object.keys(results).length} files to ${cacheDir}`);
  return { template, files: Object.keys(results), cacheDir };
}

function listTemplates(filter) {
  const filtered = filter 
    ? INTEGRATIONS.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()) || t.type.includes(filter.toLowerCase()) || t.stack.includes(filter.toLowerCase()))
    : INTEGRATIONS;

  console.log(`\nAvailable Templates (${filtered.length}):`);
  console.log('─'.repeat(80));
  console.log('Name'.padEnd(45) + 'Type'.padEnd(18) + 'Stack');
  console.log('─'.repeat(80));
  filtered.forEach(t => {
    console.log(`${t.name.padEnd(45)}${t.type.padEnd(18)}${t.stack}`);
  });
  console.log('');
}

async function main() {
  const [command, arg] = process.argv.slice(2);

  if (!command || command === 'list') {
    listTemplates(arg);
  } else if (command === 'fetch' && arg) {
    try {
      await fetchTemplate(arg);
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
  } else if (command === 'search' && arg) {
    listTemplates(arg);
  } else {
    console.log('Usage:');
    console.log('  node template-loader.js list              - List all templates');
    console.log('  node template-loader.js search <query>    - Search templates');
    console.log('  node template-loader.js fetch <name>      - Fetch template from GitHub');
    console.log('\nExamples:');
    console.log('  node template-loader.js list');
    console.log('  node template-loader.js search landing');
    console.log('  node template-loader.js fetch next-saas-starter');
  }
}

main();
