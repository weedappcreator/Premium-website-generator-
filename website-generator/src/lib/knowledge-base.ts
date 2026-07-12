import fs from 'fs';
import path from 'path';

const KB_ROOT = path.join(process.cwd(), 'website-generator');

export interface KBContext {
  designDirection?: string;
  skill?: string;
  techStack?: string;
  integrations?: string[];
}

function readMarkdown(filePath: string): string | null {
  try {
    const fullPath = path.join(KB_ROOT, filePath);
    if (!fs.existsSync(fullPath)) return null;
    return fs.readFileSync(fullPath, 'utf-8');
  } catch {
    return null;
  }
}

function getDesignDirections(direction?: string): string {
  const content = readMarkdown('integrations/design-directions/DIRECTIONS.md');
  if (!content) return '';
  
  if (direction) {
    const lines = content.split('\n');
    const sectionStart = lines.findIndex(l => l.toLowerCase().includes(direction.toLowerCase()));
    if (sectionStart >= 0) {
      const sectionEnd = lines.slice(sectionStart + 1).findIndex(l => l.startsWith('## '));
      const end = sectionEnd >= 0 ? sectionStart + 1 + sectionEnd : lines.length;
      return lines.slice(sectionStart, Math.min(end, sectionStart + 50)).join('\n');
    }
  }
  
  return content.split('\n').slice(0, 100).join('\n');
}

function getSkillContent(skillName?: string): string {
  if (!skillName) return '';
  const skillPath = `skills/${skillName}/SKILL.md`;
  return readMarkdown(skillPath) || '';
}

function getTechStackContent(stackName?: string): string {
  if (!stackName) return '';
  const stackPath = `techstacks/${stackName}/STACK.md`;
  return readMarkdown(stackPath) || '';
}

function getIntegrationContent(integrationNames?: string[]): string {
  if (!integrationNames?.length) return '';
  const contents: string[] = [];
  for (const name of integrationNames) {
    const content = readMarkdown(`integrations/${name}/README.md`) || 
                    readMarkdown(`integrations/${name}/INTEGRATION.md`);
    if (content) contents.push(`## ${name}\n${content.slice(0, 2000)}`);
  }
  return contents.join('\n\n');
}

export function buildKBContext(context: KBContext): string {
  const sections: string[] = [];

  const designDir = getDesignDirection(context.designDirection);
  if (designDir) sections.push(`## Visual Design Direction\n${designDir}`);

  const skill = getSkillContent(context.skill);
  if (skill) sections.push(`## Website Type Skill\n${skill}`);

  const techStack = getTechStackContent(context.techStack);
  if (techStack) sections.push(`## Tech Stack\n${techStack}`);

  const integrations = getIntegrationContent(context.integrations);
  if (integrations) sections.push(`## Integrations\n${integrations}`);

  return sections.join('\n\n');
}

export function detectContextFromPrompt(userMessage: string): KBContext {
  const msg = userMessage.toLowerCase();
  const context: KBContext = {};

  if (msg.includes('landing')) context.skill = 'landing-page';
  else if (msg.includes('ecommerce') || msg.includes('shop') || msg.includes('store')) context.skill = 'ecommerce';
  else if (msg.includes('portfolio') || msg.includes('personal')) context.skill = 'portfolio';
  else if (msg.includes('saas') || msg.includes('product')) context.skill = 'saas';
  else if (msg.includes('blog') || msg.includes('content')) context.skill = 'blog';
  else if (msg.includes('dashboard') || msg.includes('admin')) context.skill = 'dashboard';
  else if (msg.includes('pricing')) context.skill = 'pricing-page';
  else if (msg.includes('doc') || msg.includes('api')) context.skill = 'docs-page';

  if (msg.includes('dark')) context.designDirection = 'dark';
  else if (msg.includes('minimal') || msg.includes('clean')) context.designDirection = 'minimal';
  else if (msg.includes('brutal')) context.designDirection = 'brutalist';
  else if (msg.includes('glass')) context.designDirection = 'glassmorphism';
  else if (msg.includes('gradient')) context.designDirection = 'gradient';
  else if (msg.includes('bento')) context.designDirection = 'bento';

  if (msg.includes('next.js') || msg.includes('nextjs')) context.techStack = 'nextjs';
  else if (msg.includes('astro')) context.techStack = 'astro';
  else if (msg.includes('react')) context.techStack = 'react';
  else if (msg.includes('remix')) context.techStack = 'remix';
  else if (msg.includes('vue') || msg.includes('nuxt')) context.techStack = 'nuxt';

  const integrations: string[] = [];
  if (msg.includes('auth') || msg.includes('login') || msg.includes('sign')) integrations.push('auth');
  if (msg.includes('payment') || msg.includes('stripe') || msg.includes('checkout')) integrations.push('payment');
  if (msg.includes('analytics') || msg.includes('tracking')) integrations.push('analytics');
  if (msg.includes('cms') || msg.includes('content management')) integrations.push('cms');
  if (msg.includes('email') || msg.includes('newsletter')) integrations.push('email');
  if (msg.includes('seo') || msg.includes('search engine')) integrations.push('seo');
  if (msg.includes('animation') || msg.includes('motion')) integrations.push('motion');
  if (integrations.length) context.integrations = integrations;

  return context;
}
