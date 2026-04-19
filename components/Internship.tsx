'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

const phases = [
  {
    n: '01', emoji: '⚙️',
    title: 'Foundations',
    sub: 'Architecture & Patterns',
    body: 'Master modern engineering patterns. Dive deep into React, Next.js, and CI/CD pipelines. This is strictly a rigorous technical baseline.',
  },
  {
    n: '02', emoji: '⚡',
    title: 'Execution',
    sub: 'Production Builds',
    body: 'Join live development cycles. Write production code, undergo senior code reviews, and ship features tested by actual end-users.',
  },
  {
    n: '03', emoji: '📈',
    title: 'Deployment',
    sub: 'Career Acceleration',
    body: 'Emerge with verified enterprise experience. Obtain a formal JASkrypt Techverse credential and secure engineering placement referrals.',
  },
];

const perks = [
  'Remote Architecture',
  'Production Lifecycles',
  'Senior Engineering Mentors',
  'Verified Credentials',
  'Rigorous Code Reviews',
  'Pipeline Referrals',
];

export default function Internship() {
  const headRef = useRef<HTMLDivElement>(null);
  const tlRef   = useRef<HTMLDivElement>(null);
  const perkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    gsap.fromTo(headRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' } });

    const cards = tlRef.current?.querySelectorAll('.tl-card');
    cards && gsap.fromTo(cards,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: tlRef.current, start: 'top 85%' } });

    const lineFill = tlRef.current?.querySelector('.tl-line-fill');
    if (lineFill) {
      gsap.fromTo(lineFill,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: 'power2.out', transformOrigin: 'top',
          scrollTrigger: { trigger: tlRef.current, start: 'top 80%' } });
    }

    const perks = perkRef.current?.querySelectorAll('.perk');
    perks && gsap.fromTo(perks,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: perkRef.current, start: 'top 85%' } });
  }, []);

  return (
    <section id="internship" style={{ background: 'var(--bg-2)' }}>
      <div className="container section-padL">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 64, alignItems: 'start' }}>

          {/* ── left: heading + perks ── */}
          <div>
            <div ref={headRef} style={{ marginBottom: 48 }}>
              <span className="label">Engineering Cohort</span>
              <h2 style={{ marginBottom: 20 }}>
                Build production code.{' '}
                <span className="gold-text">No busywork.</span>
              </h2>
              <p style={{ fontSize: '1rem', maxWidth: 460, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
                We train engineers, not basic interns. JASkrypt Techverse offers a rigorous accelerator where you commit code to actual scaling platforms.
              </p>
            </div>

            <a href="/internship" className="btn btn-outline" style={{ marginBottom: 64 }}>
              Apply for Fall Cohort
            </a>

            <div ref={perkRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px 20px' }}>
              {perks.map(p => (
                <div key={p} className="perk" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(212,175,55,0.1)', color: 'var(--gold-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* ── right: timeline ── */}
          <div ref={tlRef} style={{ position: 'relative' }}>
            {/* line track */}
            <div style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.06)' }}>
              <div className="tl-line-fill" style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg,var(--gold-1),transparent)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingLeft: 56 }}>
              {phases.map(ph => (
                <div key={ph.n} className="tl-card" style={{ position: 'relative' }}>
                  {/* node */}
                  <div style={{
                    position: 'absolute', left: -56 + 18 - 14, top: 0,
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'var(--bg-2)',
                    border: '1.5px solid rgba(212,175,55,0.4)',
                    color: 'var(--gold-1)', fontFamily: 'Inter, sans-serif',
                    fontWeight: 700, fontSize: 11,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{ph.n}</div>

                  <div className="glass-card" style={{ padding: '32px 32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{ fontSize: 24 }}>{ph.emoji}</span>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', lineHeight: 1.1 }}>{ph.title}</h3>
                        <p style={{ fontSize: 11, color: 'var(--gold-1)', marginTop: 4, fontWeight: 600, letterSpacing: '0.05em' }}>{ph.sub}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>{ph.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
