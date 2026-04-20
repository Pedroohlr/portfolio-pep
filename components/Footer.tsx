export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <span className="font-mono text-sm text-muted">
          © {year} Pedro Hilário
        </span>
        <span className="font-mono text-xs text-muted/50">
          Built with Next.js, Tailwind CSS & GSAP
        </span>
      </div>
    </footer>
  );
}
