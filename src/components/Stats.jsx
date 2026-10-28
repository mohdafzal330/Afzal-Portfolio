import { stats } from "../data";
import { useCountUp, useInView } from "../hooks";

function Stat({ value, suffix = "", label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className={`stat reveal${inView ? " visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="num">{count}{suffix}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats" id="stats">
      {stats.map((s, i) => <Stat key={s.label} {...s} delay={i * 70} />)}
    </section>
  );
}
