'use client';

import { useEffect } from 'react';
import { registerGSAP } from '@/lib/gsap';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    registerGSAP();

    // Cursor glow effect
    const glow = document.getElementById('cursor-glow');
    const handleMouseMove = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom cursor glow */}
      <div id="cursor-glow" className="cursor-glow" />

      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Services />
        <Projects />
        <Internship />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
