import { useEffect, useRef, useState } from "react";
import "./Services.css";

function Typewriter({ text, trigger }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!trigger) {
      setDisplayText("");
      setShowCursor(true);
      return;
    }

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => setShowCursor(false), 1500);
      }
    }, 15);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, trigger]);

  return (
    <span>
      {displayText}
      {trigger && showCursor && <span className="service__cursor">|</span>}
    </span>
  );
}

/* 6 services that pin + stack on scroll. /05 (DISCOVERABLE) title/copy weren't
   in the reference shots — those values are placeholders to swap. */
const SERVICES = [
  {
    label: "IDENTITY & DESIGN",
    title: "Design Services",
    desc: "Crafting beautiful, cohesive brand identities and graphic solutions designed to make your brand stand out in any medium.",
    bullets: [
      "Brand Identity Design",
      "Graphic Design",
      "Marketing Collateral",
      "Creative Design Solutions",
    ],
    bg: "linear-gradient(135deg, #d8c2b0 0%, #8f7f76 100%)",
  },
  {
    label: "STRATEGY & CAMPAIGNS",
    title: "Advertising Agency",
    desc: "Creating impactful campaigns and strategy blueprints designed to connect brands with their audiences.",
    bullets: [
      "Brand Strategy",
      "Advertising Campaigns",
      "Marketing Consultation",
    ],
    bg: "linear-gradient(135deg, #2b2c30 0%, #141518 100%)",
  },
  {
    label: "BRAND STORYTELLING",
    title: "Content & Brand Production",
    desc: "Developing compelling narratives, creative direction, and high-impact visual storytelling.",
    bullets: [
      "Content Creation",
      "Creative Direction",
      "Brand Communication",
      "Visual Storytelling",
    ],
    bg: "linear-gradient(135deg, #4a4d52 0%, #1a1b1e 100%)",
  },
  {
    label: "DIGITAL & WEB",
    title: "Web Design & Development",
    desc: "High-performance, secure, and beautiful websites engineered to scale and perform.",
    bullets: [
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Website Maintenance",
    ],
    bg: "linear-gradient(135deg, #f0651f 0%, #b53b12 100%)",
  },
  {
    label: "VIDEO PRODUCTION",
    title: "Production House",
    desc: "Full-service visual production handling everything from commercials to brand videos and shoots.",
    bullets: [
      "Commercial Advertisement Production",
      "Corporate Videos",
      "Brand Films",
      "Product Shoots",
    ],
    bg: "linear-gradient(135deg, #c9a88f 0%, #b6c0c4 100%)",
  },
  {
    label: "SOCIAL MEDIA",
    title: "Social Media Marketing",
    desc: "Strategic audience engagement, targeted campaigns, and content that drives performance and loyalty.",
    bullets: [
      "Social Media Management",
      "Content Strategy",
      "Performance Marketing",
      "Community Building",
    ],
    bg: "linear-gradient(135deg, #e7e7e9 0%, #cfd0d3 100%)",
  },
];

const NAV_OFFSET = 64; // height of the fixed nav
const DECK_STEP = 0; // stack directly on top of each other

function ServiceCard({ service, index }) {
  const num = String(index + 1).padStart(2, "0");
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="service"
      style={{
        top: `${NAV_OFFSET + index * DECK_STEP}px`,
        zIndex: index + 1,
      }}
    >
      <div className="service__head">
        <span className="service__label">{service.label}</span>
        <span className="service__index">/{num}</span>
      </div>
      <div className="service__rule">
        <span className="service__rule-seg" />
      </div>

      <h3 className="service__title">
        <Typewriter text={service.title} trigger={inView} />
      </h3>

      <div className="service__body">
        <div className="service__left">
          <div
            className="service__thumb"
            style={{ backgroundImage: service.bg }}
          />
          <p className="service__desc">
            <Typewriter text={service.desc} trigger={inView} />
          </p>
        </div>

        <div className="service__right">
          <ul className="service__list">
            {service.bullets.map((b) => (
              <li key={b}>
                <span className="service__plus">+</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="service__ruler" />
        </div>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__head">
        <h2 className="services__title">services</h2>
        <p className="services__sub">
          WHAT WE DO BEST, AND WHAT YOUR NEXT PROJECT NEEDS MOST.
        </p>
      </div>

      <div className="services__stack">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.label} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Services;
