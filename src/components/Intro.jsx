import { useEffect, useState } from "react";
import "./Intro.css";
import introVideo from "/assets/media/intro.mp4";

/**
 * Page-load intro splash — mirrors the reference "Intro Video":
 * a fullscreen grayscale video + dot overlay with "let's create"
 * revealing, then the whole panel slides up and away to expose the hero.
 * Includes a status loading percentage and progress bar.
 */
function Intro({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // enter -> exit -> done
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20; // 20ms steps
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    let currentPercent = 0;
    const timer = setInterval(() => {
      currentPercent += increment;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(timer);

        setPhase("exit");
        setTimeout(() => {
          setPhase("done");
          if (onComplete) onComplete();
        }, 900);
      }
      setPercent(Math.floor(currentPercent));
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

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
      
      <div className="intro__content">
        <h1 className="intro__title">let's create</h1>
        <div className="intro__loading">
          <div className="intro__progress-bar">
            <div
              className="intro__progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="intro__percent">{percent}%</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
