import { personalInfo } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line px-4 py-14 sm:px-6">
      <div className="divider-glow absolute top-0 left-1/2 w-64 -translate-x-1/2" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#" className="footer-link font-serif text-3xl font-semibold rose-gold-text">
          Aaira
        </a>
        <p className="max-w-sm text-sm text-dim">
          Full-stack developer crafting mobile & web experiences from Multan, Pakistan.
        </p>
        <p className="text-xs text-dim">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <a href="#" className="footer-link text-sm font-medium text-gold hover:text-rose">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
