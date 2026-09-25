import Section from './Section';
import { profile, stats, education } from '../data/profile';
import { useLang } from '../i18n';

export default function About() {
  const { t, tx } = useLang();
  return (
    <Section id="about" index="01" title={t.aboutTitle}>
      <div className="about-grid">
        <div className="about-text">
          {profile.about.en.map((_, i) => (
            <p key={i}>{tx({ en: profile.about.en[i], he: profile.about.he[i] })}</p>
          ))}
          <p className="mono small muted">
            <span className="accent">🎓</span> {tx(education.degree)} · {tx(education.school)} · {education.year}
          </p>
        </div>
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.value} className="card stat">
              <span className="stat-value" dir="ltr">{s.value}</span>
              <span className="stat-label">{tx(s.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
