import { useEffect, useRef, useState } from "react";
import "./Statement.css";
import bubbles from "/assets/media/intro.mp4";

const LINES = [
  { text: "we listen" },
  { text: "we imagine" },
  { text: "we create", accent: true },
  { text: "beautiful things", big: true },
];

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Springy "pop" easing (overshoots slightly past 1 then settles).
function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

/**
 * Pinned scroll-stack statement: the section is taller than the viewport and
 * sticks while scrolling through it. Scroll progress (0→1) drives each line
 * popping in over the previous one.
 */
function Statement() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const lineStyle = (i) => {
    if (reduced.current) return { opacity: 1, transform: "none" };
    const start = i * 0.22;
    const windowLen = 0.3;
    const t = clamp((progress - start) / windowLen, 0, 1);
    const eased = easeOutBack(t);
    const scale = 0.62 + 0.38 * eased;
    return {
      opacity: clamp(t * 1.6, 0, 1),
      transform: `translateY(${(1 - t) * 24}px) scale(${scale})`,
    };
  };

  return (
    <section className="stmt-wrap" ref={wrapRef} id="manifesto">
      <div className="stmt-pin">
        {/* Grayscale bubbles video backdrop */}
        <div className="stmt-bg">
          <video
            className="stmt-video"
            src={bubbles}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="stmt-lines">
          {LINES.map((line, i) => (
            <span
              key={line.text}
              className={`stmt-line ${line.accent ? "stmt-line--accent" : ""} ${
                line.big ? "stmt-line--big" : ""
              }`.trim()}
              style={lineStyle(i)}
            >
              {line.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statement;
