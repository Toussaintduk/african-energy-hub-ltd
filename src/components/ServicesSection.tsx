import { Package, Wrench, Settings } from "lucide-react";
import activityInstallation from "@/assets/activity-installation.jpg";
import activityMaintenance from "@/assets/activity-maintenance.jpg";
import activityTrading from "@/assets/activity-trading.jpg";

const services = [
  { icon: Package, num: "01", title: "Trading & Supply", desc: "Transformers (MV & HV), switchgear & protection equipment, cables & conductors for all your electrical infrastructure needs.", image: activityTrading },
  { icon: Wrench, num: "02", title: "Installation & Commissioning", desc: "Professional installation of transformers & substations, electrical wiring systems, and energy metering solutions.", image: activityInstallation },
  { icon: Settings, num: "03", title: "Maintenance Services", desc: "Preventive & corrective maintenance, spare parts supply, and ongoing technical support for your systems.", image: activityMaintenance },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">Our Services</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(s => (
          <div key={s.num} className="group bg-card backdrop-blur rounded-xl overflow-hidden border border-border hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
            <div className="h-64 md:h-72 overflow-hidden bg-muted">
              <img src={s.image} alt={s.title} width={1280} height={720} loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <span className="text-5xl font-display font-bold text-secondary/15 block mb-4">{s.num}</span>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
