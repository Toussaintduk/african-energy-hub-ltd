import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
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

const PhotoStrip = ({ op }: { op: SiteOperation }) => (
  <div
    className={`flex gap-2 overflow-x-auto p-3 bg-muted/40 sm:grid sm:gap-4 sm:overflow-visible sm:p-4 ${
      op.photos.length >= 5
        ? "sm:grid-cols-5"
        : op.photos.length === 4
          ? "sm:grid-cols-4"
          : "sm:grid-cols-3"
    }`}
  >
    {op.photos.map((p) => (
      <div
        key={p.src}
        className="w-[42%] shrink-0 sm:w-auto sm:shrink overflow-hidden rounded-lg"
      >
        <img
          src={p.src}
          alt={p.alt}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    ))}
  </div>
);

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
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated transition-shadow duration-300"
          >
            {op.photos.length === 1 ? (
              <div className="sm:grid sm:grid-cols-[minmax(0,340px)_1fr] sm:items-stretch">
                <div className="flex overflow-x-auto bg-muted/40 p-3 sm:p-0">
                  <div className="mx-auto w-[62%] overflow-hidden rounded-lg sm:relative sm:mx-0 sm:h-full sm:w-full sm:min-h-[260px] sm:rounded-none">
                    <img
                      src={op.photos[0].src}
                      alt={op.photos[0].alt}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105 sm:absolute sm:inset-0 sm:aspect-auto sm:h-full sm:w-full"
                    />
                  </div>
                </div>
                <Details op={op} />
              </div>
            ) : (
              <>
                <PhotoStrip op={op} />
                <Details op={op} />
              </>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SiteOperationsSection;
