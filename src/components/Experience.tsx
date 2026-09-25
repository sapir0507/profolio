import Section from './Section';
import { experience } from '../data/profile';
import { useLang } from '../i18n';

export default function Experience() {
  const { t, tr, tx } = useLang();
  return (
    <Section id="experience" index="03" title={t.experienceTitle}>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role + job.company.en} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-head">
              <h3>
                <span dir="ltr">{job.role}</span> <span className="accent">@ {tr(job.company)}</span>
              </h3>
              {tr(job.period) && <span className="mono small muted">{tr(job.period)}</span>}
            </div>
            {tr(job.intro) && <p className="muted">{tx(job.intro)}</p>}
            {tr(job.points).length > 0 && (
              <ul className="bullets">
                {job.points.en.map((p, i) => (
                  <li key={p}>{tx({ en: p, he: job.points.he[i] })}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
