"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-client";

const projects = [
  {
    name: "LocalCraft Studio",
    result: "+38% qualified inquiries in 90 days",
    detail: "Brand site + booking flow",
    tone: "from-[#1a1510] to-[#0d0c0a]",
  },
  {
    name: "Northline Retail",
    result: "Launch in 6 weeks",
    detail: "E‑commerce + inventory sync",
    tone: "from-[#10151a] to-[#0a0c0d]",
  },
  {
    name: "Pulse Fitness",
    result: "Retention-focused roadmap",
    detail: "Member app + push campaigns",
    tone: "from-[#151012] to-[#0c0a0a]",
  },
  {
    name: "Summit Legal",
    result: "Lead routing automation",
    detail: "Trust-first web presence",
    tone: "from-[#101418] to-[#0a0b0c]",
  },
];

export function ProjectsSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      gsap.from(q(".projects-head > *"), {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray<HTMLElement>(q(".project-card")).forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.92, opacity: 0.25 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 35%",
              scrub: true,
            },
          },
        );

        const mock = card.querySelector(".project-mock");
        if (mock) {
          gsap.to(mock, {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="work" className="section relative bg-[var(--bg-2)] py-28 md:py-36">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="projects-head mb-14 md:mb-20">
          <p className="section-label mb-4 before:bg-[var(--gold-1)]">Selected work</p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[2.75rem]">
            Outcomes you can measure.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="project-card group flex flex-col gap-8 rounded-sm border border-[var(--border-light)] bg-[rgba(255,255,255,0.02)] p-8 md:flex-row md:items-center md:gap-10 md:p-10"
            >
              <div className="project-mock flex shrink-0 justify-center md:w-[45%]">
                {i % 2 === 0 ? (
                  <div className="w-full">
                    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
                      <div className="rounded-t-lg border border-[var(--border-light)] bg-[#1c1c1c] p-2 shadow-xl">
                        <div
                          className={`flex aspect-[16/10] items-center justify-center rounded-sm bg-gradient-to-br ${p.tone}`}
                        >
                          <div className="h-1/2 w-3/5 rounded bg-[var(--gold-1)]/25" />
                        </div>
                      </div>
                      <div className="mx-auto h-2 w-[70%] rounded-b border border-t-0 border-[var(--border-light)] bg-[#252525]" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="mx-auto w-[100px] md:w-[120px]">
                      <div className="rounded-[1.25rem] border border-[var(--border-light)] bg-[#1c1c1c] p-1.5 shadow-xl">
                        <div
                          className={`aspect-[9/19] rounded-[0.85rem] bg-gradient-to-b ${p.tone}`}
                        >
                          <div className="flex h-full items-center justify-center p-2">
                            <div className="h-12 w-full rounded bg-[var(--gold-1)]/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] md:text-2xl">
                  {p.name}
                </h3>
                <p className="mb-3 text-sm text-[var(--gold-1)]">{p.result}</p>
                <p className="text-[var(--text-secondary)]">{p.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
