"use client";

import { useI18n } from "@/lib/i18n";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import GsapReveal from "@/components/GsapReveal";
import TextReveal from "@/components/TextReveal";
import ParallaxGrid from "@/components/ParallaxGrid";

export default function About() {
  const { content } = useI18n();
  const { about } = content;

  return (
    <Section id="about" className="overflow-hidden">
      <ParallaxGrid />

      <GsapReveal>
        <SectionLabel text={about.sectionTitle} />
      </GsapReveal>

      <GsapReveal delay={0.1}>
        <h2 className="mb-12 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          <TextReveal text={about.heading} />
        </h2>
      </GsapReveal>

      <div className="grid gap-12 lg:grid-cols-5">
        <GsapReveal className="lg:col-span-3" delay={0.2}>
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </GsapReveal>

        <GsapReveal
          className="lg:col-span-2"
          delay={0.4}
          selectChildren
          stagger={0.15}
        >
          {about.highlights.map((h, i) => (
            <div
              key={i}
              className="group mb-6 rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(109,93,252,0.05)]"
            >
              <span className="block text-3xl font-bold text-accent">
                {h.value}
              </span>
              <span className="mt-1 block font-mono text-sm text-muted">
                {h.label}
              </span>
            </div>
          ))}
        </GsapReveal>
      </div>
    </Section>
  );
}
