interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="mb-4 inline-block font-mono text-sm uppercase tracking-widest text-accent">
      {"// "}
      {text}
    </span>
  );
}
