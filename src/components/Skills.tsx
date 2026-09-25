import Section from './Section';
import { skills } from '../data/profile';
import { useLang } from '../i18n';

export default function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" index="02" title={t.skillsTitle}>
      <div className="skills-grid">
        {skills.map((g) => (
          <div key={g.group} className="card">
            <h3 className="card-title mono" dir="ltr">
              <span className="accent">#</span> {g.group}
            </h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s} className="chip" dir="ltr">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
