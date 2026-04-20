"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealProps {
  children: ReactNode;
  className?: string;
  from?: gsap.TweenVars;
  delay?: number;
  duration?: number;
  stagger?: number;
  selectChildren?: boolean;
}

export default function GsapReveal({
  children,
  className,
  from = { y: 40, opacity: 0 },
  delay = 0,
  duration = 0.8,
  stagger = 0,
  selectChildren = false,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !ref.current) return;

    const target = selectChildren ? ref.current.children : ref.current;

    gsap.fromTo(
      target,
      from,
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [from, delay, duration, stagger, selectChildren]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
