import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
export default function ProjectsSection(){return <section id="projects" className="section-space"><div className="container"><SectionHeading eyebrow="SELECTED WORK" title="Engineering in action."><Button variant="outline" asChild><Link to="/projects">All projects <ArrowUpRight/></Link></Button></SectionHeading><div className="grid md:grid-cols-3 gap-6 lg:gap-8">{[projects[4],projects[5],projects[2]].map(p=><ProjectCard key={p.slug} project={p}/>)}</div></div></section>;}
