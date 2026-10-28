import { useInView, useTilt } from "../hooks";

// Fades/slides its content in on scroll. `as` keeps the DOM flat so grid layouts are unaffected.
export default function Reveal({ as: Tag = "div", className = "", delay = 0, tilt = false, children, ...rest }) {
  const [ref, inView] = useInView();
  useTilt(ref, tilt);

  const classes = ["reveal", tilt && "tilt", inView && "visible", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
