import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Werkervaring from "./components/Werkervaring";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Werkervaring />
      <Footer />
    </div>
  );
}
