import { useState } from 'react';

const faqs = [
  {
    question: 'What is the first step in building a custom home?',
    answer: 'The process begins with an initial conversation about your land, lifestyle, design ambitions and project requirements. This discovery session helps us understand your vision and advise on the best path forward for your specific situation.',
  },
  {
    question: 'Can Landhar Homes help with a knockdown rebuild?',
    answer: 'Yes. We guide homeowners through the key design, planning, approval and construction considerations involved in replacing an existing home. This includes assessing your current site, understanding council requirements and developing a design that maximises the potential of land you already own.',
  },
  {
    question: 'Do you build on sloping or challenging blocks?',
    answer: 'Yes. Site constraints are considered early so that the design responds intelligently to the land and avoids treating the site as an afterthought. Our experience with complex sites means we can identify potential challenges before they become expensive problems.',
  },
  {
    question: 'Can you help us understand the building process?',
    answer: 'Clear communication and homeowner education are central to our approach. We explain technical subjects in straightforward language and ensure you understand what is happening at every stage, so you can make informed decisions with confidence.',
  },
  {
    question: 'Which areas does Landhar Homes service?',
    answer: 'We work across Sydney Metro, Wollongong, Newcastle, the Central Coast and selected surrounding or regional locations, subject to project suitability. If you are unsure whether your location falls within our service area, we encourage you to reach out.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-neutral-950 py-32 lg:py-44" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 id="faq-heading" className="text-3xl font-light tracking-tight text-neutral-100 sm:text-4xl">
                Common Questions
              </h2>
              <p className="mt-6 text-base font-light leading-relaxed text-neutral-400">
                Answers to the questions most frequently raised during initial conversations with prospective clients.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 text-[0.75rem] font-light tracking-widest text-orange-500 uppercase transition-colors hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm"
              >
                Have another question?
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-neutral-800/50">
              {faqs.map((faq, index) => (
                <div key={index} className="py-8">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-base font-light text-neutral-200 pr-8 lg:text-lg">
                      {faq.question}
                    </span>
                    <span className="mt-1 flex-shrink-0" aria-hidden="true">
                      <svg
                        className={`h-5 w-5 text-neutral-500 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ease-out ${
                      openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm font-light leading-[1.8] text-neutral-400 max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
