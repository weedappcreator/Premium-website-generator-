import Link from 'next/link';
import { LINKS } from '@/data/courses';

export function Footer() {
  return (
    <footer className="border-t border-slate-700/50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-slate-700/50">
          <div>
            <h3 className="font-display text-lg mb-4">AI Academy</h3>
            <p className="text-slate-400">Practical AI workflows for architecture, design, and small business.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <Link href="/courses" className="block hover:text-white transition">Courses</Link>
              <Link href="/free-resources" className="block hover:text-white transition">Resources</Link>
              <Link href="/community" className="block hover:text-white transition">Community</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition block">Discord</a>
          </div>
        </div>
        <p className="text-slate-500 text-sm text-center">© 2026 AI Workflow Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
