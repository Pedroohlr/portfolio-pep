"use client";

import { useI18n } from "@/lib/i18n";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import GsapReveal from "@/components/GsapReveal";

export default function Experience() {
  const { content } = useI18n();
  const { experience } = content;

  return (
    <Section id="experience">
      <GsapReveal>
        <SectionLabel text={experience.sectionTitle} />
        <h2 className="mb-16 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          {experience.heading}
        </h2>
      </GsapReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:block md:left-8" />

        <div className="space-y-12">
          {experience.items.map((item, i) => (
            <GsapReveal
              key={i}
              delay={i * 0.15}
              from={{ x: -30, opacity: 0 }}
            >
              <div className="group relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:flex md:left-8">
                  <div className="h-3 w-3 rounded-full border-2 border-accent bg-background transition-all duration-300 group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(109,93,252,0.5)]" />
                </div>

                <div className="rounded-xl border border-border bg-surface p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(109,93,252,0.06)]">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.role}
                      </h3>
                      <p className="font-mono text-sm text-accent">
                        {item.company}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-sm text-muted">
                      {item.period}
                    </span>
                  </div>

                  <p className="mb-4 leading-relaxed text-muted">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface-light px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
