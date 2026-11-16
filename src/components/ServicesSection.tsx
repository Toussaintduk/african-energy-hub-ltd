import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Package, Wrench, Settings, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import activityInstallation from "@/assets/activity-installation.jpg";
import activityMaintenance from "@/assets/activity-maintenance.jpg";
import activityTrading from "@/assets/activity-trading.jpg";

const services = [
  { icon: Package, num: "01", title: "Trading & Supply", desc: "Transformers (MV & HV), switchgear & protection equipment, cables & conductors for all your electrical infrastructure needs.", image: activityTrading },
  { icon: Wrench, num: "02", title: "Installation & Commissioning", desc: "Professional installation of transformers & substations, electrical wiring systems, and energy metering solutions.", image: activityInstallation },
  { icon: Settings, num: "03", title: "Maintenance Services", desc: "Preventive & corrective maintenance, spare parts supply, and ongoing technical support for your systems.", image: activityMaintenance },
];

const ServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => { api.off("select", update); };
  }, [api]);

  useEffect(() => {
    if (!api || !playing || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => api.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [api, playing, hovered, focused, reducedMotion, selected]);

  return (
  <section id="services" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">Our Services</h2>
      </div>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: reducedMotion ? 0 : 35 }}
        aria-label="Our services"
        className="max-w-xl mx-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      >
        <CarouselContent>
        {services.map(s => (
          <CarouselItem key={s.num} aria-label={`${s.num}: ${s.title}`}>
          <div className="group h-full bg-card backdrop-blur rounded-xl overflow-hidden border border-border hover:border-secondary/40 transition-all duration-300">
            <div className="h-[360px] sm:h-[480px] overflow-hidden bg-muted">
              <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-contain object-center" />
            </div>
            <div className="p-6 sm:p-8 min-h-[340px] sm:min-h-[320px]">
              <span className="text-5xl font-display font-bold text-secondary/15 block mb-4">{s.num}</span>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-6">
          <CarouselPrevious className="static translate-x-0 translate-y-0 h-10 w-10" title="Previous service" />
          <div className="flex gap-1">
            {services.map((s, i) => (
              <Button key={s.num} variant="ghost" size="icon" aria-label={`Show ${s.title}`} aria-pressed={selected === i} onClick={() => api?.scrollTo(i)}>
                <span className={`h-2 rounded-full transition-all ${selected === i ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"}`} />
              </Button>
            ))}
          </div>
          <CarouselNext className="static translate-x-0 translate-y-0 h-10 w-10" title="Next service" />
          {!reducedMotion && <Button variant="ghost" size="icon" aria-label={playing ? "Pause services slideshow" : "Play services slideshow"} title={playing ? "Pause slideshow" : "Play slideshow"} onClick={() => setPlaying(value => !value)}>{playing ? <Pause /> : <Play />}</Button>}
        </div>
      </Carousel>
    </div>
  </section>
  );
};

export default ServicesSection;
