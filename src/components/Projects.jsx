import { useEffect, useRef, useState } from "react";
import "./Projects.css";

/* Top 3 featured projects. Drop a real image URL into `image` to replace the
   gradient placeholder; `bg` is the fallback gradient + base tone. */
const PROJECTS = [
  {
    id: "aurelis",
    client: "aurelis",
    clientSub: "beach resort",
    title: "Aurelis Beach Resort",
    category: "HOSPITALITY BRANDING AND WEBSITE",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION", "CLOUDFLARE CDN"],
    year: "2025",
    image: "https://framerusercontent.com/images/yAyCNDhQbTvqJAfsIABAsGb15g.jpeg",
    bg: "linear-gradient(135deg, #a8c3cf 0%, #d7ddd6 55%, #b9c7c4 100%)",
    href: "#work",
  },
  {
    id: "blackwell",
    client: "Blackwell",
    title: "Blackwell Motors",
    category: "AUTOMOTIVE DIGITAL TRANSFORMATION",
    stack: ["REACT", "WEBGL", "NODE.JS", "AWS LAMBDA", "OPENAI EMBEDDINGS"],
    year: "2025",
    image: "https://framerusercontent.com/images/Sl9EJQTfoycU8fTKPQzTCSt7wI.jpg",
    bg: "linear-gradient(120deg, #4a4d50 0%, #2a2c2e 50%, #161718 100%)",
    href: "#work",
  },
  {
    id: "aspen",
    client: "Lindholm",
    title: "Aspen® 877",
    category: "E-MOBILITY BRAND LAUNCH",
    stack: ["FRAMER", "NEXT.JS", "GSAP", "WEBGL", "META ADS INTEGRATION"],
    year: "2025",
    image: "https://framerusercontent.com/images/Tw5d4QXO8KrpmBh9B9bEy8oWm1g.jpg",
    bg: "linear-gradient(160deg, #1c1d21 0%, #0c0c0e 100%)",
    href: "#work",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectItem({ p, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      className={`project ${visible ? "is-visible" : ""}`}
      href={p.href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="project__bg"
        style={
          p.image
            ? { backgroundImage: `url(${p.image})` }
            : { backgroundImage: p.bg }
        }
      />
      <div className="project__scrim" />

      <div className="project__top">
        <div className="project__logo">
          <span className="project__logo-main">{p.client}</span>
          {p.clientSub && (
            <span className="project__logo-sub">{p.clientSub}</span>
          )}
        </div>
        <span className="project__ruler" />
      </div>

      <div className="project__center">
        <h2 className="project__title">{p.title}</h2>
        <p className="project__subtitle">{p.category}</p>
      </div>

      <div className="project__bottom">
        <ul className="project__stack">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <span className="project__year">YR/ {p.year}</span>
      </div>
    </a>
  );
}

function Projects() {
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);

  // The orange "VIEW CASE STUDY" badge follows the pointer.
  useEffect(() => {
    const move = (e) => {
      const el = cursorRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <section className="projects" id="projects">
      {PROJECTS.map((p) => (
        <ProjectItem
          key={p.id}
          p={p}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
      ))}

      {/* Custom follow cursor */}
      <div className="cursor" ref={cursorRef} aria-hidden="true">
        <div className={`cursor__badge ${active ? "is-active" : ""}`}>
          <span className="cursor__arrow">
            <Arrow />
          </span>
          <span className="cursor__label">VIEW CASE STUDY</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
