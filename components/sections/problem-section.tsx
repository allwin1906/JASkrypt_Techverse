"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-client";

const lines = [
  "Invisible online.",
  "Leads that don’t convert.",
  "Tools that don’t talk to each other.",
];

export function ProblemSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      gsap.fromTo(
        root.current,
        { backgroundColor: "#0a0a0a" },
        {
          backgroundColor: "#141414",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        },
      );

      gsap.from(q(".problem-line"), {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(q(".problem-block > *"), {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: q(".problem-block")[0],
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="section relative py-28 md:py-36"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="noise pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="problem-block mx-auto max-w-3xl text-center">
          <p className="section-label mb-6 justify-center before:bg-[var(--gold-1)]">
            The gap
          </p>
          <h2 className="mb-14 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[2.75rem]">
            Great businesses deserve more than a template.
          </h2>
          <div className="mx-auto mb-12 max-w-md space-y-4">
            {lines.map((line) => (
              <p
                key={line}
                className="problem-line text-xl font-medium text-[var(--text-secondary)] md:text-2xl"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="problem-line text-lg text-[var(--text-muted)] md:text-xl">
            You need clarity, speed, and a partner who ships.
          </p>
        </div>
      </div>
    </section>
  );
}
