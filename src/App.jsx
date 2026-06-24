import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Statement from "./components/Statement.jsx";
import Projects from "./components/Projects.jsx";
import Performance from "./components/Performance.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Intro />
      <Navigation />
      <main className="main">
        <Hero />
        <Statement />
        <Projects />
        <Performance />
      </main>
    </>
  );
}

export default App;
