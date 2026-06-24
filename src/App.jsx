import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Statement from "./components/Statement.jsx";
import Projects from "./components/Projects.jsx";
import Performance from "./components/Performance.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Faq from "./components/Faq.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easeOut
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.95,
      smoothTouch: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      {loading && <Intro onComplete={() => setLoading(false)} />}
      <Navigation />
      <main className="main">
        <Hero loading={loading} />
        <Statement />
        <Projects />
        <Performance />
        <Services />
        <Process />
        <Faq />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default App;
