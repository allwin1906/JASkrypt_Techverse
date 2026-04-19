"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-client";

const stages = [
  {
    title: "Learn",
    body: "Fundamentals and tooling in a production-minded environment.",
  },
  {
    title: "Work",
    body: "Contribute to client projects with mentorship and code review.",
  },
  {
    title: "Experience",
    body: "Ship work you can show—portfolio-ready, team-tested.",
  },
];

export function InternshipSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      gsap.from(q(".intern-head > *"), {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
      });

      const line = q(".intern-line-inner")[0];
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: q(".intern-flow")[0],
              start: "top 70%",
              end: "bottom 40%",
              scrub: true,
            },
          },
        );
      }

      gsap.from(q(".intern-node"), {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: q(".intern-flow")[0],
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="internship"
      className="section relative overflow-hidden bg-[var(--bg)] py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(212,175,55,0.06),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="intern-head mb-16 md:mb-24">
          <p className="section-label mb-4 before:bg-[var(--gold-1)]">Real training</p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[2.75rem]">
            Learn on real client work.
          </h2>
        </div>

        <div className="intern-flow relative">
          <div className="absolute top-[2.25rem] right-8 left-8 hidden h-px md:block">
            <div className="intern-line-inner h-full origin-left bg-gradient-to-r from-[var(--gold-3)] via-[var(--gold-1)] to-[var(--gold-2)]" />
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {stages.map((stage, i) => (
              <div key={stage.title} className="intern-node relative text-center md:text-left">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-sm font-bold text-[var(--gold-1)] md:mx-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
                  {stage.title}
                </h3>
                <p className="text-[var(--text-secondary)]">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
