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
  return (
    <>
      <ScrollProgress />
      <Intro />
      <Navigation />
      <main className="main">
        <Hero />
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
