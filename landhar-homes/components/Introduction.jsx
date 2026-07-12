export default function Introduction() {
  return (
    <section className="relative bg-neutral-950 py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left column - statement */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="h-px w-16 bg-orange-600/60 mb-10" aria-hidden="true" />
              <h2 className="text-2xl font-light leading-snug tracking-tight text-neutral-100 sm:text-3xl" style={{ textWrap: 'balance' }}>
                A trusted custom-home authority that combines architectural quality with clear, expert guidance.
              </h2>
            </div>
          </div>

          {/* Right column - details */}
          <div className="lg:col-span-7 lg:pt-4">
            <div className="space-y-12 text-base font-light leading-[1.85] text-neutral-400">
              <p>
                Building a custom home is among the most significant investments you will make. It demands a builder who understands not only the craft of construction, but the importance of guiding you through every decision with transparency and care.
              </p>
              <p>
                Landhar Homes exists for homeowners who expect more. More consideration in design. More clarity in communication. More precision in execution. We work with clients across Sydney, Wollongong, Newcastle and the Central Coast who are ready to build without compromise.
              </p>
              <p className="text-neutral-300">
                Whether you are building on a complex site, replacing an existing home through a knockdown rebuild, or realising an architectural vision from the ground up, we bring the expertise to deliver confidently at every stage.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-px bg-neutral-800/30 sm:grid-cols-3">
              {[
                { value: '25+', label: 'Years Combined Experience' },
                { value: '150+', label: 'Homes Delivered' },
                { value: '$1.5M+', label: 'Typical Project Investment' },
              ].map((stat) => (
                <div key={stat.label} className="bg-neutral-950 p-8">
                  <p className="text-3xl font-light tracking-tight text-neutral-100" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.7rem] font-light tracking-wide text-neutral-500 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
