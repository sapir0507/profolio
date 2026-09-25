import type { CSSProperties } from 'react';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks';
import { useLang } from '../i18n';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const { t, tr, tx } = useLang();

  return (
    <section id="top" className="hero">
      <div className="hero-text">
        {profile.openToWork && (
          <p className="badge">
            <span className="pulse" aria-hidden="true" /> {t.openToWork}
          </p>
        )}
        <p className="mono muted">{t.greeting}</p>
        <h1 className="hero-name">{tr(profile.displayName)}.</h1>
        <p
          className="hero-role mono"
          dir="ltr"
          style={{ '--role-chars': Math.max(...profile.roles.map((r) => r.length)) } as CSSProperties}
          aria-label={profile.roles.join(', ')}>
          <span className="accent">&gt;</span> <span aria-hidden="true">{role}</span>
          <span className="caret" aria-hidden="true" />
        </p>
        <p className="hero-summary">{tx(profile.summary)}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#contact">{t.getInTouch}</a>
          <a className="btn" href="#projects">{t.seeWork}</a>
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon size={22} />
          </a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={22} />
          </a>
        </div>
      </div>

      <div className="terminal" dir="ltr" aria-hidden="true">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="terminal-title">sapir.ts</span>
        </div>
        <pre className="terminal-body">
<span className="kw">const</span> <span className="var">developer</span> = {'{'}
{'\n'}  <span className="prop">name</span>: <span className="str">'{profile.name}'</span>,
{'\n'}  <span className="prop">location</span>: <span className="str">'{profile.location}'</span>,
{'\n'}  <span className="prop">frontend</span>: [<span className="str">'React'</span>, <span className="str">'TypeScript'</span>],
{'\n'}  <span className="prop">backend</span>: [<span className="str">'.NET'</span>, <span className="str">'ASP.NET Core'</span>],
{'\n'}  <span className="prop">data</span>: [<span className="str">'PostgreSQL'</span>, <span className="str">'Oracle'</span>],
{'\n'}  <span className="prop">bonus</span>: <span className="str">'GIS / ArcGIS'</span>,
{'\n'}  <span className="prop">ownsFeatures</span>: <span className="kw">true</span>,
{'\n'}{'}'};
{'\n'}
{'\n'}<span className="var">developer</span>.<span className="fn">hire</span>(); <span className="cmt">// 🚀</span>
        </pre>
      </div>
    </section>
  );
}
