import type { ReactNode } from 'react';
import { useReveal } from '../hooks';

type Props = { id: string; index: string; title: string; children: ReactNode };

export default function Section({ id, index, title, children }: Props) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className="section reveal" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        <span className="section-index">{index}.</span> {title}
        <span className="section-rule" aria-hidden="true" />
      </h2>
      {children}
    </section>
  );
}
