import { ArrowRight, Users, BookOpen, MessageSquare, Award } from 'lucide-react';
import { LINKS } from '@/data/courses';

export const metadata = {
  title: 'Community — AI Workflow Academy',
  description: 'Join the AI Workflow Lab Discord community for prompt packs, live training, and peer feedback.'
};

export default function CommunityPage() {
  const benefits = [
    { icon: BookOpen, title: 'Free Prompt Packs', desc: 'Download practical prompt libraries' },
    { icon: MessageSquare, title: 'Live Training', desc: 'Weekly classes and live demos' },
    { icon: Users, title: 'Peer Feedback', desc: 'Get feedback on your projects' },
    { icon: Award, title: 'Early Access', desc: 'First access to paid sprints' },
  ];

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="mb-20">
          <h1 className="font-display text-5xl md:text-6xl mb-4">AI Workflow Lab</h1>
          <p className="text-xl text-slate-400 mb-8">Free Discord community for builders learning practical AI workflows.</p>
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Join Free Discord <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="py-20 border-t border-slate-700/50">
          <h2 className="font-display text-4xl mb-12">Community Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass p-8 rounded-xl">
                <benefit.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-display text-xl mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-20 border-t border-slate-700/50">
          <h2 className="font-display text-4xl mb-6">Community Channels</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-400">
            <div className="glass p-6 rounded-xl">
              <p className="font-semibold mb-2">#introductions</p>
              <p>Introduce yourself to the community</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <p className="font-semibold mb-2">#archmotion-ai</p>
              <p>Architecture animation discussions</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <p className="font-semibold mb-2">#claude-design</p>
              <p>Design and branding workflows</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <p className="font-semibold mb-2">#claude-business</p>
              <p>Small business automation</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <p className="font-semibold mb-2">#live-training</p>
              <p>Class announcements and replays</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <p className="font-semibold mb-2">#wins</p>
              <p>Share your wins and results</p>
            </div>
          </div>
        </div>

        <div className="py-20 border-t border-slate-700/50 text-center">
          <h2 className="font-display text-3xl mb-6">Ready to Join?</h2>
          <p className="text-slate-400 mb-8 text-lg">Connect with architects, designers, entrepreneurs, and AI builders.</p>
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Join Free Discord <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
}
