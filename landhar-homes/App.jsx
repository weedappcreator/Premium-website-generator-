import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Insights from '@/components/Insights';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
