import Reveal from "./Reveal.jsx";
import "./Testimonials.css";
import brand1 from "/assets/logos/brand1.svg";
import brand2 from "/assets/logos/brand2.svg";
import brand3 from "/assets/logos/brand3.svg";
import brand4 from "/assets/logos/brand4.svg";
import brand5 from "/assets/logos/brand5.svg";
import brand6 from "/assets/logos/brand6.svg";
import brand7 from "/assets/logos/brand7.svg";
import brand8 from "/assets/logos/brand8.svg";

const LOGOS = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

const TESTIMONIALS = [
  {
    quote:
      "They don't just deliver a project and walk away. The team stayed close, fixed details on the fly, and made sure launch was smooth.",
    name: "Mark Miller",
    role: "Creative Lead",
    brand: "WENDRICH",
    grad: "linear-gradient(135deg, #6b7280, #374151)",
  },
  {
    quote:
      "Working with the team felt effortless. They understood our vision from day one and kept us aligned through clear milestones. The end result was a site that actually elevated our brand voice, not just dressed it up.",
    name: "Jordan Ellis",
    role: "Creative Director",
    brand: "BLACKWELL",
    grad: "linear-gradient(135deg, #d9a679, #a06b4a)",
  },
  {
    quote:
      "Every meeting felt productive, every deadline hit, and the end result nailed our brand better than we could describe.",
    name: "Rachel Morgan",
    role: "Head of Design",
    brand: "AURELIS",
    grad: "linear-gradient(135deg, #c0a0c8, #7a5f86)",
  },
  {
    quote:
      "From strategy to launch, they made complex decisions feel simple and kept the momentum high throughout the build.",
    name: "Daniel Cho",
    role: "Founder",
    brand: "LINDHOLM",
    grad: "linear-gradient(135deg, #7fa8c9, #3f6285)",
  },
  {
    quote:
      "They translated a vague idea into a brand that finally feels like us — sharp, clear, and ready to scale.",
    name: "Sofia Reyes",
    role: "Marketing Lead",
    brand: "OBLIQON",
    grad: "linear-gradient(135deg, #e6896d, #b5503a)",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

function Card({ t }) {
  return (
    <article className="tcard">
      <span className="tcard__mark" aria-hidden="true">
        &rdquo;
      </span>
      <p className="tcard__text">{t.quote}</p>
      <div className="tcard__rule" />
      <div className="tcard__foot">
        <div className="tcard__person">
          <span className="tcard__avatar" style={{ backgroundImage: t.grad }}>
            {initials(t.name)}
          </span>
          <div className="tcard__meta">
            <span className="tcard__name">{t.name}</span>
            <span className="tcard__role">{t.role}</span>
          </div>
        </div>
        <span className="tcard__brand">{t.brand}</span>
      </div>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="tmonials" id="testimonials">
      {/* Logo marquee */}
      <Reveal className="tmonials__logos">
        <div className="tmarquee tmarquee--logos">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <img key={i} className="tmonials__logo" src={logo} alt="" />
          ))}
        </div>
      </Reveal>

      {/* Testimonial card marquee */}
      <Reveal delay={0.1} className="tmonials__cards">
        <div className="tmarquee tmarquee--cards">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Testimonials;
