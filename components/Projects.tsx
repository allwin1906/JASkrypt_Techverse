'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

/* ── mock project data ─────────────────────────────────── */
const projects = [
  {
    id: 'saas',
    cat: 'Cloud Application',
    title: 'Enterprise Analytics Dashboard',
    body: 'A high-performance real-time analytics aggregation platform enabling SaaS founders to track MRR, churn, and custom metrics with latency under 100ms. Architected on Next.js, Supabase, and AWS.',
    stack: ['Next.js','Supabase','TypeScript','AWS EC2'],
    metrics: ['Sub-100ms Query Time', '2× Faster Deployments'],
    bg: '#0c0c14',
    mockup: 'dashboard',
  },
  {
    id: 'ecom',
    cat: 'Global Commerce',
    title: 'B2B Procurement Platform',
    body: 'A centralized headless commerce ecosystem supporting multi-currency transactions, dynamic B2B pricing tiers, and ERP synchronization. Scored a consistent 98/100 on Lighthouse.',
    stack: ['Next.js','Shopify Plus','Node.js','ERP Integrations'],
    metrics: ['98 Lighthouse Score', '3.5% Conversion Uplift'],
    bg: '#080d08',
    mockup: 'ecom',
  },
];

/* ── tiny mockup shapes ─────────────────────────────────── */
function Mockup({ type }: { type: string }) {
  if (type === 'ecom') return (
    <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(212,175,55,0.15)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)', width: '100%' }}>
      <div style={{ height: 24, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px' }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
      </div>
      <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{ borderRadius: 4, overflow: 'hidden', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.08)' }}>
            <div style={{ height: 60, background: `rgba(212,175,55,${0.04 + i * 0.02})` }} />
            <div style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ height: 6, borderRadius: 3, background: 'rgba(212,175,55,0.2)', width: '60%' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* dashboard */
  return (
    <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(212,175,55,0.15)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)', width: '100%' }}>
      <div style={{ height: 24, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px' }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {['$1.2M ARR','84k DAU','98% Uptime'].map(v => (
            <div key={v} style={{ flex: 1, padding: '8px 6px', borderRadius: 4, background: 'rgba(212,175,55,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#d4af37' }}>{v.split(' ')[0]}</div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{v.split(' ').slice(1).join(' ')}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 70, padding: '0 2px' }}>
          {[42,68,50,84,58,94,72,88,62,78,92,70].map((h,i) => (
            <div key={i} style={{ flex: 1, borderRadius: '2px 2px 0 0', height: `${h}%`, background: i === 5 || i === 10 ? '#d4af37' : 'rgba(212,175,55,0.15)' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    gsap.fromTo(headRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' } });

    listRef.current?.querySelectorAll('.proj-card').forEach(card => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' } });
    });
  }, []);

  return (
    <section id="projects" style={{ background: 'var(--bg)' }}>
      <div className="container section-padL">

        <div ref={headRef} style={{ marginBottom: 64 }}>
          <span className="label">Case Studies</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
            <h2 style={{ maxWidth: 500 }}>
              Proven deliverables for <span className="gold-text">market leaders.</span>
            </h2>
            <a href="#cta" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: 13 }}>Inquire for Portfolio</a>
          </div>
        </div>

        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="proj-card"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: 0,
                background: p.bg,
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                overflow: 'hidden',
                direction: i % 2 === 0 ? 'ltr' : 'rtl',
              }}
            >
              {/* text */}
              <div style={{ padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', direction: 'ltr' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.8)', marginBottom: 16, display: 'block' }}>{p.cat}</span>
                <h3 style={{ marginBottom: 16 }}>{p.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 28, maxWidth: 440, color: 'rgba(255,255,255,0.6)' }}>{p.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {p.metrics.map(m => (
                    <span key={m} style={{ fontSize: 12, padding: '6px 14px', borderRadius: 4, background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: 'var(--gold-1)', fontWeight: 500 }}>✓ {m}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 4, background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)' }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* mockup */}
              <div style={{
                padding: '48px 40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                direction: 'ltr',
                background: 'rgba(255,255,255,0.015)',
                borderLeft: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                borderRight: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <div style={{ width: '100%', maxWidth: 380 }}>
                  <Mockup type={p.mockup} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
