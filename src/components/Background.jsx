import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "../hooks";

export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    const onMove = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="bg">
        <div className="bg-grid" />
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}
