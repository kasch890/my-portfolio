import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <h1>Kai Fernandes</h1>
          <p>Software Developer | UX Designer | MS Software Development</p>
        </section>

        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
