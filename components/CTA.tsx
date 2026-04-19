'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

export default function CTA() {
  const secRef  = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const subRef  = useRef<HTMLParagraphElement>(null);
  const btnRef  = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const tl = gsap.timeline({ scrollTrigger: { trigger: secRef.current, start: 'top 75%' } });
    tl.fromTo(headRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo(btnRef.current?.children ?? [], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.5')
      .fromTo(infoRef.current?.children ?? [], { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, '-=0.4');
  }, []);

  return (
    <section ref={secRef} id="cta" style={{ background: 'var(--bg-2)', borderTop: '1px solid rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden' }}>

      <div className="container section-padL" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>

          <h2 ref={headRef} style={{ marginBottom: 24 }}>
            Ready to build a product that{' '}
            <span className="gold-text">scales your enterprise?</span>
          </h2>

          <p ref={subRef} style={{ fontSize: '1.05rem', maxWidth: 640, margin: '0 auto 48px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
            Partner with JASkrypt Techverse to engineering your next core architecture. Secure, scalable, and built by industry veterans. Avoid the typical agency pitfalls.
          </p>

          <div ref={btnRef} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 64 }}>
            <a href="mailto:hello@jaskrypt.com" className="btn btn-gold">
              Contact Engineering
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* contact row */}
          <div
            ref={infoRef}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 56px', justifyContent: 'center', paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { icon: '✉', label: 'Inquiries', val: 'hello@jaskrypt.com', href: 'mailto:hello@jaskrypt.com' },
              { icon: '📍', label: 'Operations', val: 'India • Global Base', href: '#' },
              { icon: '⚡', label: 'Response Target', val: '< 24 Hours SLA', href: '#' },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget.querySelector('.cta-val') as HTMLElement).style.color = '#d4af37')}
                onMouseLeave={e => ((e.currentTarget.querySelector('.cta-val') as HTMLElement).style.color = 'rgba(255,255,255,0.6)')}
              >
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                  <div className="cta-val" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s', fontWeight: 500 }}>{item.val}</div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
