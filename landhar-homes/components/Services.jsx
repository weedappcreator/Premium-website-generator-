const services = [
  {
    title: 'Custom Homes',
    description: 'Every home responds to your lifestyle, priorities, land and architectural vision. From initial concept through to handover, we design and build homes that are unmistakably yours.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern custom home interior with double-height ceiling, natural timber and polished concrete',
  },
  {
    title: 'Knockdown Rebuild',
    description: 'Replace an existing home with one that properly serves your life. We guide you through demolition, design, approvals and construction on land you already know and love.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Newly completed two-storey family home with landscaped frontage at golden hour',
  },
  {
    title: 'Complex & Sloping Sites',
    description: 'Challenging land demands early expertise. We consider site constraints from the outset so the design responds intelligently to the land rather than fighting it.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Architectural home built into a hillside with cantilevered living areas and bushland views',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-900/30 py-32 lg:py-44" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-20 lg:mb-28">
          <h2 id="services-heading" className="text-3xl font-light tracking-tight text-neutral-100 sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-neutral-400">
            Three distinct paths to an exceptional home. Each guided by architectural thinking, site intelligence and an unwavering commitment to quality.
          </p>
        </div>

        {/* Services grid */}
        <div className="space-y-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-2 bg-neutral-900/50 transition-colors duration-500 hover:bg-neutral-900/80"
            >
              {/* Image - alternate order on desktop */}
              <div className={`relative aspect-[16/10] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width={1200}
                  height={750}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-950/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center p-10 lg:p-16 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-[0.65rem] font-light tracking-[0.3em] text-orange-500/70 uppercase mb-6" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-light tracking-tight text-neutral-100 lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-6 text-base font-light leading-[1.8] text-neutral-400">
                  {service.description}
                </p>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 text-[0.75rem] font-light tracking-widest text-neutral-300 uppercase transition-colors duration-300 hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm"
                  >
                    Learn more
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
