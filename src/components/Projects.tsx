import { useEffect, useState } from 'react';
import Section from './Section';
import { featured, profile, hiddenRepos } from '../data/profile';
import { ArrowIcon, GitHubIcon, StarIcon } from './Icons';
import { useLang } from '../i18n';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
};

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  SCSS: '#c6538c',
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);
  const { t, tx } = useLang();

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=pushed`, {
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: Repo[]) =>
        setRepos(
          data
            .filter((r) => !r.fork && !hiddenRepos.includes(r.name) && r.name !== `${profile.githubUser}.github.io`)
            .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.pushed_at) - +new Date(a.pushed_at))
            .slice(0, 6),
        ),
      )
      .catch((e) => {
        if (e?.name !== 'AbortError') setFailed(true);
      });
    return () => ctrl.abort();
  }, []);

  return (
    <Section id="projects" index="04" title={t.projectsTitle}>
      <p className="muted section-lead">
        {t.projectsLead}
      </p>
      <div className="projects-grid">
        {featured.map((p) => (
          <article key={p.name} className="card project">
            <p className="mono small accent" dir="ltr">{p.tag}</p>
            <h3 className="project-name" dir="ltr">{p.name}</h3>
            <p className="muted">{tx(p.description)}</p>
            <ul className="stack mono">
              {p.stack.map((s) => (
                <li key={s} dir="ltr">{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="subhead mono" dir="ltr">
        <span className="accent">$</span> git log --public
      </h3>
      {!repos && !failed && <p className="muted mono small">{t.fetchingRepos}</p>}
      {failed && (
        <p className="muted">
          {t.reposFailed}{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">{t.reposFailedLink}</a>.
        </p>
      )}
      {repos && repos.length === 0 && (
        <p className="muted">{t.reposEmpty}</p>
      )}
      {repos && repos.length > 0 && (
        <div className="repos-grid">
          {repos.map((r) => (
            <a key={r.id} className="card repo" href={r.homepage || r.html_url} target="_blank" rel="noreferrer">
              <div className="repo-head">
                <GitHubIcon size={18} />
                <span className="repo-name mono">{r.name}</span>
                <ArrowIcon />
              </div>
              <p className="muted small repo-desc" dir={r.description ? 'auto' : undefined}>{r.description || t.noDescription}</p>
              <div className="repo-meta mono small muted">
                {r.language && (
                  <span>
                    <span className="lang-dot" style={{ background: langColor[r.language] ?? '#8b949e' }} />
                    {r.language}
                  </span>
                )}
                {r.stargazers_count > 0 && (
                  <span>
                    <StarIcon /> {r.stargazers_count}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
      <p className="center">
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon size={18} /> {t.viewAllGithub}
        </a>
      </p>
    </Section>
  );
}
