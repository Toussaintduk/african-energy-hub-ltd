import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
export default function NewsSection(){return <section className="section-space"><div className="container"><SectionHeading eyebrow="COMPANY & PROJECT NEWS" title="Latest from the field."><Button variant="outline" asChild><Link to="/projects">Project updates <ArrowUpRight/></Link></Button></SectionHeading><div className="grid md:grid-cols-3 gap-6">{[projects[5],projects[4],projects[3]].map(p=><Link key={p.slug} to={`/projects/${p.slug}`} className="border-t border-border pt-5 group"><p className="text-xs text-muted-foreground mb-3">{p.period}</p><h3 className="text-xl font-semibold group-hover:text-primary">{p.client}</h3><p className="text-sm text-muted-foreground mt-3">{p.caption}</p><ArrowUpRight className="h-5 w-5 mt-5 text-primary"/></Link>)}</div></div></section>;}
