export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-end" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Contemporary architectural home with clean geometric lines, warm interior light visible through floor-to-ceiling glass at dusk"
          className="h-full w-full object-cover"
          width={2000}
          height={1333}
          fetchPriority="high"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <div className="max-w-3xl">
          {/* Kicker - only one, intentional */}
          <p className="mb-6 text-[0.7rem] font-light tracking-[0.3em] text-orange-500/90 uppercase">
            Premium Custom Home Builder &middot; Sydney &amp; NSW
          </p>

          <h1 className="text-4xl font-light leading-[1.1] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
            A Home of<br />
            <span className="text-neutral-300">Uncompromising Quality</span>
          </h1>

          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-neutral-400 lg:text-lg">
            Landhar Homes guides you through the design and construction of a custom home with clarity, confidence and complete trust in the process.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-orange-600 bg-orange-600/10 px-8 py-4 text-[0.75rem] font-normal tracking-widest text-orange-500 uppercase transition-all duration-300 hover:bg-orange-600 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              Discuss Your Project
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-[0.75rem] font-light tracking-widest text-neutral-400 uppercase transition-colors duration-300 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              Explore Our Homes
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-neutral-600" aria-hidden="true">
          <span className="text-[0.6rem] tracking-widest uppercase rotate-90 origin-center translate-x-4">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-neutral-600 to-transparent mt-4" />
        </div>
      </div>
    </section>
  );
}
