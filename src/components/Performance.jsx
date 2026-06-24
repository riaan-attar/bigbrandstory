import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import Reveal from "./Reveal.jsx";
import "./Performance.css";
import createLogo from "/assets/logos/logo.svg";

const STATS = [
  { value: 86, suffix: "+", label: "PROJECTS SHIPPED", idx: "001", fill: 72 },
  { value: 80, suffix: "%", label: "REPEAT COLLABORATIONS", idx: "002", fill: 80 },
  { value: 32, suffix: "", label: "INDUSTRY AWARDS", idx: "003", fill: 38 },
  { value: 89, suffix: "%", label: "CLIENT RETENTION RATE", idx: "004", fill: 89 },
];

function Performance() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  // Trigger the count-up + bar fill once the stats scroll into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="perf" id="performance">
      <div className="perf__bg" />

      <div className="perf__inner">
        <div className="perf__topline">
          <span className="perf__topline-seg" />
        </div>
        <img className="perf__brand" src={createLogo} alt="" aria-hidden="true" />

        <Reveal as="div" className="perf__eyebrow">
          PERFORMANCE
          <span className="perf__eyebrow-hatch" />
        </Reveal>

        <div className="perf__head">
          <Reveal as="h2" className="perf__title">
            The proof behind our work
          </Reveal>
          <Reveal as="p" delay={0.1} className="perf__lead">
            <span className="perf__lead-dash" />
            From first launches to lasting collaborations, we're trusted to
            deliver on time and at quality.
          </Reveal>
        </div>

        <div className="perf__ruler" />

        <div className="perf__stats" ref={ref}>
          {STATS.map((s, i) => (
            <div className="perf__stat" key={s.label} style={{ "--d": `${i * 0.1}s` }}>
              <NumberFlow
                className="perf__num"
                value={shown ? s.value : 0}
                suffix={s.suffix}
              />
              <div className="perf__label">{s.label}</div>
              <div className="perf__bar">
                <span
                  className="perf__fill"
                  style={{ width: shown ? `${s.fill}%` : "0%" }}
                />
                <span className="perf__idx">//{s.idx}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Performance;
