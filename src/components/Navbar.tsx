import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`nav-bar fixed top-[2px] left-0 right-0 z-50 ${
        scrolled ? "nav-bar-scrolled" : "nav-bar-top"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#" className="shrink-0 font-serif text-xl font-semibold sm:text-2xl">
          <span className="rose-gold-text">Aaira</span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link rounded-full px-3 py-2 text-sm font-medium xl:px-4 ${
                    active === id ? "nav-link-active" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="ml-1">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxe relative z-10 !py-2 !px-4 !text-sm"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="shrink-0 rounded-lg p-2 text-champagne md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`mobile-menu md:hidden ${mobileOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-menu-inner">
          <ul className="flex flex-col gap-1 px-4 py-5 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-muted transition-colors duration-300 hover:bg-surface hover:text-champagne"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxe relative z-10 w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
