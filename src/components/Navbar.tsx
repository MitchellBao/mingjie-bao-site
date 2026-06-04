"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-20 border-b border-ink-900/10 bg-ink-50/82 py-4 backdrop-blur-xl dark:border-ink-50/10 dark:bg-ink-900/82">
      <nav className="flex items-center justify-between gap-5" aria-label="Main navigation">
        <Link href="/" className="group min-w-fit">
          <span className="block font-serif text-xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Mitchell Bao
          </span>
          <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-500 group-hover:text-signal-600 dark:text-ink-200 dark:group-hover:text-signal-400">
            archive / research / sound
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm text-ink-700 transition hover:bg-ink-900/5 hover:text-ink-900 dark:text-ink-100 dark:hover:bg-ink-50/10",
                pathname === item.href && "!bg-ink-900 !text-ink-50 hover:!bg-ink-900 dark:!bg-ink-50 dark:!text-ink-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 text-ink-700 transition hover:border-signal-500 hover:text-signal-600 dark:border-ink-50/15 dark:text-ink-100 dark:hover:text-signal-400"
          aria-label="Toggle color theme"
          title="Toggle color theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border border-ink-900/10 px-3 py-1.5 text-sm text-ink-700 dark:border-ink-50/10 dark:text-ink-100",
              pathname === item.href && "!border-ink-900 !bg-ink-900 !text-ink-50 dark:!border-ink-50 dark:!bg-ink-50 dark:!text-ink-900"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
