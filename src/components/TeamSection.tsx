import teamManzi from "@/assets/team-manzi.jpg";
import teamJean from "@/assets/team-jean.jpg";
import teamJado from "@/assets/team-jado.jpg";
import teamClaudia from "@/assets/team-claudia.jpg";
import { Linkedin, Mail } from "lucide-react";

const team = [
  { name: "Manzi", role: "Chief Executive Officer", img: teamManzi, bio: "Visionary leader driving African Energy Hub's growth and strategic partnerships across Rwanda's energy sector." },
  { name: "Jean D'Amour", role: "Marketing Manager", img: teamJean, bio: "Builds strong client relationships and leads business development initiatives to expand market reach." },
  { name: "Jado", role: "Site Manager", img: teamJado, bio: "Oversees all on-site installations ensuring safety, quality, and timely project delivery." },
  { name: "Claudia Alves", role: "Social Media Manager", img: teamClaudia, bio: "Manages brand communications and digital presence to amplify the company's impact story." },
];

const TeamSection = () => (
  <section id="team" className="py-24 bg-muted/50">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our People</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">Meet the Team</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Dedicated professionals committed to powering Rwanda's energy future.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {team.map(t => (
          <div key={t.name} className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-square overflow-hidden">
              <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-lg">{t.name}</h3>
              <p className="text-primary text-sm font-semibold mb-2">{t.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.bio}</p>
              <div className="flex gap-3 mt-4">
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
