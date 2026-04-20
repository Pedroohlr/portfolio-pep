"use client";

import { useI18n } from "@/lib/i18n";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import GsapReveal from "@/components/GsapReveal";

export default function Projects() {
  const { content } = useI18n();
  const { projects } = content;

  return (
    <Section id="projects">
      <GsapReveal>
        <SectionLabel text={projects.sectionTitle} />
        <h2 className="mb-16 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          {projects.heading}
        </h2>
      </GsapReveal>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project, i) => (
          <GsapReveal key={project.slug} delay={i * 0.15}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(109,93,252,0.08)]">
              {/* Glow effect on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image placeholder */}
              <div className="relative aspect-video w-full overflow-hidden bg-surface-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-xs text-muted/50">
                    {project.stack[0]}
                  </div>
                </div>
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(109, 93, 252, 0.8) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(109, 93, 252, 0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface-light px-2.5 py-1 font-mono text-xs text-muted transition-all duration-300 group-hover:border-accent/20"
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
    </Section>
  );
}
