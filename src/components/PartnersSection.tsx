import rura from "@/assets/partner-rura.png";
import ier from "@/assets/partner-ier.png";
import regEucl from "@/assets/partner-reg-eucl.png";
import kabisa from "@/assets/partner-kabisa.webp";
import ritco from "@/assets/partner-ritco.png";
import solidAfrica from "@/assets/partner-solid-africa.png";
import volkswagen from "@/assets/partner-volkswagen.png";
import gorillaFeeds from "@/assets/partner-gorilla-feeds.png";
import vplus from "@/assets/partner-vplus.png";
import avocadoOil from "@/assets/partner-avocado-oil.png";
import spiro from "@/assets/partner-spiro.png";
import sinohydro from "@/assets/partner-sinohydro.png";

const certifications = [
  { src: rura, alt: "Rwanda Utilities Regulatory Authority (RURA)" },
  { src: ier, alt: "Institute of Engineering Rwanda (IER)" },
];

const clients = [
  { src: regEucl, alt: "REG / EUCL" },
  { src: kabisa, alt: "Kabisa" },
  { src: ritco, alt: "Ritco" },
  { src: solidAfrica, alt: "Solid Africa" },
  { src: volkswagen, alt: "Volkswagen Rwanda" },
  { src: gorillaFeeds, alt: "Gorilla Feed" },
  { src: vplus, alt: "V Plus Packaging Industries" },
  { src: avocadoOil, alt: "Avocado Oil Industries" },
  { src: spiro, alt: "SpirO" },
  { src: sinohydro, alt: "Sinohydro" },
];

const PartnersSection = () => (
 <section id="partners" className="py-9 border-y border-border bg-background"><div className="container"><div className="grid lg:grid-cols-[240px_1fr] gap-8"><div className="lg:border-r border-border lg:pr-6"><p className="text-xs font-semibold text-muted-foreground mb-4">CERTIFICATIONS & PROFESSIONAL REGISTRATION</p><div className="flex gap-4">{certifications.map(c=><div key={c.alt} className="h-16 w-24 flex items-center justify-center"><img src={c.src} alt={c.alt} loading="lazy" className="max-h-14 max-w-full object-contain"/></div>)}</div><p className="text-xs text-muted-foreground mt-2">RURA Category C · IER professionals</p></div><div><h2 className="text-xs font-semibold text-muted-foreground mb-5">TRUSTED BY LEADING ORGANIZATIONS</h2><div className="grid grid-cols-3 sm:grid-cols-5 gap-x-5 gap-y-4">{clients.map(c=><div key={c.alt} title={c.alt} className="h-12 flex items-center justify-center transition-opacity hover:opacity-70"><img src={c.src} alt={c.alt} loading="lazy" className="max-h-10 max-w-full object-contain"/></div>)}</div></div></div></div></section>
);
export default PartnersSection;
