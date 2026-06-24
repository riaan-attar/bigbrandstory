import "./Services.css";

/* 6 services that pin + stack on scroll. /05 (DISCOVERABLE) title/copy weren't
   in the reference shots — those values are placeholders to swap. */
const SERVICES = [
  {
    label: "FOUNDATION",
    title: "Brand Identity",
    desc: "The foundation of every project — how your brand looks, feels, and communicates.",
    bullets: [
      "Positioning and messaging frameworks",
      "Visual identity systems",
      "Brand guidelines for consistent use",
      "Digital-first brand systems",
      "Branded assets across campaigns and touchpoints",
    ],
    bg: "linear-gradient(135deg, #2b2c30 0%, #141518 100%)",
  },
  {
    label: "GROWTH",
    title: "Strategy",
    desc: "Clear direction backed by insight and planning to move from idea to execution.",
    bullets: [
      "Market and audience research",
      "Product and campaign strategy",
      "User journey mapping",
      "Roadmaps and rollout planning",
      "Workshops and alignment sessions",
    ],
    bg: "linear-gradient(135deg, #c9a88f 0%, #b6c0c4 100%)",
  },
  {
    label: "CREATIVE",
    title: "Design & Innovation",
    desc: "From first concepts to polished products that people want to use and share.",
    bullets: [
      "UX and UI design",
      "Prototyping and user testing",
      "Digital product and service design",
      "Iteration and validation",
      "Launch planning and support",
    ],
    bg: "linear-gradient(135deg, #e7e7e9 0%, #cfd0d3 100%)",
  },
  {
    label: "SMART AI",
    title: "AI Systems",
    desc: "Practical applications of AI to unlock smarter products and workflows.",
    bullets: [
      "Define AI vision and roadmap",
      "Intelligent experience design",
      "Prototyping and proof-of-concepts",
      "Integration into platforms and workflows",
      "Team enablement and training",
    ],
    bg: "linear-gradient(135deg, #d8c2b0 0%, #8f7f76 100%)",
  },
  {
    // Placeholder — DISCOVERABLE /05 copy wasn't visible in the reference.
    label: "DISCOVERABLE",
    title: "Marketing",
    desc: "Helping the right people discover, trust, and choose your brand.",
    bullets: [
      "SEO and content strategy",
      "Paid media and campaigns",
      "Analytics and tracking setup",
      "Conversion optimisation",
      "Lifecycle and email marketing",
    ],
    bg: "linear-gradient(135deg, #f0651f 0%, #b53b12 100%)",
  },
  {
    label: "BUILD",
    title: "Development",
    desc: "Turning ideas and designs into scalable, functional, and reliable digital products.",
    bullets: [
      "Web and app development",
      "CMS integration and setup",
      "E-commerce builds and optimisation",
      "Custom feature development",
      "Ongoing technical support",
    ],
    bg: "linear-gradient(135deg, #4a4d52 0%, #1a1b1e 100%)",
  },
];

const NAV_OFFSET = 64; // height of the fixed nav
const DECK_STEP = 58; // vertical gap each pinned header leaves above the next

function ServiceCard({ service, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
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

      <h3 className="service__title">{service.title}</h3>

      <div className="service__body">
        <div className="service__left">
          <div
            className="service__thumb"
            style={{ backgroundImage: service.bg }}
          />
          <p className="service__desc">{service.desc}</p>
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
