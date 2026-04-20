"use client";

import { useI18n } from "@/lib/i18n";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import GsapReveal from "@/components/GsapReveal";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  const { content } = useI18n();
  const { contact } = content;

  return (
    <Section id="contact" className="overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <GsapReveal>
          <SectionLabel text={contact.sectionTitle} />
          <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {contact.heading}
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-muted">
            {contact.description}
          </p>
        </GsapReveal>

        <GsapReveal delay={0.2}>
          <Magnetic strength={0.15}>
            <a
              href={`mailto:${contact.email}`}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-10 py-4 font-mono text-base font-medium text-white transition-all duration-300 hover:shadow-[0_0_50px_rgba(109,93,252,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">{contact.email}</span>
              <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>
        </GsapReveal>

        <GsapReveal delay={0.3}>
          <div className="mt-12 flex items-center justify-center gap-6">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-sm text-muted transition-colors duration-300 hover:text-accent"
              >
                <span className="inline-block h-px w-4 bg-border transition-all duration-300 group-hover:w-8 group-hover:bg-accent" />
                {link.label}
              </a>
            ))}
          </div>
        </GsapReveal>
      </div>
    </Section>
  );
}
