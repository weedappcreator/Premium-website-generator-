import { ArrowRight } from 'lucide-react';
import { LINKS } from '@/data/courses';

export const metadata = {
  title: 'Apply — AI Workflow Academy',
  description: 'Tell us about your goals and we\'ll recommend the best course and resources for you.'
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <div className="mb-12">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Tell Us What You Want to Build</h1>
          <p className="text-xl text-slate-400">Complete the onboarding form so we can recommend the best course track and resources for your goals.</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-xl">
          {/* Tally Form Embed */}
          <iframe
            src={LINKS.onboardingForm}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="AI Workflow Academy Onboarding"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="mt-12 text-center text-slate-400">
          <p className="text-sm">Your information is safe. We'll never spam you.</p>
        </div>
      </div>
    </main>
  );
}
