import { ReactNode } from 'react';
export default function SectionHeading({ eyebrow, title, children }: {eyebrow: string; title: string; children?: ReactNode}) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</div>; }
