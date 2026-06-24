import Reveal from "./Reveal.jsx";
import "./Footer.css";

const NAVIGATE = ["HOME", "WORK", "STUDIO", "WHISPERS", "CONTACT"];
const LINKS = ["TERMS OF SERVICE", "PRIVACY POLICY", "DISCLAIMER", "404", "MORE TEMPLATES"];
const SOCIALS = ["X", "Li", "IG", "FB", "WA"];

function Footer() {
  const handleSubmit = (e) => e.preventDefault();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer" id="contact">
      {/* ---- Newsletter + nav ---- */}
      <div className="footer__top">
        <Reveal as="div" className="footer__news">
          <div className="footer__news-head">
            <h2 className="footer__news-title">
              Keep you in
              <br />
              the loop.
            </h2>
            <span className="footer__dots" aria-hidden="true" />
          </div>
          <p className="footer__news-sub">
            Get the latest news, insights directly to your inbox.{" "}
            <span className="accent">*</span>
          </p>

          <form className="footer__form" onSubmit={handleSubmit}>
            <input
              className="footer__input"
              type="email"
              placeholder="Enter Your Email"
              aria-label="Email address"
            />
            <button className="footer__submit" type="submit">
              JOIN OUR NEWSLETTER
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          <p className="footer__fineprint">
            By submitting, you agree to our{" "}
            <a href="#terms" className="accent">
              Terms &amp; Service.
            </a>
          </p>
          <p className="footer__fineprint">
            <span className="accent">*</span> No spam, just awesome updates.
          </p>
        </Reveal>

        <Reveal as="nav" delay={0.1} className="footer__col">
          <p className="footer__col-label">NAVIGATE</p>
          <ul>
            {NAVIGATE.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="nav" delay={0.18} className="footer__col">
          <p className="footer__col-label">LINKS</p>
          <ul>
            {LINKS.map((l) => (
              <li key={l}>
                <a href="#" className={l === "MORE TEMPLATES" ? "is-bold" : ""}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" delay={0.24} className="footer__socials">
          <span>Follow us on socials</span>
          <div className="footer__social-links">
            {SOCIALS.map((s) => (
              <a key={s} href="#">
                {s}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ---- Brand + contact band ---- */}
      <div className="footer__bottom">
        <Reveal as="div" className="footer__brand">
          <div className="footer__brand-rule" />
          <p className="footer__brand-tag">
            Digital experiences that connect,
            <br />
            scale and perform.
          </p>
          <h2 className="footer__wordmark">
            <span className="accent">TheBig</span>|BrandStory
          </h2>
          <div className="footer__about">
            <span className="footer__about-avatar" aria-hidden="true" />
            <p>
              A creative agency for design, strategy, marketing, and scalable
              premium websites.
            </p>
          </div>
          <p className="footer__copy">© 2026 TheBigBrandStory — All work, all rights.</p>
        </Reveal>

        <Reveal as="div" delay={0.1} className="footer__contact">
          <div className="footer__contact-cell">
            <p className="footer__contact-label">OFFLINE</p>
            <div className="footer__contact-rule" />
            <address className="footer__contact-value">
              Create Studio LLC.
              <br />
              8 Sunset Blvd, Office 5<br />
              Los Angeles, CA 90026
            </address>
          </div>

          <div className="footer__contact-cell">
            <p className="footer__contact-label">ONLINE</p>
            <div className="footer__contact-rule" />
            <a className="footer__email accent" href="mailto:hello@create.com">
              hello@create.com
            </a>
          </div>

          <div className="footer__contact-cell footer__contact-cell--phone">
            <p className="footer__contact-label">PHONE</p>
            <div className="footer__contact-rule" />
            <p className="footer__phone">(310) 555-0165</p>
          </div>

          <button className="footer__totop" onClick={toTop} aria-label="Back to top">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 19V5M6 11l6-6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;
