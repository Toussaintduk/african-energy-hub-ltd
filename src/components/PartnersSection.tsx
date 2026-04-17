import rura from "@/assets/partner-rura.png";
import ier from "@/assets/partner-ier.png";
import regEucl from "@/assets/partner-reg-eucl.png";
import kabisa from "@/assets/partner-kabisa.webp";
import ritco from "@/assets/partner-ritco.png";
import solidAfrica from "@/assets/partner-solid-africa.png";
import volkswagen from "@/assets/partner-volkswagen.png";
import gorillaFeeds from "@/assets/partner-gorilla-feeds.png";
import vplus from "@/assets/partner-vplus.png";

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
];

const PartnersSection = () => (
  <section id="partners" className="py-24 bg-muted/30 border-y border-border">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Credentials & Clients</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Certified & Trusted</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Officially licensed and proudly serving Rwanda's most established organizations.
        </p>
      </div>

      <div className="mb-14">
        <h3 className="text-center font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-6">Our Certifications</h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {certifications.map((c) => (
            <img key={c.alt} src={c.src} alt={c.alt} loading="lazy" className="h-20 md:h-24 w-auto object-contain grayscale-0 hover:scale-105 transition-transform" />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-center font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-6">Trusted by Leading Organizations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {clients.map((c) => (
            <div key={c.alt} className="flex items-center justify-center bg-card rounded-lg p-4 h-24 shadow-card border border-border hover:shadow-elevated transition-shadow">
              <img src={c.src} alt={c.alt} loading="lazy" className="max-h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
