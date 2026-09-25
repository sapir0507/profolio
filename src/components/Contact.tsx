import { useState } from 'react';
import Section from './Section';
import { profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import { useLang } from '../i18n';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useLang();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" index="05" title={t.contactTitle}>
      <div className="contact">
        <p className="contact-lead">{t.contactLead}</p>
        <div className="hero-cta center-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon size={18} /> {t.sayHello}
          </a>
          <button className="btn" onClick={copyEmail} aria-live="polite">
            {copied ? t.copied : t.copyEmail}
          </button>
        </div>
        <ul className="contact-list mono" dir="ltr">
          <li>
            <MailIcon size={18} /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <LinkedInIcon size={18} />{' '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <GitHubIcon size={18} />{' '}
            <a href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.githubUser}</a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
