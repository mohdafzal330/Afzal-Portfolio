import Reveal from "./Reveal";

// `title` is [before, highlighted, after] so the gradient word can sit anywhere.
export default function SectionHead({ eyebrow, title: [before, highlight, after], sub }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {before}
        <span className="grad">{highlight}</span>
        {after}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}
