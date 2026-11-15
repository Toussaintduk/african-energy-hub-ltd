import spiroStation from "@/assets/site-spiro-station.jpg";
import spiroDistribution from "@/assets/site-spiro-distribution.jpg";
import spiroMvLine from "@/assets/site-spiro-mv-line.jpg";
import kabisaSign from "@/assets/site-kabisa-sign.jpg";
import kabisaCharger from "@/assets/site-kabisa-charger.jpg";
import kabisaWiring from "@/assets/site-kabisa-wiring.jpg";
import kabisaDepot from "@/assets/site-kabisa-depot.jpg";
import kabisaCanopy from "@/assets/site-kabisa-canopy.jpg";
import masakaCable from "@/assets/site-masaka-cable.jpg";
import masakaPole from "@/assets/site-masaka-pole.jpg";
import masakaCrane from "@/assets/site-masaka-crane.jpg";
import masakaHardware from "@/assets/site-masaka-hardware.jpg";
import alphatntFieldVisit from "@/assets/site-alphatnt-field-visit.jpg";
import inkundamahoroWork from "@/assets/site-inkundamahoro-work.jpg";
import inkundamahoroCrew from "@/assets/site-inkundamahoro-crew.jpg";
import inkundamahoroStation from "@/assets/site-inkundamahoro-station.jpg";
import crbcQuarryTeam from "@/assets/site-crbc-quarry-team.jpg";
import crbcQuarryVisit from "@/assets/site-crbc-quarry-visit.jpg";
import crbcMvPole from "@/assets/site-crbc-mv-pole.jpg";
import crbcLineStringing from "@/assets/site-crbc-line-stringing.jpg";
import crbcCrossarm from "@/assets/site-crbc-crossarm.jpg";

type SiteOperation = { client: string; caption: string; desc: string; period?: string; photos: {src: string; alt: string}[]; };

const operations: SiteOperation[] = [
  {
    client: "Spiro Mega Stations",
    caption: "Powering Rwanda's Electric Mobility Future",
    desc: "Medium-voltage power connections and transformer installations supporting Spiro's EV charging network at MEREZ 2 in Gikondo, Nyamirambo, and Kinamba, helping provide reliable power for electric vehicle charging and supporting Rwanda's transition to cleaner transportation.",
    period: "July – August 2026",
    photos: [
      {
        src: spiroStation,
        alt: "SpirO Mega Station battery-swapping bay in Kigali running on power supplied by African Energy Hub Ltd",
      },
      {
        src: spiroDistribution,
        alt: "MV distribution pillars and cable terminations installed by AEH at a SpirO Mega Station",
      },
      {
        src: spiroMvLine,
        alt: "AEH technicians working on the medium-voltage line and transformer feeding a SpirO Mega Station",
      },
    ],
  },
  {
    client: "KABISA EV Charging",
    caption: "Powering KABISA's Electric Mobility Network",
    desc: "Electrical infrastructure supporting KABISA's EV charging network in Rwanda, including transformer installation at the Kacyiru station and EV charging stations at Rwandex and Kayonza, helping strengthen reliable power supply for electric vehicle charging and supporting Rwanda's transition to cleaner transportation.",
    period: "June – September 2026",
    photos: [
      {
        src: kabisaSign,
        alt: "KABISA free EV charging point in Kigali with African Energy Hub Ltd technicians on site",
      },
      {
        src: kabisaCharger,
        alt: "KABISA DC fast EV charger commissioned with power supplied by African Energy Hub Ltd",
      },
      {
        src: kabisaWiring,
        alt: "African Energy Hub Ltd technician wiring the inside of a KABISA EV charger",
      },
      {
        src: kabisaDepot,
        alt: "Row of KABISA EV chargers installed at a multi-bay charging depot in Kigali",
      },
      {
        src: kabisaCanopy,
        alt: "KABISA EV charger under a yellow canopy powered by African Energy Hub Ltd",
      },
    ],
  },
  {
    client: "Masaka – Bugesera Airport Road",
    caption: "Relocating LV & MV Lines for the Masaka–Bugesera Airport Road",
    desc: "African Energy Hub Ltd is relocating low-voltage (LV) and medium-voltage (MV) electrical infrastructure for the road from Masaka to the New Bugesera International Airport, up to Gahembe–Kindama. The project spans Kicukiro and Bugesera and is currently ongoing.",
    period: "Since August 2026",
    photos: [
      {
        src: masakaCable,
        alt: "African Energy Hub Ltd technicians terminating a medium-voltage cable during the Masaka to Bugesera airport road line relocation",
      },
      {
        src: masakaPole,
        alt: "AEH linemen in harnesses connecting MV jumper cables to a distribution transformer on a pole structure",
      },
      {
        src: masakaCrane,
        alt: "Crane lifting and erecting utility poles beside transformers on concrete plinths at a Bugesera relocation site",
      },
      {
        src: masakaHardware,
        alt: "AEH technicians checking pole-line hardware and cable coils at the Masaka – Bugesera project laydown yard",
      },
    ],
  },
  {
    client: "Le Printemps – Zindiro MV Line",
    caption: "Field Visit to the MV Overhead Line Rehabilitation in Gasabo District",
    desc: "African Energy Hub Ltd conducted a field visit to the ongoing rehabilitation of the Medium Voltage (MV) Overhead Line along the Le Printemps–Zindiro section in Gasabo District, Kigali City. The visit was attended by Mr. MANZI Philibert, Chief Executive Officer, and Mr. Jean D'Amour BAPFAKURERA, Chief Operations Officer of African Energy Hub Ltd, alongside representatives from Alpha TNT. The visit aimed to follow up on the progress of installation and commissioning works and strengthen coordination among the teams involved in delivering reliable electricity distribution infrastructure in Rwanda.",
    period: "October 2026",
    photos: [
      {
        src: alphatntFieldVisit,
        alt: "African Energy Hub Ltd and Alpha TNT teams on site during the field visit to the Le Printemps–Zindiro MV overhead line rehabilitation in Gasabo District",
      },
    ],
  },
  {
    client: "EV Charging Infrastructure – Inkundamahoro Site",
    caption: "Supply and Installation of EV Charging Infrastructure",
    desc: "In collaboration with Eco-Chargelink Ltd, African Energy Hub Ltd completed the installation of electric vehicle (EV) charging infrastructure at the Inkundamahoro site. The project involved the supply and installation of a 400 kVA transformer and two 120 kW EV charging stations. This initiative supports the expansion of Rwanda's EV charging network and reinforces our commitment to accelerating sustainable electric mobility across the country.",
    period: "October 2026",
    photos: [
      {
        src: inkundamahoroWork,
        alt: "African Energy Hub Ltd technician in a high-visibility vest terminating the DC charger controller and protection devices inside an open EV charger cabinet at the Inkundamahoro site",
      },
      {
        src: inkundamahoroCrew,
        alt: "Two African Energy Hub Ltd technicians wiring open EV charging cabinets and grounding cables at the Inkundamahoro site",
      },
      {
        src: inkundamahoroStation,
        alt: "Completed EV charging station at the Inkundamahoro site with DC fast chargers under a canopy and electric vehicles charging",
      },
    ],
  },
  {
    client: "Bugesera CRBC Quarry Project",
    caption: "Powering Industrial Operations in Bugesera",
    desc: "Progressing the power supply connection to the Bugesera CRBC Quarry through the supply and installation of medium-voltage (MV) line, including 1,000 kVA and 630 kVA transformers and approximately 2 km of MV line. During a site visit in October, African Energy Hub CEO, Philbert Manzi, inspected the ongoing works and expressed his excitement at the team's impressive pace of execution and progress, reflecting the team's commitment to delivering reliable Energy infrastructure to support industrial operations in Bugesera, Rwanda.",
    period: "October 2026",
    photos: [
      {
        src: crbcMvPole,
        alt: "African Energy Hub Ltd technicians fitting crossarms and insulators on a new medium-voltage pole beside a transmission line at the Bugesera CRBC Quarry project",
      },
      {
        src: crbcLineStringing,
        alt: "AEH linemen in harnesses stringing medium-voltage conductors on a steel pole for the Bugesera CRBC Quarry power supply connection",
      },
      {
        src: crbcCrossarm,
        alt: "Close-up of African Energy Hub Ltd technicians working on a medium-voltage line crossarm at the Bugesera CRBC Quarry site",
      },
      {
        src: crbcQuarryTeam,
        alt: "African Energy Hub Ltd team in high-visibility vests at the Bugesera CRBC Quarry site with project vehicles",
      },
      {
        src: crbcQuarryVisit,
        alt: "African Energy Hub Ltd supervisors on site during the October inspection of the Bugesera CRBC Quarry MV line works",
      },
    ],
  },
];


const metadata = [{"slug": "spiro-mega-stations", "category": "EV Charging", "location": "Kigali", "scope": ["MV power connections", "Transformer installation"], "specifications": ["MEREZ 2, Gikondo: 400 kVA", "Nyamirambo: 2 \u00d7 400 kVA", "Kinamba: 630 kVA"]}, {"slug": "kabisa-ev-charging", "category": "EV Charging", "location": "Kacyiru, Rwandex & Kayonza", "scope": ["Transformer installation", "EV charging stations"], "specifications": ["Kacyiru transformer: 400 kVA"]}, {"slug": "masaka-bugesera-airport-road", "category": "Power Distribution", "location": "Kicukiro & Bugesera", "scope": ["LV infrastructure relocation", "MV infrastructure relocation"], "specifications": []}, {"slug": "le-printemps-zindiro", "category": "Power Distribution", "location": "Gasabo District, Kigali", "scope": ["MV overhead line rehabilitation follow-up", "Installation and commissioning coordination"], "specifications": []}, {"slug": "inkundamahoro-ev-charging", "category": "EV Charging", "location": "Inkundamahoro", "scope": ["Transformer supply and installation", "EV charger supply and installation"], "specifications": ["Transformer: 400 kVA", "2 \u00d7 120 kW EV charging stations"]}, {"slug": "bugesera-crbc-quarry", "category": "Industrial Infrastructure", "location": "Bugesera", "scope": ["MV line supply and installation", "Transformer installation"], "specifications": ["1,000 kVA and 630 kVA transformers", "Approximately 2 km of MV line"]}];
export const projects = operations.map((op, i) => ({ ...op, ...metadata[i] }));
export type Project = (typeof projects)[number];
export const projectCategories = ["All Projects", "EV Charging", "Power Distribution", "Industrial Infrastructure"] as const;
export const filterProjects = (category: string, query = "") => projects.filter(p => (category === "All Projects" || p.category === category) && `${p.client} ${p.location} ${p.desc}`.toLowerCase().includes(query.toLowerCase().trim()));
