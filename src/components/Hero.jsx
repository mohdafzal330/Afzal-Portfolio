import { heroChips, profile, typedPhrases } from "../data";
import { useTyping } from "../hooks";
import Reveal from "./Reveal";
import { CodeforcesIcon, GitHubIcon, GlobeIcon, LeetCodeIcon, LinkedInIcon, MailIcon } from "./Icons";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: profile.leetcode, label: "LeetCode", Icon: LeetCodeIcon, external: true },
  { href: profile.codeforces, label: "Codeforces", Icon: CodeforcesIcon, external: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  { href: profile.website, label: "Crafter Hack", Icon: GlobeIcon, external: true },
];

export default function Hero() {
  const typed = useTyping(typedPhrases);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <Reveal className="status-pill"><span className="dot" /> {profile.status}</Reveal>
        <Reveal as="h1" delay={70}>
          Hi, I'm <span className="grad">{profile.name}</span>.
          <span className="build-line">
          I build{" "}
          {/* Every phrase is rendered invisibly in the same grid cell, so the box is always sized to the
              widest one and typing never reflows the hero. */}
          <span className="typed-wrap">
            {typedPhrases.map((p) => (
              <span key={p} className="typed-sizer" aria-hidden="true">{p}|</span>
            ))}
            <span className="typed-live">
              <span className="typed">{typed}</span><span className="caret">|</span>
            </span>
          </span>
          </span>
        </Reveal>
        <Reveal as="p" className="lead" delay={140}>
          Full stack engineer with <strong>7+ years</strong> shipping cross‑platform products at{" "}
          <strong>Amazon</strong>, <strong>BP</strong>, <strong>Nagarro</strong> and now <strong>Lyric</strong> — from
          multi‑tenant healthcare microservices to IoT monitoring that cut AWS costs by <strong>60%</strong>.
        </Reveal>
        <Reveal className="hero-ctas" delay={210}>
          <a href="#projects" className="btn btn-primary">View my work <span className="arrow">→</span></a>
          <a href={profile.resume} className="btn btn-ghost" download>Download résumé</a>
        </Reveal>
        <Reveal className="socials" delay={280}>
          {socials.map(({ href, label, Icon, external }) => (
            <a key={label} href={href} aria-label={label} data-tooltip={label} {...(external && { target: "_blank", rel: "noopener" })}>
              <Icon />
            </a>
          ))}
        </Reveal>
      </div>

      <Reveal className="hero-visual" delay={140}>
        <div className="avatar-wrap">
          <div className="avatar-ring" />
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="avatar" />
          {heroChips.map(({ icon, label }, i) => (
            <div key={label} className={`float-chip c${i + 1}`}><span>{icon}</span> {label}</div>
          ))}
        </div>
      </Reveal>

      <a href="#stats" className="scroll-hint" aria-label="Scroll down"><span /></a>
    </section>
  );
}
