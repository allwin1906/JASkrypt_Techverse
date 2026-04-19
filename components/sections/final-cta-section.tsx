"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-client";

export function FinalCtaSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      gsap.from(q(".cta-inner > *"), {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="contact"
      className="section relative bg-[var(--bg-2)] py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(212,175,55,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-8">
        <div className="cta-inner">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-[3.25rem]">
            Ready when you are.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg text-[var(--text-secondary)] md:text-xl">
            Tell us what you&apos;re building—we&apos;ll map the fastest path to launch.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="mailto:hello@jaskrypt.com" className="btn-primary">
              Start Project
            </Link>
            <Link href="mailto:hello@jaskrypt.com" className="btn-ghost">
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
