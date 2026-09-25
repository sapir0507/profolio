import { useState } from 'react';
import { useActiveSection } from '../hooks';
import { profile } from '../data/profile';
import { useLang } from '../i18n';

const ids = ['about', 'skills', 'experience', 'projects', 'contact'] as const;
const sectionIds = [...ids];

export default function Nav() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" dir="ltr" aria-label={t.backToTop}>
          <span className="accent">~/</span>sapir<span className="cursor" aria-hidden="true">_</span>
        </a>
        <div className="nav-actions">
          <nav id="nav-links" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
            {ids.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                <span className="accent">0{i + 1}.</span> {t.nav[id]}
              </a>
            ))}
            {profile.resumeUrl && (
              <a className="btn btn-sm" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                {t.resume}
              </a>
            )}
          </nav>
          <button
            className="lang-toggle"
            lang={lang === 'en' ? 'he' : 'en'}
            aria-label={t.switchLangLabel}
            onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
          >
            {t.switchLang}
          </button>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{t.menu}</span>
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
