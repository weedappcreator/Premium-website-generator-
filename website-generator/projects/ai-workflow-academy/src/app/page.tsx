'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Code, Layers, Sparkles, Check, Users, Rocket } from 'lucide-react';
import { courses, LINKS } from '@/data/courses';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative pt-24 pb-32 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-300">AI Education Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Master Practical
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Workflows
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mb-10">
            Learn how to use AI tools as real production systems for architecture, design, and small business. Not random prompts. Structured workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition flex items-center justify-center gap-2"
            >
              Join Free Discord
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/courses"
              className="px-8 py-4 border border-slate-600 hover:border-blue-500 rounded-lg font-bold transition text-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16">What You Get</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: '3 Complete Courses',
                desc: 'ArchMotion AI for architecture, Claude Design AI for creatives, Claude Business AI for entrepreneurs.',
              },
              {
                icon: Zap,
                title: 'Production Workflows',
                desc: 'Learn structured AI production systems, not random prompts. Real tools, real results.',
              },
              {
                icon: Users,
                title: 'Active Community',
                desc: 'Join 1000+ builders in the Discord. Share work, get feedback, build together.',
              },
              {
                icon: Layers,
                title: 'Free Resources',
                desc: '65+ prompt packs (10 ArchMotion, 25 Design, 30 Business). Download immediately.',
              },
              {
                icon: Rocket,
                title: 'Live Training',
                desc: 'Weekly free live classes teaching workflows step-by-step with Q&A.',
              },
              {
                icon: Check,
                title: 'Affordable Paid Sprints',
                desc: '7-day intensive sprints ($47-$147) or full courses for deeper mastery.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-slate-800 hover:border-blue-500 transition bg-slate-900/50"
              >
                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">The Academy Method</h2>

          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
            {['Learn', 'Build', 'Apply', 'Share', 'Monetize'].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-black text-lg mx-auto mb-3">
                  {i + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 max-w-2xl mx-auto">
            Every course follows this proven method. You learn the workflow, build a real project, apply it to your work, share results with the community, and optionally monetize it as a service or internal system.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Three Course Tracks</h2>
          <p className="text-slate-400 mb-16">Choose one or master all three.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="p-8 rounded-lg border border-slate-800 hover:border-blue-500 hover:bg-slate-900 transition bg-slate-900/30"
              >
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-4">{course.subtitle}</p>
                <p className="text-slate-300 mb-6">{course.promise}</p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Workflow</p>
                  <div className="flex flex-wrap gap-1">
                    {course.workflow.slice(0, 3).map((w) => (
                      <span key={w} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-cyan-400">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">What Students Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Learned more about AI workflows in 3 days than months of random YouTube tutorials. The structure makes all the difference.',
                author: 'Maya Chen',
                role: 'Architect',
              },
              {
                quote: 'Now I use Claude for every design project. The prompts work and the community feedback keeps me sharp.',
                author: 'Jordan Park',
                role: 'Designer',
              },
              {
                quote: 'This taught me how to actually use AI for my business. Not just toys — real production systems.',
                author: 'Alex Rivera',
                role: 'Business Owner',
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-6 rounded-lg border border-slate-800 bg-slate-900/50">
                <p className="text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Questions?</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is this for beginners?',
                a: 'Yes. No prior AI experience needed. We start from zero and build to production-ready.',
              },
              {
                q: 'Do I need paid AI tools?',
                a: 'No. Everything works with free tiers. Most tools offer free access up to reasonable limits.',
              },
              {
                q: 'Is the Discord free?',
                a: 'Yes. Join free and get access to prompt packs, live training announcements, and community feedback.',
              },
              {
                q: 'Are courses live or recorded?',
                a: 'Both. Weekly live training via Google Meet + recorded replays posted in Discord for 24/7 access.',
              },
              {
                q: 'Can I use this to sell services?',
                a: 'Absolutely. Many students monetize by offering AI-powered design, content, or automation services.',
              },
              {
                q: 'What if I get stuck?',
                a: 'Ask in Discord. The community is active and helpful. Or book a 1:1 call for personalized help.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="p-4 rounded-lg border border-slate-800 hover:border-blue-500 transition cursor-pointer group"
              >
                <summary className="font-bold flex justify-between items-center">
                  {item.q}
                  <span className="group-open:rotate-180 transition">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </summary>
                <p className="text-slate-400 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Master AI Workflows?</h2>
          <p className="text-xl text-slate-400 mb-12">
            Start with free resources. Join the community. Attend live training. Then decide if paid courses are right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition flex items-center justify-center gap-2"
            >
              Join Free Discord
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/free-resources"
              className="px-8 py-4 border border-blue-500 hover:bg-blue-500/10 rounded-lg font-bold transition"
            >
              Download Free Resources
            </Link>
          </div>

          <p className="text-sm text-slate-500 mt-6">No credit card required. Community is free. Full courses available when you're ready.</p>
        </div>
      </section>
    </main>
  );
}
