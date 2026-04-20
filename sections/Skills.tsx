"use client";

import { useI18n } from "@/lib/i18n";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import GsapReveal from "@/components/GsapReveal";

export default function Skills() {
  const { content } = useI18n();
  const { skills } = content;

  return (
    <Section id="skills">
      <GsapReveal>
        <SectionLabel text={skills.sectionTitle} />
        <h2 className="mb-16 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          {skills.heading}
        </h2>
      </GsapReveal>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, i) => (
          <GsapReveal key={group.title} delay={i * 0.15}>
            <div className="group h-full rounded-xl border border-border bg-surface p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(109,93,252,0.06)]">
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {group.title}
              </h3>
              <p className="mb-6 font-mono text-sm text-muted">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md border border-border bg-surface-light px-3 py-1.5 font-mono text-xs text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </GsapReveal>
        ))}
      </div>
    </Section>
  );
}
