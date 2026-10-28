import { featuredProject as f, projects } from "../data";
import Chips from "./Chips";
import ProjectArt from "./ProjectArt";
import Reveal from "./Reveal";
import Rich from "./Rich";
import SectionHead from "./SectionHead";

function FeaturedProject() {
  return (
    <Reveal as="article" className="project featured" tilt>
      <div className="project-art art-crafter">
        <div className="code-rain">
          {f.codeLines.map((line) => <span key={line}>{line}</span>)}
        </div>
        <div className="art-badge">LIVE</div>
      </div>
      <div className="project-body">
        <span className="project-kind">{f.kind}</span>
        <h3>{f.title}</h3>
        <p>{f.description}</p>
        <ul className="mini">
          {f.highlights.map((h) => <li key={h}><Rich text={h} bold="b" /></li>)}
        </ul>
        <Chips items={f.tech} />
        <a href={f.url} target="_blank" rel="noopener" className="link">{f.linkLabel}</a>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHead
        eyebrow="03 · Projects"
        title={["Selected ", "work", "."]}
        sub="A mix of personal builds and products I've shaped at work."
      />
      <div className="projects">
        <FeaturedProject />
        {projects.map(({ art, kind, title, description, tech }, i) => (
          <Reveal as="article" key={title} className="project" tilt delay={(i % 3) * 70}>
            <ProjectArt type={art} />
            <div className="project-body">
              <span className="project-kind">{kind}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Chips items={tech} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
