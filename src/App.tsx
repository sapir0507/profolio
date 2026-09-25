import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { profile } from './data/profile';
import { useLang } from './i18n';

export default function App() {
  const { t, tr } = useLang();
  return (
    <>
      <a className="skip-link" href="#about">{t.skip}</a>
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
        {t.builtWith} · © {new Date().getFullYear()} {tr(profile.displayName)}
      </footer>
    </>
  );
}
