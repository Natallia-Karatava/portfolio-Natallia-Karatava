import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
