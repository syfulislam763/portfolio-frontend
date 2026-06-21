export default function SectionHeading({
  eyebrow,
  title,
  description,
  title2,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  title2?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">{eyebrow}</p>
      <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 leading-relaxed text-muted">{description}</p>}
      {title2 && <h3 className="font-display mt-3 leading-relaxed text-muted text-sm font-medium text-ink sm:text-sm"><a target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?hl=en&user=LtELa7cAAAAJ" className="hover:underline hover:text-signal transition-colors">
        {title2}
      </a></h3>}
    </div>
  );
}
