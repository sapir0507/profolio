import Section from './Section';
import { profile, stats, education } from '../data/profile';

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="about-grid">
        <div className="about-text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="mono small muted">
            <span className="accent">🎓</span> {education.degree} · {education.school} · {education.year}
          </p>
        </div>
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label} className="card stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
