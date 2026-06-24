import Reveal from "./Reveal.jsx";
import "./Process.css";
import createLogo from "/assets/logos/logo.svg";

const STEPS = [
  {
    num: "01",
    title: "DISCOVERY",
    icon: "telescope",
    desc: "We start by listening. Goals, challenges, and vision are mapped out clearly, setting the foundation for everything that follows.",
  },
  {
    num: "02",
    title: "STRATEGY",
    icon: "strategy",
    desc: "With insights in place, we define the roadmap. Positioning, priorities, and the best way to align design and execution.",
  },
  {
    num: "03",
    title: "DESIGN & BUILD",
    icon: "pen",
    desc: "Ideas take shape. From visuals to digital experiences, we design and develop with sharp attention to detail.",
  },
  {
    num: "04",
    title: "LAUNCH & GROW",
    icon: "rocket",
    desc: "Delivery is just the beginning. We measure, refine, and scale to ensure your project continues to perform.",
  },
];

function Icon({ name }) {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "telescope":
      return (
        <svg {...common}>
          <path d="M4 20l13-7 3 5-13 7z" />
          <path d="M17 13l4-2 2.4 4.3-4.4 1.7" />
          <path d="M9 22l-2 6M13 24l-1 5" />
        </svg>
      );
    case "strategy":
      return (
        <svg {...common}>
          <path d="M7 25L25 7" />
          <path d="M19 7h6v6" />
          <path d="M7 7l7 7" />
          <path d="M7 11V7h4" />
          <path d="M18 18l7 7" />
          <path d="M25 21v4h-4" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M8 24l2.5-8.5L21 5l6 6-10.5 10.5L8 24z" />
          <path d="M18.5 7.5l6 6" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M16 4c4 3.2 6 8 6 13l-3.5 3.5h-5L10 17c0-5 2-9.8 6-13z" />
          <circle cx="16" cy="13" r="2" />
          <path d="M10.5 20.5L7 26l5-1.5M21.5 20.5L25 26l-5-1.5" />
        </svg>
      );
    default:
      return null;
  }
}

function Process() {
  return (
    <section className="process" id="process">
      {/* ---- Dark intro header ---- */}
      <div className="proc-intro">
        <div className="proc-intro__inner">
          <div className="proc-intro__topline">
            <span className="proc-intro__topline-seg" />
          </div>
          <img className="proc-intro__brand" src={createLogo} alt="" aria-hidden="true" />

          <Reveal as="div" className="proc-intro__eyebrow">
            HOW WE WORK
            <span className="proc-intro__eyebrow-hatch" />
          </Reveal>

          <Reveal as="h2" className="proc-intro__title">
            The process behind our success
          </Reveal>
          <Reveal as="p" delay={0.1} className="proc-intro__lead">
            <span className="proc-intro__lead-dash" />
            We work with clarity, precision. Every step designed to move your
            project forward with confidence.
          </Reveal>

          <div className="proc-intro__ruler" />
        </div>
      </div>

      {/* ---- Aurora panel: intro + step grid ---- */}
      <div className="proc-panel">
        <div className="proc-panel__inner">
          <div className="proc-panel__intro">
            <Reveal as="h3" className="proc-panel__heading">
              Services built on process, precision, and people.
            </Reveal>
            <Reveal as="p" delay={0.1} className="proc-panel__text">
              We combine strategy, design, content, and technology, giving you a
              single partner for every stage of your brand's growth.
            </Reveal>
            <Reveal as="a" delay={0.2} className="proc-panel__cta" href="#contact">
              <span className="proc-panel__cta-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Chat with our Operations Manager
            </Reveal>
          </div>

          <div className="proc-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={0.1 + i * 0.08} className="proc-card">
                <div className="proc-card__top">
                  <span className="proc-card__icon">
                    <Icon name={s.icon} />
                  </span>
                  <span className="proc-card__num">//{s.num}</span>
                </div>
                <div className="proc-card__rule" />
                <h4 className="proc-card__title">{s.title}</h4>
                <p className="proc-card__desc">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
