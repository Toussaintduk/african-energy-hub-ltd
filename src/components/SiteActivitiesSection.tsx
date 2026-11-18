import { useEffect, useState } from "react";
import { Zap, Cpu, BatteryCharging, Users, HardHat, ArrowLeft, ArrowRight, Expand, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import siteVisitSinohydro from "@/assets/site-visit-sinohydro-reg.jpg";
import mvWorkers from "@/assets/site-mv-workers-action.jpg";
import mvSafety from "@/assets/site-mv-safety.jpg";
import mvRehab from "@/assets/site-mv-rehabilitation.jpg";
import mvCable from "@/assets/site-mv-cable-worker.jpg";
import swVplus from "@/assets/site-switchgear-vplus.jpg";
import swPanel from "@/assets/site-switchgear-panel.jpg";
import trInstall from "@/assets/site-transformer-install.jpg";
import evKabisa from "@/assets/site-ev-kabisa.jpg";
import evRoyal from "@/assets/site-ev-royal-kicukiro.jpg";
import kabisaSafety from "@/assets/site-kabisa-safety.jpg";
import kabisaTeam from "@/assets/site-kabisa-team.jpg";
import evKabisaEnergize from "@/assets/site-ev-kabisa-energize.jpg";
import pegging1 from "@/assets/site-pegging-gahanga-1.jpg";
import pegging2 from "@/assets/site-pegging-gahanga-2.jpg";
import woodenPoles from "@/assets/site-wooden-poles-gahanga.jpg";
import terminalKabisa from "@/assets/site-terminal-kabisa.jpg";
import transformerKabisa from "@/assets/site-transformer-kabisa.jpg";
import concretePoleTruck from "@/assets/site-concrete-pole-truck.jpg";
import kabisaCrewPole from "@/assets/site-kabisa-crew-pole.jpg";
import gahangaPeggingSinohydro from "@/assets/site-gahanga-pegging-sinohydro.jpg";

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
    icon: HardHat,
    title: "LV Network Upgrade — Gahanga (Rwinanka, Rwabutege, Sabaganga)",
    desc: "Pegging, pole supply and low-voltage network upgrade works delivered across Gahanga sites — Rwinanka, Rwabutege and Sabaganga — together with our partners.",
    photos: [
      { src: pegging1, alt: "Pegging activities for new poles at Gahanga Rwinanka site" },
      { src: pegging2, alt: "AEH surveyors marking pole positions at Gahanga Rwabutege site" },
      { src: gahangaPeggingSinohydro, alt: "Gahanga site pegging activities of poles with Sinohydro team at Sabaganga" },
      { src: woodenPoles, alt: "Incoming wooden poles delivered for Gahanga / Rwinanka LV upgrade project" },
      { src: concretePoleTruck, alt: "AEH crew installing a concrete pole using a truck-mounted crane at Gahanga Sabaganga" },
    ],
  },
  {
    icon: Cpu,
    title: "Switchgear & Transformer Installation & Testing",
    desc: "Supply, installation, commissioning and testing of LV/MV switchgear panels and distribution transformers for industrial clients.",
    photos: [
      { src: swVplus, alt: "Switchgear installation at V Plus Packaging Material" },
      { src: swPanel, alt: "Completed switchgear panel and transformer room" },
      { src: trInstall, alt: "Distribution transformer installation by AEH crew" },
      { src: transformerKabisa, alt: "Transformer installation on MV pole at Kabisa, Kacyiru" },
      { src: kabisaCrewPole, alt: "AEH crew terminating MV cables on transformer pole at Kabisa, Kacyiru" },
    ],
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation & Powering",
    desc: "Powering Rwanda's e-mobility transition through DC fast-charger installation and energization.",
    photos: [
      { src: evKabisa, alt: "EV charger powering at KABISA HQ" },
      { src: evRoyal, alt: "DC EV fast charger energized at Royal Kicukiro" },
      { src: evKabisaEnergize, alt: "AEH service truck on site at Kabisa Kacyiru ready to energize EV chargers" },
      { src: terminalKabisa, alt: "AEH workers forming MV cable terminals at Kabisa Kacyiru EV station" },
      { src: kabisaSafety, alt: "AEH workers on duty with safety as priority at Kabisa Kacyiru" },
      { src: kabisaTeam, alt: "AEH field team coordinating cable termination work at Kabisa Kacyiru" },
    ],
  },
  {
    icon: Users,
    title: "Site Visits & Project Coordination",
    desc: "Joint site inspections and coordination meetings with partners and utility stakeholders to ensure quality delivery.",
    photos: [
      { src: siteVisitSinohydro, alt: "Joint site visit with Sinohydro team, REG BM Kicukiro and African Energy Hub team" },
    ],
  },
];

const SiteActivitiesSection = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const [viewer, setViewer] = useState<{ category: number; photo: number } | null>(null);
  const activeCategory = viewer ? categories[viewer.category] : undefined;
  const activePhoto = viewer ? activeCategory?.photos[viewer.photo] : undefined;

  const movePhoto = (direction: number) => {
    setViewer(current => {
      if (!current) return null;
      const count = categories[current.category].photos.length;
      return { ...current, photo: (current.photo + direction + count) % count };
    });
  };

  useEffect(() => {
    if (!viewer) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      setViewer(current => {
        if (!current) return null;
        const count = categories[current.category].photos.length;
        return { ...current, photo: (current.photo + (event.key === "ArrowRight" ? 1 : -1) + count) % count };
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewer]);

  return (
  <section id="activities" className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-16 animate-fade-up">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">In The Field</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
          On-Site Work Activities
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl mx-auto">
          A look at our crews delivering real energy infrastructure across Rwanda.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2" aria-label="Activity categories">
        <Button variant={filter === null ? "default" : "outline"} aria-pressed={filter === null} onClick={() => setFilter(null)}><LayoutGrid /> All activities</Button>
        {categories.map((cat, idx) => (
          <Button key={cat.title} variant={filter === idx ? "default" : "outline"} aria-pressed={filter === idx} className="h-auto min-h-10 max-w-full whitespace-normal text-left" onClick={() => setFilter(idx)}><cat.icon />{["MV lines", "Gahanga LV network", "Switchgear & transformers", "EV charging", "Site visits"][idx]}</Button>
        ))}
      </div>
      <div className="space-y-16">
        {categories.map((cat, idx) => (filter === null || filter === idx) && (
          <div
            key={cat.title}
            className="animate-fade-up"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
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
              {cat.photos.map((p, photoIndex) => (
                <Button
                  key={p.src}
                  variant="ghost"
                  aria-label={`View photo: ${p.alt}`}
                  onClick={() => setViewer({ category: idx, photo: photoIndex })}
                  className="group relative block h-auto w-full aspect-[3/4] whitespace-normal overflow-hidden rounded-lg border border-border bg-card p-0 text-left shadow-card hover:shadow-elevated motion-safe:hover:-translate-y-1 transition-all duration-500"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center motion-safe:group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Permanent gradient for legibility */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-energy-dark/95 via-energy-dark/40 to-transparent" />
                  {/* Accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-secondary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                  <span className="absolute top-3 right-3 rounded-md bg-secondary/80 p-2 text-secondary-foreground"><Expand className="h-4 w-4" /></span>
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block text-sm md:text-base font-semibold text-primary-foreground leading-snug drop-shadow-lg">
                      {p.alt}
                    </span>
                  </span>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Dialog open={viewer !== null} onOpenChange={open => { if (!open) setViewer(null); }}>
      <DialogContent className="w-[calc(100%-24px)] max-w-5xl rounded-lg p-4 sm:p-6">
        <DialogTitle className="pr-8 text-left leading-snug">{activeCategory?.title}</DialogTitle>
        <div className="flex h-[min(60vh,680px)] items-center justify-center overflow-hidden rounded-md bg-muted">
          {activePhoto && <img src={activePhoto.src} alt={activePhoto.alt} className="h-full w-full object-contain" />}
        </div>
        <DialogDescription className="text-left" aria-live="polite">{activePhoto?.alt}</DialogDescription>
        {activeCategory && activeCategory.photos.length > 1 && (
          <div className="flex items-center justify-between">
            <Button variant="outline" size="icon" aria-label="Previous activity photo" onClick={() => movePhoto(-1)}><ArrowLeft /></Button>
            <span className="text-sm text-muted-foreground" aria-live="polite">{(viewer?.photo ?? 0) + 1} / {activeCategory.photos.length}</span>
            <Button variant="outline" size="icon" aria-label="Next activity photo" onClick={() => movePhoto(1)}><ArrowRight /></Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  </section>
);
};

export default SiteActivitiesSection;
