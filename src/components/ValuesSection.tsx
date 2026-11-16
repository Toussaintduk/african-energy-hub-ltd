import { Award, Lightbulb, ShieldCheck, Heart, Users } from "lucide-react";

const values = [
  { icon: Award, label: "Professionalism" },
  { icon: Lightbulb, label: "Innovation & Sustainability" },
  { icon: ShieldCheck, label: "Quality Assurance" },
  { icon: Heart, label: "Integrity & Transparency" },
  { icon: Users, label: "Customer-Centric Approach" },
];

const ValuesSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">What Drives Us</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {values.map(v => (
          <div key={v.label} className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-card hover:shadow-elevated transition-shadow">
            <v.icon className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
