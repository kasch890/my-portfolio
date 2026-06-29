import Home from "./components/HomeSection";
import Navbar from "./components/Navbar";
import About from "./components/AboutSection";
import Projects from "./components/ProjectsSection";
import Skills from "./components/SkillsSection";
import Contact from "./components/ContactSection";
import Design from "./components/DesignSection";
import "./App.css";

function App() {
  return (
    <>
    <Navbar />
      <section id="home" className="page-section">
        <Home />
      </section>
      <section id="about" className="page-section">
        <About />
      </section>
      <section id="projects" className="page-section">
        <Projects />
      </section>
      <section id="design" className="page-section">
        <Design />
      </section>
      <section id="skills" className="page-section">
        <Skills />
      </section>
      <section id="contact" className="page-section">
        <Contact />
      </section>
    </>
  );
}

export default App;
