"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-client";

const services = [
  {
    title: "Web development",
    desc: "Fast, accessible sites and web apps—structured for SEO and built to evolve.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M4 8h24v4H4V8zm0 8h16v4H4v-4zm0 8h20v4H4v-4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "App development",
    desc: "Native-feel mobile experiences with pragmatic scope and maintainable architecture.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect
          x="9"
          y="4"
          width="14"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M13 7h6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Digital marketing",
    desc: "Funnels, analytics, and campaigns tied to real business results—not vanity metrics.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M4 26V14l8-6 8 6v12M12 26V16m8 10V12l8 6v14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ServicesSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (ctx) => {
      const q = gsap.utils.selector(root);
      gsap.from(q(".services-head > *"), {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(q(".service-card"), {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: q(".services-grid")[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(q(".service-card"));
      cards.forEach((card) => {
        const icon = card.querySelector(".service-icon");
        if (!icon) return;

        gsap.to(icon, {
          y: -12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        const rotX = gsap.quickTo(card, "rotationX", { duration: 0.35, ease: "power3.out" });
        const rotY = gsap.quickTo(card, "rotationY", { duration: 0.35, ease: "power3.out" });

        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          rotY(x * 10);
          rotX(-y * 10);
        };
        const onLeave = () => {
          rotX(0);
          rotY(0);
        };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        ctx.add(() => () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="services"
      className="section relative bg-[var(--bg)] py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(212,175,55,0.07),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="services-head mb-14 md:mb-20">
          <p className="section-label mb-4 before:bg-[var(--gold-1)]">Capabilities</p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[2.75rem]">
            Full-stack digital, focused on outcomes.
          </h2>
        </div>

        <div
          className="services-grid grid gap-6 md:grid-cols-3"
          style={{ perspective: "1400px" }}
        >
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card card-glass group flex flex-col rounded-sm border border-[var(--border-light)] bg-[rgba(255,255,255,0.02)] p-8 transition-[border-color] duration-300 hover:border-[var(--border)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="service-icon mb-6 text-[var(--gold-1)] transition-transform duration-300 group-hover:scale-105">
                {s.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)]">{s.title}</h3>
              <p className="text-[var(--text-secondary)]">{s.desc}</p>
              <span className="mt-8 text-xs font-semibold tracking-[0.2em] text-[var(--gold-1)] uppercase opacity-80">
                Explore →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
