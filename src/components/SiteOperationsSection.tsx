import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
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

type SiteOperation = {
  client: string;
  caption: string;
  desc: string;
  period?: string;
  photos: { src: string; alt: string }[];
};

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

const Details = ({ op }: { op: SiteOperation }) => (
  <div className="p-5 md:p-8">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
        {op.client}
      </h3>
      {op.period && (
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-3 py-1 text-xs font-semibold text-primary-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          {op.period}
        </span>
      )}
    </div>
    <p className="text-gradient-primary font-display font-semibold mt-1 md:text-lg">
      {op.caption}
    </p>
    <p className="text-muted-foreground leading-relaxed mt-4 text-sm md:text-base max-w-3xl">
      {op.desc}
    </p>
  </div>
);

const PhotoShow = ({ op }: { op: SiteOperation }) => {
  const total = op.photos.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (dir: number) => setIndex((p) => (p + dir + total) % total);

  useEffect(() => {
    if (total < 2 || paused) return;
    const timer = setInterval(() => setIndex((p) => (p + 1) % total), 4500);
    return () => clearInterval(timer);
  }, [total, paused, index]);

  return (
    <div
      className="relative h-[300px] overflow-hidden bg-muted/40 sm:h-auto sm:min-h-[300px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="absolute inset-0 flex cursor-grab active:cursor-grabbing"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        drag={total > 1 ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.06}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60) go(1);
          else if (info.offset.x > 60) go(-1);
        }}
      >
        {op.photos.map((p) => (
          <img
            key={p.src}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className="h-full w-full shrink-0 object-cover object-center"
          />
        ))}
      </motion.div>

      {total > 1 && (
        <>
          <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-energy-dark/60 px-2 py-0.5 text-[11px] font-semibold text-primary-foreground backdrop-blur-sm">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-energy-dark/60 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-energy-dark/85"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-energy-dark/60 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-energy-dark/85"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {op.photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                aria-label={`Show photo ${i + 1} of ${total}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-primary-foreground/70 hover:bg-primary-foreground"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const SiteOperationsSection = () => (
  <section id="operations" className="py-24 bg-background scroll-mt-24">
    <div className="container">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Recent Work
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
          Project Updates
        </h2>
      </div>

      <div className="space-y-10 max-w-6xl mx-auto">
        {operations.map((op, idx) => (
          <motion.article
            key={op.client}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated transition-shadow duration-300 sm:grid sm:grid-cols-[minmax(0,360px)_1fr] sm:items-stretch"
          >
            <PhotoShow op={op} />
            <Details op={op} />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SiteOperationsSection;
