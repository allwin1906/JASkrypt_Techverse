'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

export default function Hero() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headRef      = useRef<HTMLHeadingElement>(null);
  const subRef       = useRef<HTMLParagraphElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const bgRef        = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    /* ── entrance timeline ── */
    const tl = gsap.timeline({ delay: 0.15 });

    tl.fromTo(headRef.current,
      { y: 40, opacity: 0 },
      { y: 0,  opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0,  opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
    .fromTo(ctaRef.current?.children ?? [],
      { y: 20, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 }, '-=0.6');

    /* ── background parallax ── */
    gsap.to(bgRef.current, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col items-center justify-center text-center"
      style={{ minHeight: '100svh', paddingTop: '100px', paddingBottom: '80px', overflow: 'hidden', background: '#050505' }}
    >
      <div 
        ref={bgRef}
        style={{
          position: 'absolute', top: '-10%', left: 0, width: '100%', height: '120%',
          backgroundImage: 'url(/techverse_dev_bg.png)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.45, zIndex: 0, pointerEvents: 'none'
        }}
      />
      
      {/* ── gradient overlay for readability ── */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,1) 100%)', zIndex: 1 }} />

      {/* ── 3D Wireframe Cube (WOW Factor) ── */}
      <div className="hidden md:block" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', perspective: 1200, zIndex: 2, pointerEvents: 'none', opacity: 0.12 }}>
        <div className="wow-cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      {/* ── content ── */}
      <div className="container relative" style={{ zIndex: 3, maxWidth: 900 }}>
        <h1 ref={headRef} style={{ marginBottom: 24, textWrap: 'balance' }}>
          Building digital products that predictably{' '}
          <span className="gold-text">generate revenue.</span>
        </h1>

        <p ref={subRef} style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', margin: '0 auto 48px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
          JASkrypt Techverse partners with ambitious businesses to engineer, design, and scale high-performing web and mobile architectures. 20 years of collective engineering experience — from complex SaaS to high-converting commerce.
        </p>

        <div ref={ctaRef} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
          <a href="#cta" className="btn btn-gold">
            Discuss Your Project
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#process" className="btn btn-outline">Our Methodology</a>
        </div>

        {/* trust row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', marginTop: 80 }}>
          {['Enterprise Architecture', '100% Delivery Rate', 'Predictable Growth'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold-1)', display: 'inline-block' }} />
              {t}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wow-cube {
          position: relative; width: 40vw; height: 40vw; max-width: 500px; max-height: 500px; transform-style: preserve-3d;
          animation: wow-spin 40s linear infinite;
        }
        .wow-cube .face {
          position: absolute; width: 100%; height: 100%;
          border: 1px solid var(--gold-1);
          background: rgba(212,175,55,0.02);
          box-shadow: inset 0 0 40px rgba(212,175,55,0.05);
        }
        .front  { transform: rotateY(0deg) translateZ(calc(min(20vw, 250px))); }
        .back   { transform: rotateY(180deg) translateZ(calc(min(20vw, 250px))); }
        .right  { transform: rotateY(90deg) translateZ(calc(min(20vw, 250px))); }
        .left   { transform: rotateY(-90deg) translateZ(calc(min(20vw, 250px))); }
        .top    { transform: rotateX(90deg) translateZ(calc(min(20vw, 250px))); }
        .bottom { transform: rotateX(-90deg) translateZ(calc(min(20vw, 250px))); }
        @keyframes wow-spin { 0% { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg); } 100% { transform: rotateY(360deg) rotateX(360deg) rotateZ(180deg); } }
      `}</style>
    </section>
  );
}
