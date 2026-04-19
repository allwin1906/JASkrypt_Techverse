'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

const services = [
  {
    id: 'web',
    title: 'Enterprise Web Solutions',
    body: 'We architect highly scalable, secure, and fast websites. From complex dynamic platforms to high-performing corporate portals, built primarily on Next.js and React.',
    features: ['Next.js Architecture', 'Custom CMS Integration', 'Core Web Vitals Focus', 'Enterprise Security'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="10" width="36" height="24" rx="3" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M4 18h36" stroke="#d4af37" strokeWidth="1.5"/>
        <circle cx="11" cy="14" r="1.5" fill="#d4af37"/>
        <circle cx="16" cy="14" r="1.5" fill="#d4af37"/>
        <circle cx="21" cy="14" r="1.5" fill="#d4af37"/>
        <path d="M13 26l5-3 5 3 9-5" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'app',
    title: 'Native Mobile Apps',
    body: 'Robust iOS and Android applications engineered for seamless UX. We build natively compiled apps that perform predictably under heavy load.',
    features: ['React Native / Swift', 'Offline Functionality', 'Hardware Integration', 'App Store Compliance'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <rect x="14" y="4" width="16" height="36" rx="3" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M19 8h6" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="34" r="2" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M19 15l-3 4 3 4M25 15l3 4-3 4M21 26l2-12" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'saas',
    title: 'SaaS & PaaS Platforms',
    body: 'Comprehensive engineering for software and platform-as-a-service products. From secure multi-tenant architectures to modular cloud infrastructures.',
    features: ['Multi-tenant Systems', 'Microservices', 'REST & GraphQL', 'AWS / Vercel Cloud'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <path d="M22 6C13 6 6 13 6 22s7 16 16 16 16-7 16-16" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M34 6l4 4-4 4M38 10H26" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="22" r="6" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M19 22l2 2 4-4" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    body: 'Engineering-led marketing. We implement robust analytics infrastructure, advanced technical SEO, and data-driven conversion strategies to scale growth predictably.',
    features: ['Technical SEO Audits', 'Conversion Tracking', 'Performance Marketing', 'Data Warehousing'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <path d="M6 34l9-12 7 5 9-12 9 8" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="10" r="5" stroke="#d4af37" strokeWidth="1.5"/>
        <path d="M38 7v6M35 10h6" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function Card({ s }: { s: typeof services[0] }) {
  const ref  = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable hover 3D on mobile/touch to prevent jumping UX
    if (window.matchMedia('(max-width: 1024px)').matches) return;
    
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    gsap.to(el, { rotateX: ((y - cy) / cy) * -6, rotateY: ((x - cx) / cx) * 6, duration: 0.3, ease: 'power2.out', transformPerspective: 900 });
    if (glow.current) { glow.current.style.left = `${x}px`; glow.current.style.top = `${y}px`; glow.current.style.opacity = '1'; }
  };
  const onLeave = () => {
    if (window.matchMedia('(max-width: 1024px)').matches) return;
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
    if (glow.current) glow.current.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      className="glass-card"
      style={{ padding: '48px 40px', position: 'relative', overflow: 'hidden', cursor: 'default', transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* mouse glow */}
      <div ref={glow} className="hidden lg:block" style={{
        position: 'absolute', width: '200%', height: '200%', borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(212,175,55,0.06) 0%,transparent 40%)',
        transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        opacity: 0, transition: 'opacity 0.3s',
      }} />

      {/* icon */}
      <div style={{
        width: 56, height: 56, borderRadius: 8,
        background: 'rgba(212,175,55,0.05)',
        border: '1px solid rgba(212,175,55,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 28,
      }}>{s.icon}</div>

      <h3 style={{ marginBottom: 16 }}>{s.title}</h3>
      <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 32, color: 'rgba(255,255,255,0.6)' }}>{s.body}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {s.features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-1)', flexShrink: 0, display: 'block' }} />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    gsap.fromTo(headRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' } });

    const cards = gridRef.current?.querySelectorAll('.glass-card');
    cards && gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } });
  }, []);

  return (
    <section id="services" style={{ background: 'var(--bg-2)' }}>
      <div className="container section-padL">

        <div ref={headRef} style={{ marginBottom: 64 }}>
          <span className="label">Capabilities</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
            <h2 style={{ maxWidth: 540 }}>
              Engineering solutions built strictly for{' '}
              <span className="gold-text">business scale.</span>
            </h2>
            <p style={{ maxWidth: 360, fontSize: '1rem', color: 'rgba(255,255,255,0.65)' }}>
              We deploy rigorous engineering standards across every capability to ensure your product remains an asset, not a liability.
            </p>
          </div>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))', gap: 24 }}>
          {services.map(s => <Card key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
}
