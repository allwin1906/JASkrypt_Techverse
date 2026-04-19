"use client";

import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-client";

const steps = [
  {
    n: "01",
    title: "Idea",
    body: "We align on goals, audience, and success metrics—so every decision earns its place.",
  },
  {
    n: "02",
    title: "Build",
    body: "Design and engineering move together: fast iterations, clean code, launch-ready quality.",
  },
  {
    n: "03",
    title: "Scale",
    body: "Measurement, optimization, and systems that compound—SEO, campaigns, and product improvements.",
  },
];

export function ProcessSection() {
  const root = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useGSAP(
    () => {
      if (!ready) return;
      const section = root.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScroll = () => Math.max(track.scrollWidth - window.innerWidth, 0);

      const tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScroll() * 1.1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(track.querySelectorAll(".process-panel")).forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0.4, rotateY: -6, scale: 0.98 },
          {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 88%",
              end: "left 42%",
              scrub: true,
              horizontal: true,
            },
          },
        );
      });
    },
    { scope: root, dependencies: [ready] },
  );

  return (
    <section
      ref={root}
      id="process"
      className="section relative h-screen overflow-hidden bg-[var(--bg-2)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.06),transparent_55%)]" />
      <div className="relative z-10 flex h-full flex-col justify-center pt-16">
        <div className="mx-auto mb-10 w-full max-w-6xl shrink-0 px-6 md:mb-12 md:px-8">
          <p className="section-label mb-4 before:bg-[var(--gold-1)]">How we work</p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[2.75rem]">
            From first idea to sustained growth.
          </h2>
        </div>

        <div className="flex min-h-0 flex-1 items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full w-max items-stretch gap-6 px-6 pb-24 md:gap-10 md:px-8 md:pb-28"
            style={{ perspective: "1200px" }}
          >
            {steps.map((step) => (
              <article
                key={step.n}
                className="process-panel card-glass gold-glow flex w-[85vw] shrink-0 flex-col justify-between rounded-sm border border-[var(--border-light)] bg-[rgba(255,255,255,0.02)] p-8 md:w-[min(42vw,520px)] md:p-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="font-mono text-sm tracking-widest text-[var(--gold-1)]">
                  {step.n}
                </span>
                <div className="mt-8">
                  <h3 className="mb-4 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="max-w-md text-[var(--text-secondary)] md:text-lg">{step.body}</p>
                </div>
                <div className="gold-line mt-10" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
