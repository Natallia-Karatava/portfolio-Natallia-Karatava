import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import projects from "./projects-list";
import ProjectMobile from "./components/ProjectMobile";

function App() {
  return (
    <div id="top" className="relative scroll-smooth">
      <Header />
      <About />
      <Skills />
      {/* Decktop */}
      <div className="hidden lg:block">
        <Projects projects={projects} />
      </div>
      {/* Tablet and Mobile */}
      <div className="block lg:hidden">
        <ProjectMobile projects={projects} />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
