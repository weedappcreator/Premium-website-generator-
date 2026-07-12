const articles = [
  {
    title: 'What to Consider Before a Knockdown Rebuild',
    category: 'Planning',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Architectural blueprint spread across a timber desk with scale ruler and pencil',
  },
  {
    title: 'Building on a Sloping Block: Site Costs Explained',
    category: 'Site Intelligence',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Aerial view of a residential construction site on sloping land with retaining walls',
  },
  {
    title: 'Understanding the Custom Home Design Process',
    category: 'Design',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Interior of a completed custom home showing open-plan living with raked ceiling',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative bg-neutral-900/20 py-32 lg:py-44" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <h2 id="insights-heading" className="text-3xl font-light tracking-tight text-neutral-100 sm:text-4xl">
              Building Insights
            </h2>
            <p className="mt-4 text-base font-light text-neutral-400 max-w-lg">
              Knowledge that empowers better building decisions. Technical subjects explained in clear, accessible language.
            </p>
          </div>
          <a
            href="#insights"
            className="text-[0.75rem] font-light tracking-widest text-neutral-400 uppercase transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm shrink-0"
          >
            All Articles
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <div className="relative aspect-[3/2] overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.65rem] font-light tracking-[0.2em] text-orange-500/70 uppercase">
                  {article.category}
                </span>
                <span className="text-neutral-700" aria-hidden="true">&middot;</span>
                <span className="text-[0.65rem] font-light tracking-wide text-neutral-600">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-light tracking-tight text-neutral-200 transition-colors duration-300 group-hover:text-orange-500">
                <a href="#insights" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm">
                  {article.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
