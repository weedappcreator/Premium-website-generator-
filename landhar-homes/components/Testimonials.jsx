const testimonials = [
  {
    quote: "From the first conversation, we felt understood. Landhar didn't just ask what we wanted to build — they asked how we wanted to live. The result is a home that feels like it was always meant to be here.",
    name: 'Sarah & David Chen',
    project: 'Custom Home, Austinmer',
  },
  {
    quote: "The knockdown rebuild process felt overwhelming until Landhar walked us through every stage. Their clarity gave us the confidence to commit to a home we'd been dreaming about for years.",
    name: 'Michael Torres',
    project: 'Knockdown Rebuild, Wahroonga',
  },
  {
    quote: "Our block is steep and everyone said it would be a nightmare. Landhar saw it differently. They designed around the land rather than against it, and the result is extraordinary.",
    name: 'James & Angela Wright',
    project: 'Sloping Site, Stanwell Park',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-neutral-950 py-32 lg:py-44" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>

        {/* Featured testimonial */}
        <div className="relative mb-20 lg:mb-0">
          <blockquote className="relative">
            <div className="absolute -top-6 -left-2 text-8xl font-serif text-neutral-800/30 select-none leading-none" aria-hidden="true">
              &ldquo;
            </div>
            <p className="relative text-2xl font-light leading-relaxed text-neutral-200 sm:text-3xl lg:text-4xl lg:leading-[1.4] max-w-4xl" style={{ textWrap: 'pretty' }}>
              {testimonials[0].quote}
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <div className="h-px w-8 bg-orange-600/60" aria-hidden="true" />
              <div>
                <cite className="not-italic text-sm font-light text-neutral-300">
                  {testimonials[0].name}
                </cite>
                <p className="text-[0.7rem] font-light tracking-wide text-neutral-500 mt-0.5">
                  {testimonials[0].project}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Additional testimonials */}
        <div className="grid grid-cols-1 gap-px bg-neutral-800/20 mt-20 sm:grid-cols-2">
          {testimonials.slice(1).map((testimonial) => (
            <blockquote key={testimonial.name} className="bg-neutral-950 p-10 lg:p-14">
              <p className="text-base font-light leading-[1.8] text-neutral-400" style={{ textWrap: 'pretty' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-3">
                <div className="h-px w-6 bg-orange-600/40" aria-hidden="true" />
                <div>
                  <cite className="not-italic text-sm font-light text-neutral-300">
                    {testimonial.name}
                  </cite>
                  <p className="text-[0.65rem] font-light tracking-wide text-neutral-500 mt-0.5">
                    {testimonial.project}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
