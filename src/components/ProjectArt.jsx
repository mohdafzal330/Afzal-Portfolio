// Small CSS-animated illustrations for the project cards. Styles live under `.art-*` in index.css.
const arts = {
  studio: () => (
    <div className="nodes">{Array.from({ length: 6 }, (_, i) => <i key={i} />)}</div>
  ),
  dash: () => (
    <div className="pulse-line">
      <svg viewBox="0 0 200 60" preserveAspectRatio="none"><path d="M0 30 H50 L60 10 L72 50 L84 20 L94 30 H200" /></svg>
    </div>
  ),
  castrol: () => <div className="phone"><i /><i /><i /></div>,
  pay: () => <div className="coins"><i /><i /><i /></div>,
  edu: () => <div className="stack"><i /><i /><i /></div>,
};

export default function ProjectArt({ type }) {
  const Art = arts[type];
  return <div className={`project-art art-${type}`}>{Art && <Art />}</div>;
}
