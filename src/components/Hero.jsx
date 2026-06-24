import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import "./Hero.css";

import brand1 from "/assets/logos/brand1.svg";
import brand2 from "/assets/logos/brand2.svg";
import brand3 from "/assets/logos/brand3.svg";
import brand4 from "/assets/logos/brand4.svg";
import brand5 from "/assets/logos/brand5.svg";
import brand6 from "/assets/logos/brand6.svg";
import brand7 from "/assets/logos/brand7.svg";
import brand8 from "/assets/logos/brand8.svg";
import showreel from "/assets/media/intro.mp4";

const BRAND_LOGOS = [
  { src: brand1, w: 95 },
  { src: brand2, w: 108 },
  { src: brand3, w: 121 },
  { src: brand4, w: 122 },
  { src: brand5, w: 115 },
  { src: brand6, w: 120 },
  { src: brand7, w: 124 },
  { src: brand8, w: 30 },
];

/* Live clock in Los Angeles time (UTC-8), matching the reference. */
function useLosAngelesTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Ticker() {
  const loop = [...BRAND_LOGOS, ...BRAND_LOGOS];
  return (
    <div className="hero__ticker" aria-hidden="true">
      <ul className="hero__ticker-track">
        {loop.map((logo, i) => (
          <li key={i} className="hero__ticker-item">
            <img src={logo.src} alt="" style={{ width: logo.w }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Marker({ code }) {
  return (
    <span className="hero__deco">
      <span className="hero__deco-line" />
      {code}
    </span>
  );
}

function Hero() {
  const time = useLosAngelesTime();
  const contentRef = useRef(null);

  // Animated count-up for the "120+" figure (kicks off after the intro).
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount(120), 3000);
    return () => clearTimeout(id);
  }, []);

  // Parallax: as the page scrolls, the content drifts upward and fades
  // while the fixed background stays put.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const el = contentRef.current;
        if (!el) return;
        el.style.transform = `translateY(${-y * 0.45}px)`;
        el.style.opacity = String(Math.max(0, 1 - y / 700));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Fixed background image + dot overlay + scrim */}
      <div className="hero__bg">
        <div className="hero__bg-image" />
        <div className="hero__dots" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content" ref={contentRef}>
        {/* Left-edge decoration markers */}
        <div className="hero__deco hero__deco--1">
          <span className="hero__deco-line" />// 00.01°
        </div>
        <div className="hero__deco hero__deco--2">
          <span className="hero__deco-line" />// 00.02°
        </div>
        <div className="hero__deco hero__deco--3">
          <span className="hero__deco-line" />// 00.03°
        </div>

        {/* Top-left message */}
        <h2 className="hero__message reveal" style={{ "--d": "0.05s" }}>
          Digital experiences that connect, scale and perform
          <span className="accent">.</span>
        </h2>

        {/* Top-right stats + ticker */}
        <div className="hero__stats reveal" style={{ "--d": "0.15s" }}>
          <NumberFlow
            className="hero__stat-figure"
            value={count}
            suffix="+"
            aria-label="120+"
          />
          <p className="hero__stat-caption">
            Quietly making noise for brands worldwide
          </p>
          <Ticker />
        </div>

        {/* Mid-left wordmark */}
        <h1 className="hero__wordmark reveal" style={{ "--d": "0.25s" }}>
          <span className="accent">thebig</span> brandstory
        </h1>

        {/* Bottom-left subtitle / clock / buttons */}
        <div className="hero__bottom reveal" style={{ "--d": "0.35s" }}>
          <div className="hero__subtitle">
            <h3>A DESIGN STUDIO TRUSTED BY STARTUPS AND LEADING BRANDS.</h3>
            <h3>WE CREATE STORIES PEOPLE REMEMBER.</h3>
          </div>

          <div className="hero__timezone">
            <p className="hero__tz-label">OUR TIME {time}</p>
            <p className="hero__tz-label">UTC−8 LOS ANGELES</p>
          </div>

          <div className="hero__buttons">
            <a className="hero__btn hero__btn--primary" href="#work">
              SEE WORK <span className="hero__btn-arrow">→</span>
            </a>
            <a className="hero__btn hero__btn--secondary" href="#contact">
              LET'S CHAT <span className="hero__btn-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Bottom-right showreel */}
        <div className="hero__showreel reveal" style={{ "--d": "0.45s" }}>
          <div className="hero__showreel-head">
            <span>SHOWREEL</span>
            <span className="hero__showreel-rule" />
            <span>\\2026</span>
          </div>
          <div className="hero__showreel-card">
            <video
              className="hero__showreel-video"
              src={showreel}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="hero__showreel-controls">
              <button aria-label="Rewind">⏮</button>
              <button className="hero__play" aria-label="Play">▶</button>
              <button aria-label="Forward">⏭</button>
            </div>
          </div>
          <div className="hero__showreel-marquee" aria-hidden="true">
            <span>
              BEST DIGITAL CAMPAIGN, WOBBLY · BRAND OF THE YEAR · CREATIVE
              EXCELLENCE&nbsp;·&nbsp;
            </span>
            <span>
              BEST DIGITAL CAMPAIGN, WOBBLY · BRAND OF THE YEAR · CREATIVE
              EXCELLENCE&nbsp;·&nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
