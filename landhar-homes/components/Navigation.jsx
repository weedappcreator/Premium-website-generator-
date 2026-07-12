import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Custom Homes', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Building Insights', href: '#insights' },
  { label: 'Service Areas', href: '#areas' },
];

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/50' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="Landhar Homes - Home">
          <div className="flex flex-col">
            <span className="text-lg font-light tracking-[0.25em] text-neutral-100 uppercase">Landhar</span>
            <span className="text-[0.65rem] font-light tracking-[0.35em] text-neutral-400 uppercase -mt-0.5">Homes</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.8rem] font-light tracking-wide text-neutral-400 transition-colors duration-300 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-none border border-neutral-600 px-6 py-2.5 text-[0.75rem] font-light tracking-widest text-neutral-200 uppercase transition-all duration-300 hover:border-orange-600 hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
          >
            Discuss Your Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-neutral-400 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 backdrop-blur-lg border-t border-neutral-800/50 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-light text-neutral-300 hover:text-neutral-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-4 border border-neutral-600 px-6 py-3 text-sm font-light tracking-widest text-neutral-200 uppercase hover:border-orange-600 hover:text-orange-500 transition-all"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
