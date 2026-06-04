import Link from "next/link";

type TagProps = {
  label: string;
  href?: string;
};

export function Tag({ label, href }: TagProps) {
  const className =
    "inline-flex items-center rounded-full border border-ink-900/10 px-2.5 py-1 font-mono text-[0.72rem] text-ink-600 transition hover:border-signal-500 hover:text-signal-600 dark:border-ink-50/15 dark:text-ink-100 dark:hover:text-signal-400";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}
