"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useI18n } from "@/lib/i18n";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const { content } = useI18n();
  const { hero } = content;
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-greeting",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        ".hero-name",
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1 },
        "-=0.3"
      )
      .fromTo(
        ".hero-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.5"
      )
      .fromTo(
        ".hero-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        ".hero-cta > *",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 },
        "-=0.2"
      )
      .fromTo(
        ".hero-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
        "-=0.6"
      )
      .fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.4"
      );

    // Grid parallax on mouse move
    if (gridRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        gsap.to(gridRef.current, {
          x,
          y,
          duration: 1,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background grid */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(109, 93, 252, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 93, 252, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent-light/5 blur-[100px]" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="hero-greeting mb-4 font-mono text-sm uppercase tracking-widest text-accent opacity-0">
          {hero.greeting}
        </p>

        <h1 className="hero-name mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground opacity-0 md:text-7xl lg:text-8xl">
          {hero.name}
          <span className="text-accent">.</span>
        </h1>

        <h2 className="hero-title mb-8 text-2xl font-light text-muted opacity-0 md:text-3xl">
          {hero.title}
        </h2>

        <p className="hero-desc mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted opacity-0">
          {hero.description}
        </p>

        <div className="hero-cta flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Magnetic strength={0.2}>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-3.5 font-mono text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(109,93,252,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">{hero.cta.projects}</span>
              <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-mono text-sm text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_30px_rgba(109,93,252,0.1)]"
            >
              {hero.cta.contact}
            </a>
          </Magnetic>
        </div>

        {/* Decorative line */}
        <div className="hero-line mx-auto mt-20 h-px w-40 origin-left bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
}
