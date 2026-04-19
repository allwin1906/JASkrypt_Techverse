"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-client";

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      gsap.from(q(".hero-eyebrow, .hero-headline, .hero-sub, .hero-cta"), {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(q(".hero-logo-deco"), {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      if (gridRef.current) {
        gsap.to(gridRef.current, {
          y: 48,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      className="section relative flex min-h-[100dvh] items-center overflow-hidden pt-20 pb-16 md:pt-24"
    >
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 grid-bg opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.12),transparent)]"
        aria-hidden
      />
      <div className="noise pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:px-8">
        <div>
          <p className="hero-eyebrow section-label !mb-8 before:bg-[var(--gold-1)]">
            JASkrypt
          </p>
          <h1 className="hero-headline mb-6 max-w-xl text-4xl leading-[1.05] font-extrabold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-[3.25rem]">
            We build what{" "}
            <span className="gold-text">grows your business.</span>
          </h1>
          <p className="hero-sub mb-10 max-w-md text-lg text-[var(--text-secondary)] md:text-xl">
            Websites, apps, and marketing systems for local brands and startups—
            crafted to convert, built to last.
          </p>
          <div className="hero-cta flex flex-wrap items-center gap-4">
            <Link href="#contact" className="btn-primary">
              Start Project
            </Link>
            <Link href="#work" className="btn-ghost">
              View selected work
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="hero-logo-deco relative aspect-square w-full max-w-[min(100%,320px)] md:max-w-[380px]">
            <div className="gold-glow absolute inset-[-20%] rounded-full opacity-40 blur-3xl" />
            <Image
              src="/logo.png"
              alt=""
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.15)]"
              sizes="(max-width: 768px) 280px, 380px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
