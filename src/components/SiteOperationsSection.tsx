import { motion } from "framer-motion";
import { CalendarDays, MapPin, Zap } from "lucide-react";
import spiroStation from "@/assets/site-spiro-station.jpg";
import spiroDistribution from "@/assets/site-spiro-distribution.jpg";
import spiroMvLine from "@/assets/site-spiro-mv-line.jpg";

type SiteOperation = {
  num: string;
  client: string;
  caption: string;
  desc: string;
  period: string;
  scope: string[];
  sites: { name: string; detail: string }[];
  photos: { src: string; alt: string }[];
};

const operations: SiteOperation[] = [
  {
    num: "01",
    client: "Spiro Mega Stations",
    caption: "Powering Spiro Mega Stations across Kigali",
    desc: "African Energy Hub Ltd built the medium-voltage lines and installed the transformers that supply SpirO Mega Stations in Kigali. The stations are at Rwandex (500kVA), MEREZ 2 in Gikondo (400kVA), Nyamirambo (two 400kVA) and Kinamba (630kVA). Each site now has a reliable, correctly sized power supply for daily operations.",
    period: "July – August 2026",
    scope: [
      "Medium-voltage line construction",
      "Transformer supply & installation",
      "Site energization & commissioning",
    ],
    sites: [
      { name: "Rwandex", detail: "500 kVA" },
      { name: "MEREZ 2, Gikondo", detail: "400 kVA" },
      { name: "Nyamirambo", detail: "2 × 400 kVA" },
      { name: "Kinamba", detail: "630 kVA" },
    ],
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
];

const SiteOperationsSection = () => (
  <section id="operations" className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-14">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
          Site Operations
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
          Operations We Run On Site
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Medium-voltage lines, transformer installation and energization — delivered end
          to end for clients across Rwanda.
        </p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {operations.map((op, idx) => (
          <motion.article
            key={op.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
            className="overflow-hidden rounded-2xl border border-border bg-energy-dark shadow-elevated"
          >
            <div className="grid lg:grid-cols-2">
              {/* Photo collage */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 md:p-6 lg:p-8">
                <div className="col-span-2 overflow-hidden rounded-xl">
                  <img
                    src={op.photos[0].src}
                    alt={op.photos[0].alt}
                    loading="lazy"
                    className="h-[280px] sm:h-[380px] lg:h-[460px] w-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {op.photos.slice(1).map((p) => (
                  <div key={p.src} className="overflow-hidden rounded-xl">
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      className="h-[130px] sm:h-[180px] lg:h-[220px] w-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <span className="text-5xl md:text-6xl font-display font-bold leading-none text-gradient-primary">
                    {op.num}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {op.period}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                  {op.client}
                </h3>
                <p className="text-gradient-primary font-display font-semibold mt-1 md:text-lg">
                  {op.caption}
                </p>
                <p className="text-primary-foreground/75 leading-relaxed mt-4 text-sm md:text-base">
                  {op.desc}
                </p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                  {op.sites.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-primary-foreground">
                        <MapPin className="h-4 w-4 shrink-0 text-primary-foreground/60" />
                        {s.name}
                      </span>
                      <span className="text-xs font-bold text-primary-foreground whitespace-nowrap">
                        {s.detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {op.scope.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-primary-foreground/80"
                    >
                      <Zap className="h-3 w-3 text-primary-foreground/60" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SiteOperationsSection;
