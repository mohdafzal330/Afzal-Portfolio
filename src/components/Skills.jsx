import { marquee, skillGroups } from "../data";
import Chips from "./Chips";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead eyebrow="04 · Toolbox" title={["Tools I ", "reach for", "."]} />

      {/* The list is rendered twice so the -50% translate loops seamlessly. */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </div>

      <div className="skill-grid">
        {skillGroups.map(({ icon, title, items }, i) => (
          <Reveal key={title} className="skill-card" delay={(i % 3) * 70}>
            <h4><span className="ico">{icon}</span> {title}</h4>
            <Chips items={items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
