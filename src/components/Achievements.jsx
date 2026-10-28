import { achievements, education, languages } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <SectionHead eyebrow="05 · Highlights" title={["Achievements & ", "background", "."]} />
      <div className="ach-grid">
        {achievements.map(({ icon, title, text }, i) => (
          <Reveal key={title} className="ach" tilt delay={i * 70}>
            <div className="ach-ico">{icon}</div>
            <h4>{title}</h4>
            <p>{text}</p>
          </Reveal>
        ))}

        <Reveal className="ach wide">
          <div className="edu">
            <div>
              <span className="eyebrow small">Education</span>
              <h4>{education.degree}</h4>
              <p>{education.school}</p>
            </div>
            <div>
              <span className="eyebrow small">Languages</span>
              <div className="langs">
                {languages.map(({ name, level }) => (
                  <div key={name}>
                    <span>{name}</span>
                    <div className="bar"><i style={{ "--w": `${level}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
