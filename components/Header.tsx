"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const { content, toggleLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="relative z-50 font-mono text-lg font-bold tracking-tight text-foreground"
        >
          {"<PH />"}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {content.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLocale}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-all duration-300 hover:border-accent hover:text-accent"
          >
            {content.nav.languageToggle}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Backdrop blur bar */}
      <div className="pointer-events-none absolute inset-0 -z-10 border-b border-border/50 bg-background/70 backdrop-blur-xl" />

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {content.nav.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-mono text-2xl text-foreground transition-colors duration-300 hover:text-accent"
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => {
            toggleLocale();
            setMenuOpen(false);
          }}
          className="mt-4 rounded-full border border-border px-6 py-2 font-mono text-sm text-muted transition-all duration-300 hover:border-accent hover:text-accent"
        >
          {content.nav.languageToggle}
        </button>
      </div>
    </header>
  );
}
