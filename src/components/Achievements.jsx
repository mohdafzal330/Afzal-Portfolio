import { achievements, education, interests, languages } from "../data";
import Chips from "./Chips";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <SectionHead eyebrow="06 · Highlights" title={["Achievements & ", "background", "."]} />
      <div className="ach-grid">
        {achievements.map(({ icon, title, text, links }, i) => (
          <Reveal key={title} className="ach" tilt delay={(i % 3) * 70}>
            <div className="ach-ico">{icon}</div>
            <h4>{title}</h4>
            <p>{text}</p>
            {links && (
              <div className="ach-links">
                {links.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener">{label} ↗</a>
                ))}
              </div>
            )}
          </Reveal>
        ))}

        <Reveal className="ach wide">
          <div className="edu">
            <div>
              <span className="eyebrow small">Education</span>
              <h4>{education.degree}</h4>
              <p>
                <a className="school-link" href={education.schoolUrl} target="_blank" rel="noopener">{education.school} ↗</a>
                {" · "}{education.years}
              </p>
              <span className="grade">{education.grade}</span>
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
            <div>
              <span className="eyebrow small">Interests</span>
              <Chips items={interests} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
