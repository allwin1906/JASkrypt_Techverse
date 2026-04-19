'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

const pain = [
  {
    n: '01',
    title: 'Unreliable Execution',
    body: 'Agencies overpromise and underdeliver. You are left managing freelancers and fixing broken code instead of focusing on business growth.',
  },
  {
    n: '02',
    title: 'Lack of Strategy',
    body: 'A generic theme launch is not a business strategy. Your digital architecture needs to scale securely and convert visitors reliably.',
  },
  {
    n: '03',
    title: 'Technical Debt',
    body: 'Poorly structured foundations lead to slow performance, security vulnerabilities, and expensive rebuilds within months of launch.',
  },
];

export default function Problem() {
  const secRef  = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    gsap.fromTo(headRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' } });

    const cards = gridRef.current?.querySelectorAll('.pain-card');
    cards && gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } });
  }, []);

  return (
    <section ref={secRef} id="problem" style={{ background: 'var(--bg-2)' }}>
      <div className="container section-pad">

        {/* heading */}
        <div ref={headRef} style={{ marginBottom: 64 }}>
          <span className="label">The Challenge</span>
          <h2 style={{ maxWidth: 700, marginBottom: 20 }}>
            Why enterprise projects{' '}
            <span className="gold-text">fail</span>
            {' '}— and how we mitigate risk.
          </h2>
          <p style={{ maxWidth: 640, fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)' }}>
            The development industry is fragmented. We identified the core points of failure to build a methodology that guarantees delivery and performance.
          </p>
        </div>

        {/* cards */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {pain.map(p => (
            <div
              key={p.n}
              className="pain-card glass-card"
              style={{ padding: '40px 32px', position: 'relative', overflow: 'hidden', cursor: 'default' }}
              onMouseEnter={e => {
                const isMobile = window.matchMedia('(max-width: 768px)').matches;
                if (!isMobile) gsap.to(e.currentTarget, { y: -4, duration: 0.3, ease: 'power3.out' });
              }}
              onMouseLeave={e => {
                gsap.to(e.currentTarget, { y: 0, duration: 0.4, ease: 'power3.out' });
              }}
            >
              {/* watermark number */}
              <div style={{
                position: 'absolute', top: -16, right: -8,
                fontSize: 100, fontWeight: 800, lineHeight: 1,
                color: 'rgba(212,175,55,0.03)',
                userSelect: 'none', pointerEvents: 'none',
              }}>{p.n}</div>

              <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg,var(--gold-1),var(--gold-2))', borderRadius: 1, marginBottom: 24 }} />
              <h3 style={{ marginBottom: 16 }}>{p.title}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>{p.body}</p>

              {/* bottom bar */}
              <div className="card-bar" style={{
                position: 'absolute', bottom: 0, left: 0, height: 2, width: 0,
                background: 'linear-gradient(90deg,var(--gold-1),var(--gold-2))',
                transition: 'width 0.4s ease',
              }} />
            </div>
          ))}
        </div>

        {/* bottom statement */}
        <div style={{ marginTop: 80, paddingTop: 64, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', lineHeight: 1.5, maxWidth: 840, margin: '0 auto', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
            JASkrypt Techverse exists to be the{' '}
            <span className="gold-text">reliable engineering partner</span>
            {' '}you can trust — from architecture to scale.
          </p>
        </div>

      </div>

      <style>{`
        @media (hover: hover) { .pain-card:hover .card-bar { width: 100% !important; } }
      `}</style>
    </section>
  );
}
