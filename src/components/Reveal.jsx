import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal — mirrors Framer's appear-on-scroll behaviour.
 * Fades + slides its children up the first time they enter the viewport.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Keep observing (don't disconnect) so the reveal re-plays every time the
    // element scrolls back into view, instead of firing only once.
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal-scroll ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--d": `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
