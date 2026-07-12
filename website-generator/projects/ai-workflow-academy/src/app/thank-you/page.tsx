import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { LINKS } from '@/data/courses';

export const metadata = {
  title: 'Welcome — AI Workflow Academy',
  description: 'You\'re in! Welcome to the AI Workflow Academy community.'
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen pt-32 flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />

        <h1 className="font-display text-5xl md:text-6xl mb-4">You're In!</h1>

        <p className="text-xl text-slate-400 mb-12">Welcome to AI Workflow Academy. Your next steps are below.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-xl">
            <p className="text-3xl font-display mb-3">1</p>
            <h3 className="font-semibold mb-2">Join Discord</h3>
            <p className="text-slate-400 text-sm">Connect with builders in the AI Workflow Lab community.</p>
          </div>
          <div className="glass p-8 rounded-xl">
            <p className="text-3xl font-display mb-3">2</p>
            <h3 className="font-semibold mb-2">Download Resources</h3>
            <p className="text-slate-400 text-sm">Get free prompt packs for your chosen course track.</p>
          </div>
          <div className="glass p-8 rounded-xl">
            <p className="text-3xl font-display mb-3">3</p>
            <h3 className="font-semibold mb-2">Attend Live Class</h3>
            <p className="text-slate-400 text-sm">Join our next free training session.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2">
            Join Discord <ArrowRight className="w-5 h-5" />
          </a>
          <Link href="/free-resources" className="px-8 py-4 glass hover:glass-hover rounded-lg font-semibold transition">
            Download Resources
          </Link>
        </div>
      </div>
    </main>
  );
}
