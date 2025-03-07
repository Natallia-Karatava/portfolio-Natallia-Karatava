import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import RedDotsGrid from "./components/RedDotsGrid";

function App() {
  return (
    <div id="top" className="relative scroll-smooth">
      <div className="hidden md:block absolute top-122 right-18 -translate-x-1/2 z-10  pointer-events-none">
        <RedDotsGrid />
      </div>

      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
