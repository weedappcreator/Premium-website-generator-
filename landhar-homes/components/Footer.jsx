const footerLinks = {
  services: [
    { label: 'Custom Homes', href: '#services' },
    { label: 'Knockdown Rebuild', href: '#services' },
    { label: 'Complex Sites', href: '#services' },
    { label: 'Our Process', href: '#process' },
  ],
  company: [
    { label: 'About Landhar', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Building Insights', href: '#insights' },
    { label: 'Service Areas', href: '#areas' },
  ],
  contact: [
    { label: 'Discuss Your Project', href: '#contact' },
    { label: 'hello@landharhomes.com.au', href: 'mailto:hello@landharhomes.com.au' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex flex-col mb-6">
              <span className="text-lg font-light tracking-[0.25em] text-neutral-100 uppercase">Landhar</span>
              <span className="text-[0.65rem] font-light tracking-[0.35em] text-neutral-500 uppercase -mt-0.5">Homes</span>
            </div>
            <p className="text-sm font-light leading-relaxed text-neutral-500 max-w-sm">
              Premium custom home builder. Designing and constructing architecturally considered homes across Sydney and NSW.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-[0.65rem] font-light tracking-[0.2em] text-neutral-400 uppercase mb-6">Services</h3>
                <ul className="space-y-3" role="list">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm font-light text-neutral-500 transition-colors hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[0.65rem] font-light tracking-[0.2em] text-neutral-400 uppercase mb-6">Company</h3>
                <ul className="space-y-3" role="list">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm font-light text-neutral-500 transition-colors hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[0.65rem] font-light tracking-[0.2em] text-neutral-400 uppercase mb-6">Contact</h3>
                <ul className="space-y-3" role="list">
                  {footerLinks.contact.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm font-light text-neutral-500 transition-colors hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[0.7rem] font-light text-neutral-600">
            &copy; {new Date().getFullYear()} Landhar Homes Pty Ltd. All rights reserved. NSW Licence #XXXXXX.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[0.7rem] font-light text-neutral-600 hover:text-neutral-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm">
              Privacy
            </a>
            <a href="#" className="text-[0.7rem] font-light text-neutral-600 hover:text-neutral-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
