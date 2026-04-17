import { Zap, Building2, Leaf, BarChart3, Globe, Users, Lightbulb, TreePine } from "lucide-react";
import sdgWheel from "@/assets/sdg-wheel.png";

const sdgs = [
  { num: 7, title: "Affordable & Clean Energy", desc: "Promoting reliable and sustainable energy solutions across Rwanda.", icon: Zap, color: "bg-secondary" },
  { num: 9, title: "Industry, Innovation & Infrastructure", desc: "Developing strong electrical infrastructure for industrial growth.", icon: Building2, color: "bg-primary" },
  { num: 11, title: "Sustainable Cities & Communities", desc: "Supporting safe and sustainable urban electrical systems.", icon: Globe, color: "bg-accent" },
];

const rwandaGoals = [
  { icon: Lightbulb, title: "Universal Electricity Access", desc: "Supporting Rwanda's goal of 100% electricity access through quality infrastructure deployment." },
  { icon: Leaf, title: "Renewable Energy Transition", desc: "Contributing to clean energy adoption with modern equipment and sustainable installation practices." },
  { icon: BarChart3, title: "Sustainable Economic Growth", desc: "Enabling industrial development through reliable power systems aligned with NST2 targets." },
  { icon: Users, title: "Youth Employment & Skills", desc: "Creating jobs and building a skilled workforce in Rwanda's growing energy sector." },
  { icon: TreePine, title: "Environmental Sustainability", desc: "Promoting energy-efficient solutions that reduce environmental impact and support green development." },
];

const SDGSection = () => (
  <section id="sdg" className="py-24 bg-background">
    <div className="container">
      {/* SDG Alignment */}
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Global Impact</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-primary-foreground">SDG Alignment</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Our work directly contributes to the United Nations Sustainable Development Goals.</p>
      </div>

      {/* SDG Wheel image */}
      <div className="flex justify-center mb-12">
        <img src={sdgWheel} alt="UN Sustainable Development Goals" width={200} height={200} loading="lazy" className="w-48 h-48 object-contain" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {sdgs.map(s => (
          <div key={s.num} className="relative bg-card backdrop-blur rounded-2xl p-8 border border-border overflow-hidden group hover:border-secondary/40 transition-all">
            <div className={`absolute top-0 right-0 w-20 h-20 ${s.color} opacity-10 rounded-bl-full`} />
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-secondary font-display font-bold text-sm">SDG {s.num}</span>
            <h3 className="font-display font-bold text-xl mt-1 mb-3 text-primary-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Rwanda Alignment */}
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">National Development</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-primary-foreground">Aligned with Rwanda Vision 2050 & NST2</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">We actively support Rwanda's national transformation strategy through reliable energy infrastructure.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {rwandaGoals.map(g => (
          <div key={g.title} className="flex gap-4 bg-card backdrop-blur rounded-xl p-6 border border-border hover:border-secondary/40 transition-all">
            <div className="w-10 h-10 shrink-0 bg-gradient-primary rounded-lg flex items-center justify-center">
              <g.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm mb-1 text-primary-foreground">{g.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SDGSection;
