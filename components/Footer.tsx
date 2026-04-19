'use client';

import Image from 'next/image';

const links = [
  { label: 'Process',  href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Careers',  href: '#internship' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      
      {/* ── MASSIVE FOOTER MARQUEE ── */}
      <div style={{ padding: '60px 0 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="marquee-track" style={{ opacity: 0.7 }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ display: 'inline-block', fontSize: 'clamp(4rem, 12vw, 10rem)', fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'transparent', WebkitTextStroke: '2px rgba(212,175,55,0.3)', textTransform: 'uppercase', paddingRight: '40px', letterSpacing: '-0.02em', lineHeight: 1 }}>
              JASKRYPT TECHVERSE • LET&apos;S BUILD •
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: '80px 40px 40px' }}>

        {/* top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 80px', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 64 }}>

          {/* brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <Image src="/logoJAS.png" alt="JASkrypt Logo" width={48} height={48} style={{ objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>JASkrypt</span>
                <span style={{ fontWeight: 500, fontSize: 12, color: 'var(--gold-1)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 3 }}>Techverse</span>
              </div>
            </div>
            <p style={{ fontSize: 14, maxWidth: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
              We build enterprise-grade digital products that predictably generate revenue and solve complex business problems.
            </p>
          </div>

          {/* nav */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 36px' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d4af37')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{l.label}</a>
            ))}
          </nav>

          {/* socials */}
          <div style={{ display: 'flex', gap: 12 }}>
            {[{ l: 'LinkedIn', i: 'in' }, { l: 'Twitter', i: '𝕏' }, { l: 'Instagram', i: '◎' }].map(s => (
              <a key={s.l} href="#" aria-label={s.l}
                style={{ width: 44, height: 44, borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.4)'; (e.currentTarget as HTMLElement).style.color = '#d4af37'; (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
              >{s.i}</a>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} JASkrypt Techverse. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
