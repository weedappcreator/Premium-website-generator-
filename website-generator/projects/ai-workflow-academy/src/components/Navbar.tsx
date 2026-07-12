'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { LINKS } from '@/data/courses';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold">
          AI Academy
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/courses" className="text-slate-300 hover:text-white transition">Courses</Link>
          <Link href="/free-resources" className="text-slate-300 hover:text-white transition">Resources</Link>
          <Link href="/community" className="text-slate-300 hover:text-white transition">Community</Link>
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            Join Discord
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-700 p-4 space-y-4">
          <Link href="/courses" className="block text-slate-300 hover:text-white">Courses</Link>
          <Link href="/free-resources" className="block text-slate-300 hover:text-white">Resources</Link>
          <Link href="/community" className="block text-slate-300 hover:text-white">Community</Link>
          <a href={LINKS.discord} target="_blank" className="block px-4 py-2 bg-blue-600 rounded-lg text-center">Join Discord</a>
        </div>
      )}
    </nav>
  );
}
