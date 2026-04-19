import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--bg)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:px-8 md:text-left">
        <p className="max-w-md text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} JASkrypt. We train developers through real client projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link
            href="mailto:hello@jaskrypt.com"
            className="text-xs font-semibold tracking-[0.15em] text-[var(--text-secondary)] uppercase hover:text-[var(--gold-1)]"
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-xs font-semibold tracking-[0.15em] text-[var(--text-secondary)] uppercase hover:text-[var(--gold-1)]"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href="#top"
            className="text-xs font-semibold tracking-[0.15em] text-[var(--gold-1)] uppercase"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
