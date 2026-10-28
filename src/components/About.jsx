import { pillars } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead eyebrow="01 · About" title={["Engineer by craft, ", "problem‑solver", " by habit."]} />
      <div className="about-grid">
        <Reveal className="about-copy">
          <p>
            I'm a full stack developer who enjoys the whole journey — shaping the data model, designing clean REST
            APIs, and polishing the UI until it feels effortless. Over seven years I've worked across{" "}
            <strong>healthcare</strong>, <strong>energy</strong>, <strong>retail tech</strong> and{" "}
            <strong>fintech</strong>, and each one taught me that great software is equal parts architecture and
            empathy.
          </p>
          <p>
            Today at <strong>Lyric</strong> I own end‑to‑end modules on <em>Studio42</em>, a multi‑tenant healthcare
            platform built with .NET Core microservices and React micro‑frontends — writing ADRs, designing schemas,
            wiring RBAC and championing secure coding with Snyk.
          </p>
          <p>
            Outside work you'll find me grinding algorithm problems, mentoring juniors, and experimenting with{" "}
            <strong>Agentic AI</strong> and <strong>RAG systems</strong>.
          </p>
          <div className="pillars">
            {pillars.map(({ icon, title, text }) => (
              <div key={title} className="pillar">
                <div className="p-ico">{icon}</div>
                <div><h4>{title}</h4><p>{text}</p></div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="terminal" tilt delay={70}>
          <div className="term-bar"><span /><span /><span /><em>~/afzal — whoami.ts</em></div>
          <pre className="term-body"><code>
<span className="k">const</span> <span className="v">afzal</span> = {"{"}{"\n"}
{"  "}<span className="p">role</span>: <span className="s">"Senior Software Engineer II"</span>,{"\n"}
{"  "}<span className="p">company</span>: <span className="s">"Lyric · AI for Healthcare"</span>,{"\n"}
{"  "}<span className="p">location</span>: <span className="s">"Hyderabad, India"</span>,{"\n"}
{"  "}<span className="p">experience</span>: <span className="n">7</span>, <span className="c">// years &amp; counting</span>{"\n"}
{"  "}<span className="p">stack</span>: [<span className="s">".NET Core"</span>, <span className="s">"React"</span>, <span className="s">"Node"</span>, <span className="s">"AWS"</span>],{"\n"}
{"  "}<span className="p">currentlyExploring</span>: [<span className="s">"Agentic AI"</span>, <span className="s">"RAG"</span>],{"\n"}
{"  "}<span className="p">languages</span>: [<span className="s">"English"</span>, <span className="s">"Hindi"</span>, <span className="s">"Urdu"</span>],{"\n"}
{"  "}<span className="p">openTo</span>: <span className="s">"interesting problems ☕"</span>,{"\n"}
{"}"};{"\n\n"}
<span className="k">export default</span> <span className="v">afzal</span>;<span className="term-caret">▌</span>
          </code></pre>
        </Reveal>
      </div>
    </section>
  );
}
