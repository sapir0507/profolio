import { useState } from 'react';
import { useActiveSection } from '../hooks';
import { profile } from '../data/profile';

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
];
const ids = links.map((l) => l.id);

export default function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="accent">~/</span>sapir<span className="cursor" aria-hidden="true">_</span>
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
        <nav id="nav-links" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              <span className="accent">0{i + 1}.</span> {l.label}
            </a>
          ))}
          {profile.resumeUrl && (
            <a className="btn btn-sm" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              résumé
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
