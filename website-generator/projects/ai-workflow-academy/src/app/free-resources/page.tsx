import { ArrowRight } from 'lucide-react';
import { LINKS } from '@/data/courses';

export const metadata = {
  title: 'Free Resources — AI Workflow Academy',
  description: 'Download free prompt packs for ArchMotion AI, Claude Design AI, and Claude Business AI.'
};

export default function FreeResourcesPage() {
  const resources = [
    {
      title: 'ArchMotion AI Prompt Pack',
      desc: '10 Prompts to Turn Architectural Renders into Cinematic Videos',
      link: LINKS.archmotionPdf,
    },
    {
      title: 'Claude Design AI Prompt Pack',
      desc: '25 Claude Prompts for Designers, Branding & Landing Pages',
      link: LINKS.claudeDesignPdf,
    },
    {
      title: 'Claude Business AI Prompt Pack',
      desc: '30 Claude Prompts for Small Business Growth',
      link: LINKS.claudeBusinessPdf,
    },
  ];

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="mb-20">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Free Resources</h1>
          <p className="text-xl text-slate-400">Start with a free AI workflow. Download practical prompt packs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {resources.map((resource, i) => (
            <a
              key={i}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover glass p-8 rounded-xl group"
            >
              <h2 className="font-display text-2xl mb-3">{resource.title}</h2>
              <p className="text-slate-400 mb-6">{resource.desc}</p>
              <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition">
                Download <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>

        <div className="py-12 border-t border-slate-700/50 text-center">
          <h2 className="font-display text-3xl mb-4">Next Steps</h2>
          <p className="text-slate-400 mb-8 text-lg">After downloading your prompt pack, join the Discord community for live training and community support.</p>
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Join Free Discord <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
}
