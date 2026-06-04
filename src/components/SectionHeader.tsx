type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-signal-600 dark:text-signal-400">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-serif text-3xl font-semibold tracking-normal text-ink-900 dark:text-ink-50 sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink-700 dark:text-ink-100 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
