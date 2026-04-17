import { Zap, Building2, BarChart3, Leaf } from "lucide-react";

const impacts = [
  { icon: Zap, label: "Universal access to electricity" },
  { icon: Leaf, label: "Renewable energy transition" },
  { icon: BarChart3, label: "Sustainable economic growth" },
  { icon: Building2, label: "Employment & skill development" },
];

const ImpactSection = () => (
  <section id="impact" className="py-24 bg-background text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(210 90% 45%), transparent 60%)" }} />
    <div className="container relative z-10">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">Contributing to National Development</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Supporting Rwanda Vision 2050, SDGs 7, 9 & 11, and sustainable development across East Africa.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map(i => (
          <div key={i.label} className="text-center p-6 rounded-xl border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <i.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="font-medium text-sm text-foreground">{i.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
