'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import Image from 'next/image';

const links = [
  { label: 'Process',  href: '/#process' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Careers',  href: '/internship' },
];

export default function Navbar() {
  const navRef  = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15 });
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll(); // Fire immediately on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] h-[80px] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a] bg-opacity-95 backdrop-blur-md border-b border-[rgba(212,175,55,0.1)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Image src="/logoJAS.png" alt="JASkrypt Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>JASkrypt</span>
            <span style={{ fontWeight: 500, fontSize: 11, color: 'var(--gold-1)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>Techverse</span>
          </div>
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex" style={{ gap: 40, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >{l.label}</a>
          ))}
          <a href="/#cta" className="btn btn-gold" style={{ padding: '10px 24px', fontSize: 13, width: 'auto' }}>Start Project</a>
        </nav>

        {/* mobile hamburger button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-[6px] relative z-50 w-10 h-10 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 24, height: 2, background: open ? 'transparent' : '#fff', transition: '0.3s', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: '0.3s', borderRadius: 2, position: 'absolute', transform: open ? 'rotate(45deg)' : 'translateY(0)' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: '0.3s', borderRadius: 2, position: 'absolute', transform: open ? 'rotate(-45deg)' : 'translateY(8px)', opacity: open ? 1 : 0 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: open ? 'transparent' : '#fff', transition: '0.3s', borderRadius: 2, transform: 'translateY(-8px)', position: 'absolute', opacity: open ? 0 : 1 }} />
        </button>

      </div>

      {/* mobile menu sheet */}
      <div 
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(10px)',
          display: 'flex', flexDirection: 'column', padding: '100px 24px 40px',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          opacity: open ? 1 : 0, transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: 24, fontWeight: 600, color: 'var(--white)', textDecoration: 'none' }}
            >{l.label}</a>
          ))}
          <a href="/#cta" onClick={() => setOpen(false)} className="btn btn-gold" style={{ marginTop: 20 }}>Start Your Project</a>
        </div>
      </div>
    </header>
  );
}
