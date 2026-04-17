import { CheckCircle, Clock, MapPin, FolderOpen } from "lucide-react";

const stats = [
  { icon: FolderOpen, value: "26", label: "Total Projects" },
  { icon: CheckCircle, value: "12", label: "Completed Projects" },
  { icon: Clock, value: "14", label: "Ongoing Projects" },
  { icon: MapPin, value: "10", label: "Districts Covered" },
];

const projects = [
  { name: "Nyagatare Substation Installation", location: "Nyagatare", status: "completed" as const },
  { name: "Kigali City Commercial Wiring", location: "Kigali City", status: "completed" as const },
  { name: "Kamonyi Transformer Supply", location: "Kamonyi", status: "completed" as const },
  { name: "Karongi Energy Metering", location: "Karongi", status: "completed" as const },
  { name: "Ngororero Distribution Network", location: "Ngororero", status: "completed" as const },
  { name: "Bugesera Industrial Installation", location: "Bugesera", status: "completed" as const },
  { name: "Rusizi HV Transformer Project", location: "Rusizi", status: "ongoing" as const },
  { name: "Huye Electrical Infrastructure", location: "Huye", status: "ongoing" as const },
  { name: "Kigali Smart Metering Rollout", location: "Kigali City", status: "ongoing" as const },
];

const milestones = [
  { year: "2021", title: "Company Founded", desc: "African Energy Hub Ltd registered in Rwanda as an electrical materials company." },
  { year: "2023", title: "First Major Contract", desc: "Secured partnerships with government institutions and private organizations." },
  { year: "2025", title: "26 Projects Milestone", desc: "Reached 26 total projects across 10 districts in Rwanda with 12 completed." },
  { year: "2026", title: "Regional Expansion", desc: "Expanding operations across the East African region with new partnerships." },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Track Record</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-primary-foreground">Key Projects & Milestones</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map(s => (
          <div key={s.label} className="bg-card backdrop-blur rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-3xl font-display font-bold text-secondary">{s.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Milestones Timeline */}
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-display font-bold text-center mb-10 text-primary-foreground">Milestones</h3>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:-translate-x-px" />
          {milestones.map((m, i) => (
            <div key={m.year} className={`relative flex items-start mb-10 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-10 text-right" : "pl-10 text-left"}`}>
                <div className="bg-card backdrop-blur rounded-xl p-5 border border-border inline-block text-left">
                  <h4 className="font-display font-bold text-lg text-primary-foreground">{m.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                <span className="text-primary-foreground text-xs font-bold">{m.year.slice(2)}</span>
              </div>
              <div className="ml-14 md:hidden">
                <div className="bg-card backdrop-blur rounded-xl p-5 border border-border">
                  <span className="text-secondary font-semibold text-sm">{m.year}</span>
                  <h4 className="font-display font-bold text-lg text-primary-foreground">{m.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
                </div>
              </div>
              <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pl-10" : "pr-10"}`}>
                <span className="text-secondary font-display font-bold text-xl">{m.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project List */}
      <h3 className="text-2xl font-display font-bold text-center mb-8 text-primary-foreground">Project Portfolio</h3>
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {projects.map(p => (
          <div key={p.name} className="bg-card backdrop-blur rounded-xl p-5 border border-border hover:border-secondary/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                <MapPin className="h-3 w-3" /> {p.location}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${p.status === "completed" ? "bg-accent/20 text-accent" : "bg-secondary/30 text-secondary"}`}>
                {p.status === "completed" ? "Completed" : "Ongoing"}
              </span>
            </div>
            <h4 className="font-display font-semibold text-sm text-primary-foreground">{p.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
