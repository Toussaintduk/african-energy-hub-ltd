import rwandaMap from "@/assets/rwanda-map.svg";

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Reach</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
          Our Geographic Footprint
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Delivering electrical infrastructure projects across all provinces of Rwanda.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-card backdrop-blur rounded-2xl p-6 md:p-10 border border-border shadow-card">
        <img
          src={rwandaMap}
          alt="Map of Rwanda showing project coverage across all provinces"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default ProjectsSection;
