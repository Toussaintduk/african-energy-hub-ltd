import { Package, Wrench, Settings } from "lucide-react";

const services = [
  { icon: Package, num: "01", title: "Trading & Supply", desc: "Transformers (MV & HV), switchgear & protection equipment, cables & conductors for all your electrical infrastructure needs." },
  { icon: Wrench, num: "02", title: "Installation & Commissioning", desc: "Professional installation of transformers & substations, electrical wiring systems, and energy metering solutions." },
  { icon: Settings, num: "03", title: "Maintenance Services", desc: "Preventive & corrective maintenance, spare parts supply, and ongoing technical support for your systems." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-muted/50">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">Our Services</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(s => (
          <div key={s.num} className="group bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <span className="text-5xl font-display font-bold text-primary/10 block mb-4">{s.num}</span>
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-5">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
