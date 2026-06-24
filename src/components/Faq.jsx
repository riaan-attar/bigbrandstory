import { useState } from "react";
import Reveal from "./Reveal.jsx";
import "./Faq.css";

/* Answers for items beyond the first are concise placeholders to swap. */
const FAQS = [
  {
    q: "What kind of projects does Create take on?",
    a: "We focus on brand identity, digital products, and websites that need both design clarity and technical polish.",
  },
  {
    q: "How do you approach new projects?",
    a: "Every engagement starts with discovery — we map goals, audience, and constraints before a single pixel is drawn.",
  },
  {
    q: "What's a realistic project timeline?",
    a: "Most brand and product builds run 6–12 weeks, depending on scope. We share a clear roadmap up front.",
  },
  {
    q: "Who actually does the work?",
    a: "A small senior team — no hand-offs to juniors. You work directly with the people designing and building.",
  },
  {
    q: "How do we communicate during the process?",
    a: "Async updates plus weekly check-ins, with everything documented in a shared workspace you can access anytime.",
  },
  {
    q: "What happens after launch?",
    a: "We stay on for measurement, iteration, and support — launch is the start, not the finish line.",
  },
  {
    q: "Do you work with startups as well as big companies?",
    a: "Both. We tailor scope and pace to the stage you're at, from first launch to enterprise rollout.",
  },
  {
    q: "How do you measure success for a project?",
    a: "Against the goals set in discovery — adoption, conversion, retention, or whatever moves your business.",
  },
  {
    q: "Can we start small and scale later?",
    a: "Absolutely. Many partnerships begin with a focused first phase and grow from there.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button className="faq-item__q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      <div className="faq-item__answer">
        <div className="faq-item__answer-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        {/* Left column */}
        <div className="faq__left">
          <Reveal as="div" className="faq__eyebrow">
            FAQ
            <span className="faq__eyebrow-rule" />
          </Reveal>

          <Reveal as="h2" delay={0.05} className="faq__title">
            Clearing doubts and concerns
          </Reveal>

          <Reveal as="p" delay={0.1} className="faq__lead">
            <span className="faq__lead-dash" />
            Explore the most common questions about working with Create, all in
            one place.
          </Reveal>

          <div className="faq__ruler" />

          <Reveal as="p" delay={0.15} className="faq__cta-text">
            Book a quick chat and we'll walk you through how we do things.
          </Reveal>

          <Reveal as="div" delay={0.2} className="faq__contact">
            <div className="faq__person">
              <span className="faq__avatar" aria-hidden="true">
                LB
              </span>
              <div className="faq__person-meta">
                <span className="faq__person-name">Lynn Bergmann</span>
                <span className="faq__person-role">Project Manager</span>
              </div>
            </div>
            <a className="faq__book" href="#contact">
              BOOK A CALL
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Right column — accordion */}
        <div className="faq__list">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={0.05 * i}>
              <FaqItem
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
