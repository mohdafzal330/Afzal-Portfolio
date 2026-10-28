import { experience } from "../data";
import Chips from "./Chips";
import Reveal from "./Reveal";
import Rich from "./Rich";
import SectionHead from "./SectionHead";

function Job({ role, company, url, period, location, current, summary, points, tech }) {
  return (
    <Reveal as="article" className="job">
      <div className="job-dot" />
      <div className="job-card">
        <div className="job-top">
          <div>
            <h3>{role}</h3>
            {url ? (
              <a className="company" href={url} target="_blank" rel="noopener">{company} ↗</a>
            ) : (
              <span className="company">{company}</span>
            )}
          </div>
          <div className="job-meta">
            {current && <span className="badge live">Current</span>}
            <span>{period}</span>
            <span>{location}</span>
          </div>
        </div>
        <p className="job-sub">{summary}</p>
        <ul>
          {points.map((p) => <li key={p}><Rich text={p} /></li>)}
        </ul>
        <Chips items={tech} />
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead eyebrow="02 · Experience" title={["Where I've ", "shipped", "."]} />
      <div className="timeline">
        {experience.map((job) => <Job key={job.company} {...job} />)}
      </div>
    </section>
  );
}
