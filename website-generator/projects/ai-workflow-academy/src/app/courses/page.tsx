import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { courses } from '@/data/courses';

export const metadata = {
  title: 'Courses — AI Workflow Academy',
  description: 'Explore our three core course tracks: ArchMotion AI, Claude Design AI, and Claude Business AI.'
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="mb-20">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Explore Courses</h1>
          <p className="text-xl text-slate-400">Master practical AI workflows in architecture, design, or small business.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {courses.map((course) => (
            <div key={course.slug} className="glass-hover glass p-8 rounded-xl h-full">
              <h2 className="font-display text-3xl mb-2">{course.title}</h2>
              <p className="text-sm text-blue-400 mb-4">{course.subtitle}</p>
              <p className="text-slate-400 mb-8">{course.description}</p>

              <div className="mb-8">
                <p className="text-xs text-slate-500 uppercase mb-3">Audience</p>
                <p className="text-sm text-slate-300">{course.audience}</p>
              </div>

              <div className="mb-8">
                <p className="text-xs text-slate-500 uppercase mb-3">Workflow</p>
                <div className="flex gap-2 flex-wrap">
                  {course.workflow.map(step => (
                    <span key={step} className="text-xs px-2 py-1 bg-slate-800 rounded">{step}</span>
                  ))}
                </div>
              </div>

              <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold">
                View Course <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
