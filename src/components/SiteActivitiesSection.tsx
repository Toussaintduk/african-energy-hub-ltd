import { Zap, Cpu, BatteryCharging } from "lucide-react";
import mvWorkers from "@/assets/site-mv-workers-action.jpg";
import mvSafety from "@/assets/site-mv-safety.jpg";
import mvRehab from "@/assets/site-mv-rehabilitation.jpg";
import mvCable from "@/assets/site-mv-cable-worker.jpg";
import swVplus from "@/assets/site-switchgear-vplus.jpg";
import swPanel from "@/assets/site-switchgear-panel.jpg";
import trInstall from "@/assets/site-transformer-install.jpg";
import evKabisa from "@/assets/site-ev-kabisa.jpg";
import evRoyal from "@/assets/site-ev-royal-kicukiro.jpg";

const categories = [
  {
    icon: Zap,
    title: "Medium Voltage Line Construction",
    desc: "Building and rehabilitating MV transmission and distribution lines across Rwanda with strict safety standards.",
    photos: [
      { src: mvWorkers, alt: "AEH technicians working on a medium voltage pole in Kigali" },
      { src: mvSafety, alt: "Workers on MV transmission line wearing full safety harness at KG 14 St" },
      { src: mvRehab, alt: "Medium voltage line rehabilitation by African Energy Hub team" },
      { src: mvCable, alt: "AEH worker handling MV cable accessories on site" },
    ],
  },
  {
    icon: Cpu,
    title: "Switchgear Installation & Testing",
    desc: "Supply, installation, commissioning and testing of LV/MV switchgear panels for industrial clients.",
    photos: [
      { src: swVplus, alt: "Switchgear installation at V Plus Packaging Material" },
      { src: swPanel, alt: "Completed switchgear panel and transformer room" },
      { src: trInstall, alt: "Distribution transformer installation by AEH crew" },
    ],
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation & Powering",
    desc: "Powering Rwanda's e-mobility transition through DC fast-charger installation and energization.",
    photos: [
      { src: evKabisa, alt: "EV charger powering at KABISA HQ" },
      { src: evRoyal, alt: "DC EV fast charger energized at Royal Kicukiro" },
    ],
  },
];

const SiteActivitiesSection = () => (
  <section id="activities" className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">In The Field</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
          On-Site Work Activities
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl mx-auto">
          A look at our crews delivering real energy infrastructure across Rwanda.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center shadow-card">
                <cat.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{cat.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base mt-1 max-w-3xl">{cat.desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {cat.photos.map((p) => (
                <div
                  key={p.src}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-card shadow-card hover:shadow-elevated transition-all"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-3">
                    <p className="text-[11px] md:text-xs text-foreground/90 font-medium leading-tight">{p.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SiteActivitiesSection;
