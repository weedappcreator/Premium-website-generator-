import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Workflow Academy — Practical AI Courses for Architecture, Design & Small Business',
  description: 'Learn practical AI workflows for architecture, design, and small business. Turn AI tools into repeatable production systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
