import { useEffect, useState } from "react";
import "./Intro.css";
import introVideo from "/assets/media/intro.mp4";

/**
 * Page-load intro splash — mirrors the reference "Intro Video":
 * a fullscreen grayscale video + dot overlay with "let's create"
 * revealing, then the whole panel slides up and away to expose the hero.
 */
function Intro() {
  const [phase, setPhase] = useState("enter"); // enter -> exit -> done

  useEffect(() => {
    const exitAt = setTimeout(() => setPhase("exit"), 2400);
    const doneAt = setTimeout(() => setPhase("done"), 3300);
    return () => {
      clearTimeout(exitAt);
      clearTimeout(doneAt);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`intro intro--${phase}`} aria-hidden="true">
      <div className="intro__video-wrap">
        <video
          className="intro__video"
          src={introVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="intro__dots" />
      <h1 className="intro__title">let's create</h1>
    </div>
  );
}

export default Intro;
