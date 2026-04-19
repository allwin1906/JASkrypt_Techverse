'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

const team = [
  { name: 'Jasmine E', role: 'Founder & CEO', initials: 'JE' },
  { name: 'Saravanan A', role: 'Co-founder & Director', initials: 'SA' },
  { name: 'Allwin E', role: 'Manager & Team Lead', initials: 'AE' },
];

export default function Team() {
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    
    gsap.fromTo(headRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' } });

    const cards = gridRef.current?.querySelectorAll('.team-card');
    cards && gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } });
  }, []);

  return (
    <section id="team" style={{ background: 'var(--bg)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container section-padL">
        
        <div ref={headRef} style={{ marginBottom: 64, textAlign: 'center' }}>
          <span className="label">Leadership</span>
          <h2 style={{ marginBottom: 20 }}>
            The engineers behind the <span className="gold-text">growth.</span>
          </h2>
          <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)' }}>
            JASkrypt Techverse is driven by industry veterans who understand that scalable engineering equates directly to business revenue.
          </p>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
          {team.map(member => (
            <div key={member.name} className="team-card glass-card" style={{ padding: '40px 32px', textAlign: 'center', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
              onMouseEnter={e => {
                if (!window.matchMedia('(max-width: 768px)').matches) gsap.to(e.currentTarget, { y: -8, duration: 0.3, ease: 'power2.out' });
              }}
              onMouseLeave={e => { gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: 'power2.out' }); }}
            >
              <div style={{
                width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px',
                background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.02))',
                border: '1px solid rgba(212,175,55,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, fontWeight: 700, color: 'var(--gold-1)', letterSpacing: '0.05em'
              }}>
                {member.initials}
              </div>
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: 6 }}>{member.name}</h3>
              <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                {member.role}
              </p>

              <div style={{ width: 30, height: 2, background: 'var(--gold-1)', margin: '24px auto 0', opacity: 0.3 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
