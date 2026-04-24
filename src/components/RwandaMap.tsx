import { useState } from "react";
import { MapPin } from "lucide-react";

type District = {
  id: string;
  name: string;
  // Percentage coordinates inside the SVG viewBox
  x: number;
  y: number;
  projects: number;
  status: "completed" | "ongoing" | "mixed";
};

// Approximate relative positions inside the simplified Rwanda outline
const districts: District[] = [
  { id: "nyagatare", name: "Nyagatare", x: 78, y: 18, projects: 3, status: "completed" },
  { id: "kigali", name: "Kigali City", x: 60, y: 48, projects: 6, status: "mixed" },
  { id: "kamonyi", name: "Kamonyi", x: 48, y: 52, projects: 2, status: "completed" },
  { id: "bugesera", name: "Bugesera", x: 60, y: 65, projects: 2, status: "completed" },
  { id: "ngororero", name: "Ngororero", x: 33, y: 55, projects: 2, status: "completed" },
  { id: "karongi", name: "Karongi", x: 22, y: 50, projects: 2, status: "completed" },
  { id: "rusizi", name: "Rusizi", x: 10, y: 75, projects: 3, status: "ongoing" },
  { id: "huye", name: "Huye", x: 40, y: 78, projects: 3, status: "ongoing" },
  { id: "musanze", name: "Musanze", x: 40, y: 22, projects: 1, status: "ongoing" },
  { id: "rubavu", name: "Rubavu", x: 18, y: 30, projects: 2, status: "ongoing" },
];

const statusColor = (s: District["status"]) =>
  s === "completed" ? "hsl(var(--accent))" : s === "ongoing" ? "hsl(var(--secondary))" : "hsl(var(--primary))";

const RwandaMap = () => {
  const [active, setActive] = useState<District | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-[4/3] bg-card rounded-2xl border border-border p-4 md:p-8 overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
          aria-label="Map of Rwanda showing African Energy Hub project districts"
        >
          {/* Simplified Rwanda outline (approximate) */}
          <path
            d="M8,40 L15,25 L25,18 L38,15 L50,12 L65,12 L78,15 L88,22 L92,35 L90,50 L88,62 L82,75 L72,85 L58,90 L42,88 L28,82 L18,72 L10,58 Z"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            className="transition-colors"
          />
          {/* Internal district lines (decorative) */}
          <g stroke="hsl(var(--border))" strokeWidth="0.3" fill="none" opacity="0.6">
            <path d="M50,12 L52,55 L42,88" />
            <path d="M15,25 L50,55 L88,22" />
            <path d="M10,58 L52,55 L92,35" />
          </g>

          {/* District pins */}
          {districts.map((d) => {
            const isActive = active?.id === d.id;
            return (
              <g
                key={d.id}
                transform={`translate(${d.x}, ${d.y})`}
                onMouseEnter={() => setActive(d)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : d)}
                className="cursor-pointer"
              >
                {/* pulse */}
                <circle r="3" fill={statusColor(d.status)} opacity="0.25">
                  <animate attributeName="r" values="2;5;2" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle
                  r={isActive ? 2.6 : 1.8}
                  fill={statusColor(d.status)}
                  stroke="hsl(var(--background))"
                  strokeWidth="0.5"
                  className="transition-all"
                />
                <text
                  y={-3.5}
                  textAnchor="middle"
                  fontSize="2.6"
                  fontWeight="600"
                  fill="hsl(var(--foreground))"
                  className="pointer-events-none select-none"
                  style={{ paintOrder: "stroke", stroke: "hsl(var(--background))", strokeWidth: 0.6 }}
                >
                  {d.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 bg-background/80 backdrop-blur rounded-lg border border-border px-3 py-2 text-xs space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--accent))" }} />
            <span className="text-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--secondary))" }} />
            <span className="text-foreground">Ongoing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--primary))" }} />
            <span className="text-foreground">Mixed</span>
          </div>
        </div>

        {/* Active district detail */}
        {active && (
          <div className="absolute top-3 right-3 md:top-5 md:right-5 bg-background/90 backdrop-blur rounded-lg border border-secondary/50 px-4 py-3 shadow-elevated max-w-[60%]">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="h-4 w-4 text-secondary" />
              <h4 className="font-display font-bold text-foreground">{active.name}</h4>
            </div>
            <p className="text-xs text-muted-foreground">
              {active.projects} project{active.projects > 1 ? "s" : ""} •{" "}
              <span className="capitalize text-foreground">{active.status}</span>
            </p>
          </div>
        )}
      </div>

      {/* Mobile-friendly district list */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-4">
        {districts.map((d) => (
          <button
            key={d.id}
            onMouseEnter={() => setActive(d)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(d)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs transition-all ${
              active?.id === d.id
                ? "border-secondary bg-secondary/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-secondary/40"
            }`}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: statusColor(d.status) }} />
            <span className="truncate">{d.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RwandaMap;
