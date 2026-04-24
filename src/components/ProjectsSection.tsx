import { ClipboardList, ClipboardCheck, Loader2, MapPinned, MapPin } from "lucide-react";
import rwandaMap from "@/assets/rwanda-map.svg";

// Approximate positions (in % of the map container) for each district pin.
// Tuned visually to the uploaded Rwanda outline (5-province SVG).
const districts = [
  { name: "Nyagatare", top: "12%", left: "78%" },
  { name: "Kigali City", top: "48%", left: "62%", emphasize: true },
  { name: "Kamonyi", top: "52%", left: "48%" },
  { name: "Karongi", top: "55%", left: "22%" },
  { name: "Ngororero", top: "58%", left: "36%" },
  { name: "Bugesera", top: "66%", left: "58%" },
  { name: "Rusizi", top: "82%", left: "14%" },
  { name: "Huye", top: "82%", left: "40%" },
];

const stats = [
  { icon: ClipboardList, value: "26", label: "Total Projects" },
  { icon: ClipboardCheck, value: "12", label: "Completed Projects" },
  { icon: Loader2, value: "14", label: "Ongoing Projects" },
  { icon: MapPinned, value: "10", label: "Districts Covered" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Reach</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
          Key Projects
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Delivering electrical infrastructure projects across Rwanda.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-[4/3] bg-card rounded-2xl border border-border shadow-card p-4">
            <img
              src={rwandaMap}
              alt="Map of Rwanda showing districts where African Energy Hub has delivered projects"
              className="absolute inset-0 w-full h-full object-contain p-4"
              loading="lazy"
            />
            {districts.map((d) => (
              <div
                key={d.name}
                className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center group"
                style={{ top: d.top, left: d.left }}
              >
                <span className="text-[10px] md:text-xs font-display font-bold text-foreground bg-background/80 backdrop-blur px-1.5 py-0.5 rounded mb-0.5 whitespace-nowrap">
                  {d.name}
                </span>
                <MapPin
                  className={`${d.emphasize ? "h-7 w-7 md:h-9 md:w-9" : "h-5 w-5 md:h-6 md:w-6"} text-primary fill-primary drop-shadow-md transition-transform group-hover:scale-125`}
                  strokeWidth={2}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats list */}
        <ul className="space-y-5">
          {stats.map((s) => (
            <li key={s.label} className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-primary flex items-center justify-center shadow-card">
                <s.icon className={`h-6 w-6 text-primary-foreground ${s.icon === Loader2 ? "animate-spin-slow" : ""}`} />
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground leading-none">
                  <span className="text-secondary">{s.value}</span> <span className="text-base font-semibold text-muted-foreground">{s.label}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
