import { AmbientBackground } from "./components/AmbientBackground";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { KeywordsStrip } from "./components/KeywordsStrip";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <StatsStrip />
        <KeywordsStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
