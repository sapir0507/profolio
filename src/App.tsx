import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { profile } from './data/profile';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="bg-grid" aria-hidden="true" />
      <Nav />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer mono small muted">
        Built with React + TypeScript + Vite · © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
