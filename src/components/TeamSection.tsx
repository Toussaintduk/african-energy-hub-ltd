import teamManzi from "@/assets/team-manzi.jpeg";
import teamMizero from "@/assets/team-mizero.jpeg";
import teamDamour from "@/assets/team-damour.jpeg";
import teamBimenyimana from "@/assets/team-bimenyimana.jpeg";
import teamDukundimana from "@/assets/team-dukundimana.jpg";
import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "MANZI Philibert",
    role: "Chief Executive Officer",
    img: teamManzi,
    email: "manzi.philbert@gmail.com",
    phone: "+250 788 644 271",
    bio: "Visionary leader driving African Energy Hub's growth and strategic partnerships across Rwanda's energy sector.",
    objectPosition: "center 20%",
  },
  {
    name: "MIZERO Theophile",
    role: "Managing Director",
    img: teamMizero,
    email: "Mizerotheophile@gmail.com",
    phone: "+250 788 608 320",
    bio: "Leads company operations and strategic direction, ensuring excellence in every project we deliver.",
    objectPosition: "center top",
    objectFit: "contain" as const,
  },
  {
    name: "Jean D'Amour BAPFAKURERA",
    role: "Chief Operational Manager",
    img: teamDamour,
    email: "damour015@gmail.com",
    phone: "+250 788 795 516",
    bio: "Oversees day-to-day operations and drives operational excellence across all business functions.",
    objectPosition: "center 15%",
  },
  {
    name: "Jean De Dieu BIMENYIMANA",
    role: "Electrical Site Supervisor",
    img: teamBimenyimana,
    email: "bimenyimanajeandedieu070@gmail.com",
    phone: "+250 788 936 847",
    bio: "Supervises on-site electrical installations ensuring safety, quality, and timely project delivery.",
    objectPosition: "center 15%",
  },
  {
    name: "DUKUNDIMANA Toussaint",
    role: "Project Control Engineer",
    img: teamDukundimana,
    email: "dukundesaint@gmail.com",
    phone: "+250 790 466 267",
    bio: "Plans, monitors and controls project schedules, costs and quality to ensure on-time, on-budget delivery.",
    objectPosition: "center 30%",
  },
];

const TeamSection = () => (
  <section id="team" className="py-24 bg-muted/50">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our People</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">Meet the Team</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Dedicated professionals committed to powering Rwanda's energy future.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {team.map(t => (
          <div key={t.name} className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                style={{ objectPosition: t.objectPosition, objectFit: (t as any).objectFit ?? "cover" }}
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-lg leading-tight">{t.name}</h3>
              <p className="text-primary text-sm font-semibold mt-1 mb-2">{t.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.bio}</p>
              <div className="space-y-2 pt-3 border-t border-border">
                <a href={`mailto:${t.email}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors break-all">
                  <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{t.email}</span>
                </a>
                <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{t.phone}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
