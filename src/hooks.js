import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const hasFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

// Adds `visible` once the element scrolls into view.
export function useInView({
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

// Types and deletes each phrase in turn.
export function useTyping(
  phrases,
  { typeSpeed = 85, deleteSpeed = 40, pause = 1800, startDelay = 2200 } = {},
) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let p = 0;
    let i = phrases[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      setText(phrases[p].slice(0, i));
      if (deleting) {
        i--;
        if (i < 0) {
          deleting = false;
          p = (p + 1) % phrases.length;
          i = 0;
        }
      } else {
        i++;
        if (i > phrases[p].length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };

    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [phrases, typeSpeed, deleteSpeed, pause, startDelay]);

  return text;
}

// Counts from 0 to `target` with an ease-out curve once `start` is true.
export function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let raf;
    const t0 = performance.now();
    const step = (now) => {
      const t = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

// 3D tilt that follows the mouse (desktop only).
export function useTilt(ref, enabled = true) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || !hasFinePointer() || prefersReducedMotion()) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transitionDelay = "0ms";
      el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, enabled]);
}

// Scroll position helpers for the nav: scrolled flag, progress (0–1) and the active section id.
export function useScrollSpy(ids, offset = 140) {
  const [state, setState] = useState({
    scrolled: false,
    progress: 0,
    active: "",
  });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      let active = "";
      ids.forEach((id) => {
        const s = document.getElementById(id);
        if (s && y + offset >= s.offsetTop) active = id;
      });
      setState({ scrolled: y > 20, progress: max > 0 ? y / max : 0, active });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return state;
}

export { prefersReducedMotion, hasFinePointer };

// Light/dark theme. The initial value is set by the inline script in index.html (saved choice, else
// light) so the page never flashes the wrong theme; this hook reads it, toggles it and persists it.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f5f6fb" : "#07080d");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const toggle = () => {
    const root = document.documentElement;
    if (!prefersReducedMotion()) {
      root.classList.add("theme-switching");
      setTimeout(() => root.classList.remove("theme-switching"), 450);
    }
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return [theme, toggle];
}
