import Section from './Section';
import { skills } from '../data/profile';

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Tech stack">
      <div className="skills-grid">
        {skills.map((g) => (
          <div key={g.group} className="card">
            <h3 className="card-title mono">
              <span className="accent">#</span> {g.group}
            </h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
