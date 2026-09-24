import Section from './Section';
import { experience } from '../data/profile';

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role + job.company} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-head">
              <h3>
                {job.role} <span className="accent">@ {job.company}</span>
              </h3>
              {job.period && <span className="mono small muted">{job.period}</span>}
            </div>
            {job.intro && <p className="muted">{job.intro}</p>}
            {job.points.length > 0 && (
              <ul className="bullets">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
