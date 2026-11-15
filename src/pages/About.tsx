import NewsSection from '@/components/NewsSection';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import ValuesSection from '@/components/ValuesSection';
import SDGSection from '@/components/SDGSection';
import ContactSection from '@/components/ContactSection';
import { Target, Eye } from 'lucide-react';
export default function About(){return <><section className="page-top"><div className="container"><p className="eyebrow">ABOUT AFRICAN ENERGY HUB</p><h1>Powering Rwanda's<br/>energy future.</h1><p className="text-muted-foreground mt-5 max-w-2xl">A registered Rwandan company delivering electrical infrastructure for businesses, institutions and communities.</p></div></section><AboutSection/><section className="pb-14"><div className="container grid md:grid-cols-2 gap-10">{[{icon:Target,title:'Our mission',desc:'To supply high-quality electrical materials and provide professional installation services that ensure safety, efficiency, and reliability in electrical power systems.'},{icon:Eye,title:'Our vision',desc:'To become a leading provider of reliable electrical materials and installation services in Rwanda and across the East African region.'}].map(v=><div key={v.title} className="border-t border-border pt-6"><v.icon className="text-primary mb-4"/><h2 className="text-2xl font-semibold">{v.title}</h2><p className="text-muted-foreground mt-4 leading-relaxed">{v.desc}</p></div>)}</div></section><PartnersSection/><ValuesSection/><div id="sustainability"><SDGSection/></div><NewsSection/><ContactSection/></>;}
