import { useEffect, useState } from "react";
import { profile } from "../data";
import { CopyIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <Reveal className="contact-card">
        <span className="eyebrow">07 · Contact</span>
        <h2>Let's build something <span className="grad">great</span> together.</h2>
        <p>Whether it's a role, a collaboration, or just a chat about system design, my inbox is open.</p>
        <div className="contact-actions">
          <a className="btn btn-primary big" href={profile.whatsapp} target="_blank" rel="noopener">
            <WhatsAppIcon /> Say hello <span className="arrow">→</span>
          </a>
          <button className="btn btn-ghost big" onClick={copyEmail}>
            <span className="copy-text">{profile.email}</span>
            <CopyIcon />
          </button>
        </div>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
          <a href={profile.resume} download>Résumé ↓</a>
        </div>
      </Reveal>
      <div className={`toast${toast ? " show" : ""}`} role="status">Email copied ✓</div>
    </section>
  );
}
