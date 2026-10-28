import { useEffect, useState } from "react";
import { certifications } from "../data";
import Chips from "./Chips";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Lightbox({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${cert.title} certificate`} onClick={onClose}>
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>✕</button>
      <img src={cert.image} alt={`${cert.issuer} certificate: ${cert.title}`} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default function Certifications() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="certifications">
      <SectionHead eyebrow="05 · Certifications" title={["Certified in ", "system design", "."]} />
      {certifications.map((cert) => (
        <Reveal as="article" key={cert.credentialId} className="cert">
          <button className="cert-image" onClick={() => setOpen(cert)} aria-label="View full certificate">
            <img src={cert.image} alt={`${cert.issuer} certificate: ${cert.title}`} loading="lazy" />
            <span className="cert-zoom">View certificate ⤢</span>
          </button>
          <div className="cert-body">
            <span className="cert-issuer"><span className="cert-logo">&gt;_</span> {cert.issuer} · Certified</span>
            <h3>{cert.title}</h3>
            <p>{cert.summary}</p>
            <dl className="cert-meta">
              <div><dt>Issued</dt><dd>{cert.issued}</dd></div>
              <div><dt>Duration</dt><dd>{cert.duration}</dd></div>
              <div><dt>Credential ID</dt><dd>{cert.credentialId}</dd></div>
            </dl>
            <Chips items={cert.topics} />
          </div>
        </Reveal>
      ))}
      {open && <Lightbox cert={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
