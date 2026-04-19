'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

const steps = [
  {
    n: '01', title: 'Idea', sub: 'Discovery & Architecture',
    body: 'We deeply understand your business goals, target audience, and market position. Enterprise architecture and strategy-first thinking — before a single line of code is written.',
    tags: ['Market Research','UX Strategy','Wireframes','Tech Stack Selection'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="14" r="7" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M14 27h8M18 21v6" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 20c-2.5-1.8-4-4.5-4-7.5a10 10 0 0120 0c0 3-1.5 5.7-4 7.5" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '02', title: 'Build', sub: 'Engineering & Delivery',
    body: 'Premium design meets highly scalable engineering. We craft robust interfaces backed by performant, secure, and maintainable data architectures you can rely on.',
    tags: ['UI/UX Design','Full-Stack Dev','Complex APIs','QA Testing'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="2" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M12 16l-4 4 4 4M24 16l4 4-4 4M21 12l-6 12" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: '03', title: 'Scale', sub: 'Growth & Optimisation',
    body: 'Deployment is just the beginning. We optimise for milliseconds, dominate search rankings, and iterate from real data to fuel exponential compounding growth.',
    tags: ['Data Analytics','SEO & CRO','Infrastructure','Ongoing Support'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <path d="M4 28l8-8 5 4 8-10 7 7" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="31" cy="8" r="4" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M31 5v6M28 8h6" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Process() {
  const secRef     = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const wrapRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    gsap.fromTo(headRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' } });

    const track = trackRef.current;
    const wrap  = wrapRef.current;
    if (!track || !wrap) return;

    let mm = gsap.matchMedia();

    // Desktop: Horizontal Scroll
    mm.add("(min-width: 900px)", () => {
      const getX = () => -(track.scrollWidth - wrap.offsetWidth);
      
      const tween = gsap.to(track, {
        x: getX,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'center center',
          end: () => `+=${track.scrollWidth * 0.7}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      track.querySelectorAll('.step-card').forEach(card => {
        gsap.fromTo(card,
          { opacity: 0.4, scale: 0.95 },
          { opacity: 1, scale: 1, ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left 85%',
              end:   'left 50%',
              scrub: true,
            },
          });
      });
      return () => { tween.kill(); };
    });

    // Mobile: Vertical Stack Fade
    mm.add("(max-width: 899px)", () => {
      // Setup vertical natural flow
      gsap.set(track, { x: 0 }); // reset x
      const cards = track.querySelectorAll('.step-card, .step-end');
      
      cards.forEach(card => {
        gsap.fromTo(card, 
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', 
            scrollTrigger: { trigger: card, start: 'top 85%' } 
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={secRef} id="process" style={{ background: 'var(--bg)', position: 'relative' }}>

      {/* heading */}
      <div className="container" style={{ paddingTop: 100, paddingBottom: 40, position: 'relative', zIndex: 2 }}>
        <div ref={headRef}>
          <span className="label">Methodology</span>
          <h2 style={{ maxWidth: 640, marginBottom: 20 }}>
            Structured execution from{' '}
            <span className="gold-text">idea to revenue.</span>
          </h2>
          <p style={{ maxWidth: 540, fontSize: '1.05rem' }}>
            We utilize a battle-tested, three-phase framework designed to mitigate risk and predictably deliver complex software.
          </p>
        </div>
      </div>

      {/* track area */}
      <div ref={wrapRef} className="process-wrap" style={{ overflow: 'hidden', paddingBottom: 80, position: 'relative', zIndex: 2 }}>
        
        {/* ── abstract accent image pinned with wrap ── */}
        <div 
          className="hidden lg:block absolute" 
          style={{ 
            top: '50%', right: '-2%', transform: 'translateY(-50%)',
            width: 600, height: 600, 
            backgroundImage: 'url(/techverse_abstract.png)', 
            backgroundSize: 'contain', backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15, pointerEvents: 'none', zIndex: 0
          }} 
        />

        <div
          ref={trackRef}
          className="process-track"
          style={{
            display: 'flex',
            gap: 28,
            paddingLeft: 'max(24px, calc((100vw - 1200px) / 2))', // Dynamic align with container
            paddingRight: 40,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="step-card"
              style={{
                flexShrink: 0,
                width: 'clamp(300px, 85vw, 420px)',
                minHeight: 460,
                padding: '40px 32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              {/* watermark */}
              <div style={{
                position: 'absolute', top: -16, right: -4,
                fontSize: 140, fontWeight: 800, lineHeight: 1,
                color: 'rgba(212,175,55,0.04)',
                userSelect: 'none', pointerEvents: 'none',
              }}>{s.n}</div>

              <div>
                {/* icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 8,
                  background: 'rgba(212,175,55,0.06)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 32,
                }}>
                  {s.icon}
                </div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-1)', marginBottom: 12 }}>
                  Phase {s.n} — {s.sub}
                </p>
                <h3 style={{ marginBottom: 16 }}>{s.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>{s.body}</p>
              </div>

              {/* tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32 }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '5px 12px', borderRadius: 4,
                    background: 'rgba(212,175,55,0.06)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    color: 'rgba(212,175,55,0.9)',
                    fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}

          {/* end card */}
          <div className="step-end" style={{
            flexShrink: 0,
            width: 'clamp(260px, 85vw, 340px)',
            minHeight: 460,
            padding: '40px 32px',
            background: 'linear-gradient(135deg,rgba(212,175,55,0.1),rgba(212,175,55,0.02))',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: 8,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', gap: 20,
          }}>
            <h3 className="gold-text" style={{ fontSize: '2rem', lineHeight: 1.2 }}>
              Ready<br/>to start.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              We transform complexity into reliable digital assets.
            </p>
            <a href="#cta" className="btn btn-gold" style={{ marginTop: 8 }}>Schedule Consultation</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 899px) {
          .process-track { flex-direction: column !important; padding-right: 24px !important; }
          .step-card, .step-end { width: 100% !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}
