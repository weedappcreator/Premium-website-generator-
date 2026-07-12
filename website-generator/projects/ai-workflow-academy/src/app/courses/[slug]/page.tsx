import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { courses, LINKS } from '@/data/courses';

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug);
  return {
    title: `${course?.title} — AI Workflow Academy`,
    description: course?.promise || 'Learn practical AI workflows'
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug);

  if (!course) return <div className="pt-32 text-center">Course not found</div>;

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-32">
        {/* Hero */}
        <div className="mb-20">
          <p className="text-blue-400 text-sm font-semibold uppercase mb-2">Course</p>
          <h1 className="font-display text-5xl md:text-7xl mb-4">{course.title}</h1>
          <p className="text-2xl text-slate-300 mb-4">{course.subtitle}</p>
          <p className="text-lg text-slate-400 mb-8">{course.promise}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={LINKS.archmotionPdf} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
              Download Free {course.title} Prompt Pack
            </a>
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass hover:glass-hover rounded-lg font-semibold transition">
              Join Discord
            </a>
          </div>
        </div>

        {/* Audience */}
        <section className="mb-20 py-12 border-t border-slate-700/50">
          <h2 className="font-display text-3xl mb-6">Who This Is For</h2>
          <p className="text-lg text-slate-400">{course.audience}</p>
        </section>

        {/* Workflow */}
        <section className="mb-20 py-12 border-t border-slate-700/50">
          <h2 className="font-display text-3xl mb-8">The Workflow</h2>
          <div className="flex flex-wrap gap-4">
            {course.workflow.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-display font-bold">{i + 1}</div>
                <span className="text-lg">{step}</span>
                {i < course.workflow.length - 1 && <ArrowRight className="w-6 h-6 text-slate-600" />}
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="mb-20 py-12 border-t border-slate-700/50">
          <h2 className="font-display text-3xl mb-8">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {course.modules.map((module) => (
              <div key={module} className="glass p-6 rounded-lg">
                <p className="font-semibold">{module}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-20 py-12 border-t border-slate-700/50">
          <h2 className="font-display text-3xl mb-8">Tools & Platforms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.tools.map((tool) => (
              <div key={tool} className="glass p-4 rounded-lg flex items-center">
                <span className="text-lg">{tool}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 border-t border-slate-700/50 text-center">
          <h2 className="font-display text-3xl mb-6">Ready to Start?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
              Enroll Now
            </Link>
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass hover:glass-hover rounded-lg font-semibold transition">
              Join Discord
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
