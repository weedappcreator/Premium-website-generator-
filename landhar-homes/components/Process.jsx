const steps = [
  {
    phase: 'Discovery',
    title: 'Understanding Your Vision',
    description: 'We begin with a detailed conversation about your land, lifestyle, design ambitions and project requirements. This initial consultation establishes the foundation for everything that follows.',
  },
  {
    phase: 'Design',
    title: 'Shaping the Architecture',
    description: 'Working collaboratively, we develop a design that responds to your site, budget and aspirations. Every decision is explained clearly so you maintain confidence throughout.',
  },
  {
    phase: 'Approvals',
    title: 'Navigating the Process',
    description: 'We manage council submissions, engineering requirements, energy assessments and compliance. You remain informed without being overwhelmed by bureaucratic complexity.',
  },
  {
    phase: 'Selections',
    title: 'Choosing with Clarity',
    description: 'Material selections, fixtures and finishes are guided with expert knowledge. We help you understand the performance, appearance and lasting quality of each choice.',
  },
  {
    phase: 'Construction',
    title: 'Building Without Compromise',
    description: 'Meticulous site management ensures your home is built to the standard presented in design. Regular communication keeps you connected to progress at every stage.',
  },
  {
    phase: 'Handover',
    title: 'Your Home, Delivered',
    description: 'A comprehensive inspection and walkthrough ensures everything meets our shared expectations. Your home is delivered complete, considered and ready for life.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-neutral-950 py-32 lg:py-44" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <h2 id="process-heading" className="text-3xl font-light tracking-tight text-neutral-100 sm:text-4xl">
              Our Process
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base font-light leading-relaxed text-neutral-400">
              Building a custom home involves many decisions. Our process ensures you understand what is happening and what comes next at every stage, replacing uncertainty with confidence.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-px bg-neutral-800/20 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.phase} className="relative bg-neutral-950 p-10 lg:p-12 group">
              {/* Number */}
              <span className="block text-5xl font-extralight text-neutral-800/60 mb-8 transition-colors duration-500 group-hover:text-orange-600/30" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Phase label */}
              <p className="text-[0.65rem] font-light tracking-[0.25em] text-orange-500/60 uppercase mb-3">
                {step.phase}
              </p>

              <h3 className="text-lg font-light tracking-tight text-neutral-200 mb-4">
                {step.title}
              </h3>

              <p className="text-sm font-light leading-[1.8] text-neutral-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
