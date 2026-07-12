import { useState } from 'react';

const projectTypes = [
  'Custom Home',
  'Knockdown Rebuild',
  'Complex / Sloping Site',
  'Not sure yet',
];

const stages = [
  'Just exploring',
  'Own land, ready to plan',
  'Have plans, seeking builder',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    stage: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section id="contact" className="relative bg-neutral-900/30 py-32 lg:py-44" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left - CTA content */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="h-px w-16 bg-orange-600/60 mb-10" aria-hidden="true" />
              <h2 id="contact-heading" className="text-3xl font-light tracking-tight text-neutral-100 sm:text-4xl">
                Discuss Your Project
              </h2>
              <p className="mt-6 text-base font-light leading-relaxed text-neutral-400">
                Every exceptional home begins with a conversation. Tell us about your land, your vision and where you are in the process. We will respond within one business day.
              </p>

              <div className="mt-12 space-y-6 text-sm font-light text-neutral-500">
                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-orange-600/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-neutral-300">Service Areas</p>
                    <p className="mt-1 text-neutral-500">Sydney Metro, Wollongong, Newcastle, Central Coast &amp; selected regional NSW</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-orange-600/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-neutral-300">Response Time</p>
                    <p className="mt-1 text-neutral-500">Within one business day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-orange-600/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div>
                    <p className="text-neutral-300">No Obligation</p>
                    <p className="mt-1 text-neutral-500">Initial consultation is complimentary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Name & Email */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-[0.7rem] font-light tracking-wider text-neutral-400 uppercase mb-3">
                    Full Name <span className="text-orange-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-base font-light text-neutral-200 placeholder-neutral-600 transition-colors duration-300 focus:border-orange-600 focus:outline-none focus:ring-0"
                    placeholder="Your name…"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[0.7rem] font-light tracking-wider text-neutral-400 uppercase mb-3">
                    Email <span className="text-orange-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-base font-light text-neutral-200 placeholder-neutral-600 transition-colors duration-300 focus:border-orange-600 focus:outline-none focus:ring-0"
                    placeholder="your@email.com…"
                  />
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-[0.7rem] font-light tracking-wider text-neutral-400 uppercase mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-base font-light text-neutral-200 placeholder-neutral-600 transition-colors duration-300 focus:border-orange-600 focus:outline-none focus:ring-0"
                    placeholder="04XX XXX XXX…"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-[0.7rem] font-light tracking-wider text-neutral-400 uppercase mb-3">
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-base font-light text-neutral-200 placeholder-neutral-600 transition-colors duration-300 focus:border-orange-600 focus:outline-none focus:ring-0"
                    placeholder="Suburb or area…"
                  />
                </div>
              </div>

              {/* Project Type & Stage */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="block text-[0.7rem] font-light tracking-wider text-neutral-400 uppercase mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-base font-light text-neutral-200 transition-colors duration-300 focus:border-orange-600 focus:outline-none focus:ring-0 appearance-none"
                  >
                    <option value="" className="bg-neutral-900">Select…</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-neutral-900">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="stage" className="block text-[0.7rem] font-light tracking-wider text-neutral-400 uppercase mb-3">
                    Current Stage
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-base font-light text-neutral-200 transition-colors duration-300 focus:border-orange-600 focus:outline-none focus:ring-0 appearance-none"
                  >
                    <option value="" className="bg-neutral-900">Select…</option>
                    {stages.map((stage) => (
                      <option key={stage} value={stage} className="bg-neutral-900">{stage}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[0.7rem] font-light tracking-wider text-neutral-400 uppercase mb-3">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-base font-light text-neutral-200 placeholder-neutral-600 transition-colors duration-300 focus:border-orange-600 focus:outline-none focus:ring-0 resize-none"
                  placeholder="Describe your vision, your land, or any questions you have…"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center border border-orange-600 bg-orange-600/10 px-10 py-4 text-[0.75rem] font-normal tracking-widest text-orange-500 uppercase transition-all duration-300 hover:bg-orange-600 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
