import { useState } from "react";
import { navLinks } from "../data";
import { useScrollSpy } from "../hooks";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrolled, progress, active } = useScrollSpy(sectionIds);
  const close = () => setOpen(false);

  return (
    <>
      <div className="progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="logo" onClick={close}>
          <span className="logo-mark">AK</span>
          <span className="logo-text">afzal<span className="accent">.dev</span></span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={active === href.slice(1) ? "active" : undefined} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>Let's talk</a>
        </nav>
        <button
          className={`burger${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </header>
    </>
  );
}
