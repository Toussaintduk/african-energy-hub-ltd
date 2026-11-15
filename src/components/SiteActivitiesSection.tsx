import PhotoGallery from "./PhotoGallery";
import { Zap, Cpu, BatteryCharging, Users, HardHat, Truck } from "lucide-react";
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

const SiteActivitiesSection = () => (
 <section id="activities" className="section-space"><div className="container space-y-12">{categories.map(cat=><section key={cat.title} className="border-t border-border pt-7"><div className="flex gap-4 mb-6"><cat.icon className="h-6 w-6 text-primary shrink-0"/><div><h2 className="text-2xl font-semibold">{cat.title}</h2><p className="text-muted-foreground text-sm mt-2 max-w-3xl">{cat.desc}</p></div></div><PhotoGallery photos={cat.photos} title={cat.title}/></section>)}</div></section>
);
export default SiteActivitiesSection;
