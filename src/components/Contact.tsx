import { useState } from 'react';
import Section from './Section';
import { profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

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
    <Section id="contact" index="05" title="Get in touch">
      <div className="contact">
        <p className="contact-lead">
          I’m currently looking for my next <strong>Full Stack</strong> role. Whether you have a position in mind or
          just want to talk shop, my inbox is open.
        </p>
        <div className="hero-cta center-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon size={18} /> Say hello
          </a>
          <button className="btn" onClick={copyEmail} aria-live="polite">
            {copied ? '✓ Copied!' : 'Copy email'}
          </button>
        </div>
        <ul className="contact-list mono">
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
