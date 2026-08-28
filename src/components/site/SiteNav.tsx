import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial =
      stored === "dark" || stored === "light"
        ? stored
        : matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(initial as "light" | "dark");
    document.documentElement.setAttribute("data-theme", initial);
    document.documentElement.classList.add("smooth");

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const links = (
    <>
      <Link to="/" hash="top" onClick={() => setOpen(false)}>
        Home
      </Link>
      <Link to="/" hash="work" onClick={() => setOpen(false)}>
        Work
      </Link>
      <Link to="/about" onClick={() => setOpen(false)}>
        About
      </Link>
      <a
        href={`${import.meta.env.BASE_URL}harshith-arava-resume.pdf`}
        download="Harshith-Arava-Resume.pdf"
        onClick={() => setOpen(false)}
      >
        Resume
      </a>
      <Link to="/" hash="contact" onClick={() => setOpen(false)}>
        Contact
      </Link>
    </>
  );

  return (
    <>
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <div className="wrap">
          <Link className="logo" to="/" aria-label="Harshith Arava — home">
            Harshith Arava <span className="logo-role">| Product Designer</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li>
                <Link to="/" hash="top">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" hash="work">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}harshith-arava-resume.pdf`}
                  download="Harshith-Arava-Resume.pdf"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link to="/" hash="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <svg
                className="sun"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              <svg
                className="moon"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            </button>
            <button
              className="menu-btn"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <nav
        className={open ? "mobile-menu open" : "mobile-menu"}
        aria-label="Mobile"
      >
        {links}
      </nav>
    </>
  );
}
