'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import { gsap, registerGSAP } from '@/lib/gsap';

const pipeline = [
  {
    n: '01',
    title: 'Learn & Upskill',
    desc: 'Enroll in our curated, rigorous technical course. Master modern architectures like Next.js, React, and cloud backends under senior engineering guidance.',
  },
  {
    n: '02',
    title: 'Realtime Projects',
    desc: 'Transition from theory to code. You are placed directly onto live JASkrypt enterprise projects, writing production code for actual users.',
  },
  {
    n: '03',
    title: 'Earn a Stipend',
    desc: 'Your code generates value, so you get paid for it. Receive a structured stipend while building and shipping live features for our clients.',
  },
  {
    n: '04',
    title: 'Official Credential',
    desc: 'Graduate with verified enterprise experience and the official JASkrypt Techverse Certificate to rapidly accelerate your software career.',
  },
];

export default function InternshipPage() {
  const headRef = useRef<HTMLDivElement>(null);
  const pipeRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    registerGSAP();

    // Fade in Header
    gsap.fromTo(headRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 });

    // Stagger Pipeline Cards
    const cards = pipeRef.current?.querySelectorAll('.pipe-card');
    cards && gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: pipeRef.current, start: 'top 80%' } });

    // Fade in Form
    gsap.fromTo(formRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 85%' } });
  }, []);

  return (
    <>
      <Navbar />

      <main style={{ minHeight: '100svh', background: 'var(--bg)', paddingTop: 140, paddingBottom: 100 }}>
        
        {/* ── Title Area ── */}
        <div className="container" ref={headRef} style={{ textAlign: 'center', maxWidth: 860, marginBottom: 80, position: 'relative', zIndex: 10 }}>
          
          {/* Availability VIP Ticker */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 20, marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff3b30', boxShadow: '0 0 10px #ff3b30', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.05em', color: 'var(--gold-1)', textTransform: 'uppercase' }}>Fall Cohort: 4 Seats Remaining</span>
          </div>

          <h1 style={{ marginBottom: 24 }}>
            The pathway to <span className="gold-text">production engineering.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            Stop building generic calculators. At JASkrypt Techverse, you pay to master the stack, and we pay you to write live code for enterprise products.
          </p>
        </div>

        {/* ── 3D Abstract Decor ── */}
        <div className="hidden lg:block absolute" style={{ top: '15%', right: '5%', width: 500, height: 500, backgroundImage: 'url(/techverse_abstract.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: 0.25, pointerEvents: 'none', zIndex: 0 }} />

        {/* ── Pipeline Grid ── */}
        <div className="container" ref={pipeRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 100 }}>
          {pipeline.map(step => (
            <div key={step.n} className="pipe-card glass-card" style={{ padding: '40px 32px', position: 'relative' }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: 'rgba(212,175,55,0.1)', lineHeight: 1, marginBottom: 24 }}>{step.n}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 12 }}>{step.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Application Form ── */}
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto', background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '56px 48px' }}>
            
            <div style={{ marginBottom: 40, textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: 12 }}>Apply for the Cohort</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>Fill out the form below to initiate your enrollment process.</p>
            </div>

            <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" required className="form-el" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" required className="form-el" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 99999 99999" required className="form-el" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Preferred Track</label>
                  <select required className="form-el" style={{ appearance: 'none', background: 'rgba(255,255,255,0.03)' }}>
                    <option value="" disabled selected>Select a path...</option>
                    <option value="frontend">Frontend Architecture (React/Next.js)</option>
                    <option value="backend">Backend Engineering (Node/Databases)</option>
                    <option value="fullstack">Full-Stack Development</option>
                    <option value="mobile">Native Mobile App Dev</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Why JASkrypt Techverse?</label>
                <textarea rows={4} placeholder="Briefly describe your goals..." required className="form-el" />
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: 16, padding: '16px' }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>

      </main>

      <Footer />

      {/* local form styles & animations */}
      <style>{`
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
        .form-el {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          padding: 14px 16px;
          color: white;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-el:focus {
          outline: none;
          border-color: var(--gold-1);
          box-shadow: 0 0 0 2px rgba(212,175,55,0.15);
        }
        .form-el::placeholder { color: rgba(255,255,255,0.3); }
        select.form-el option { background: var(--bg-2); color: white; }
        
        @media (max-width: 640px) {
          .container form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
