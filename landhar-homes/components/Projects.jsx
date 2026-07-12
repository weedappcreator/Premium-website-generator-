const projects = [
  {
    title: 'Austinmer Coastal Residence',
    location: 'Austinmer, NSW',
    type: 'Custom Home',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Contemporary coastal home with expansive glass facade overlooking the ocean, captured at twilight',
    featured: true,
  },
  {
    title: 'Wahroonga Family Home',
    location: 'Wahroonga, Sydney',
    type: 'Knockdown Rebuild',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Two-storey family residence with mixed cladding, timber battens and established native garden',
  },
  {
    title: 'Stanwell Park Hillside',
    location: 'Stanwell Park, NSW',
    type: 'Complex Site',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cantilevered home on a steep coastal hillside with natural bushland surrounds',
  },
  {
    title: 'Mosman Heritage Rebuild',
    location: 'Mosman, Sydney',
    type: 'Knockdown Rebuild',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Elegant contemporary home with sandstone base and dark timber upper level in an established streetscape',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-neutral-900/20 py-32 lg:py-44" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-24">
          <div>
            <h2 id="projects-heading" className="text-3xl font-light tracking-tight text-neutral-100 sm:text-4xl">
              Selected Projects
            </h2>
            <p className="mt-4 text-base font-light text-neutral-400 max-w-lg">
              Each home is a response to its owners, its land and its context. No two are alike.
            </p>
          </div>
          <a
            href="#projects"
            className="text-[0.75rem] font-light tracking-widest text-neutral-400 uppercase transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm shrink-0"
          >
            View All Projects
          </a>
        </div>

        {/* Project grid - asymmetric masonry-like */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          {/* Featured project - large */}
          <article className="group relative lg:col-span-7 lg:row-span-2 overflow-hidden">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                width={1400}
                height={1050}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <p className="text-[0.65rem] font-light tracking-[0.2em] text-orange-500/80 uppercase mb-3">
                  {projects[0].type} &middot; {projects[0].location}
                </p>
                <h3 className="text-xl font-light tracking-tight text-neutral-100 lg:text-2xl">
                  {projects[0].title}
                </h3>
              </div>
            </div>
          </article>

          {/* Smaller projects */}
          {projects.slice(1).map((project) => (
            <article key={project.title} className="group relative lg:col-span-5 overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width={900}
                  height={563}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-[0.6rem] font-light tracking-[0.2em] text-orange-500/70 uppercase mb-2">
                    {project.type} &middot; {project.location}
                  </p>
                  <h3 className="text-base font-light tracking-tight text-neutral-100 lg:text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
