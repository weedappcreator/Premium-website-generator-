/**
 * Ruflo Agent Orchestration Integration
 *
 * Connects the premium website generator to Ruflo's agent swarm system
 * for coordinated multi-agent website generation workflows.
 */

export interface RufloSwarmConfig {
  topology: 'hierarchical' | 'mesh' | 'adaptive';
  maxAgents: number;
  strategy: 'specialized' | 'balanced';
}

export interface RufloAgent {
  type: string;
  name: string;
  role: string;
}

export const DEFAULT_SWARM_CONFIG: RufloSwarmConfig = {
  topology: 'hierarchical',
  maxAgents: 6,
  strategy: 'specialized',
};

/** Agent team for website generation tasks */
export const WEBSITE_GEN_AGENTS: RufloAgent[] = [
  { type: 'researcher', name: 'design-researcher', role: 'Research brand references, competitor sites, and design trends' },
  { type: 'system-architect', name: 'site-architect', role: 'Plan page structure, component hierarchy, and data flow' },
  { type: 'coder', name: 'frontend-builder', role: 'Implement React components with TailwindCSS' },
  { type: 'reviewer', name: 'design-reviewer', role: 'Review output against quality gate and anti-slop rules' },
  { type: 'tester', name: 'a11y-tester', role: 'Verify WCAG 2.2 AA compliance and responsive behavior' },
  { type: 'performance-engineer', name: 'perf-optimizer', role: 'Optimize images, lazy loading, CLS, and bundle size' },
];

/** Memory namespaces used by the website generator */
export const MEMORY_NAMESPACES = {
  designs: 'website-designs',
  patterns: 'design-patterns',
  brands: 'brand-references',
  feedback: 'user-feedback',
  sessions: 'generation-sessions',
} as const;

/**
 * Build the ruflo swarm initialization config for a website generation task.
 */
export function buildSwarmConfig(taskDescription: string): {
  swarmConfig: RufloSwarmConfig;
  agents: RufloAgent[];
  memoryNamespace: string;
} {
  const isComplex = taskDescription.length > 200
    || taskDescription.includes('full site')
    || taskDescription.includes('complete website')
    || taskDescription.includes('redesign')
    || taskDescription.includes('multi-page');

  return {
    swarmConfig: {
      ...DEFAULT_SWARM_CONFIG,
      maxAgents: isComplex ? 6 : 4,
    },
    agents: isComplex
      ? WEBSITE_GEN_AGENTS
      : WEBSITE_GEN_AGENTS.slice(0, 4),
    memoryNamespace: MEMORY_NAMESPACES.designs,
  };
}

/**
 * Build memory store command for persisting design decisions.
 */
export function buildMemoryStoreParams(key: string, value: string, namespace?: string) {
  return {
    namespace: namespace || MEMORY_NAMESPACES.designs,
    key,
    value,
  };
}

/**
 * Build memory search command for retrieving past design patterns.
 */
export function buildMemorySearchParams(query: string, limit = 5) {
  return {
    query,
    limit,
    namespace: MEMORY_NAMESPACES.patterns,
  };
}
