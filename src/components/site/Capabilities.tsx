import { BrainCircuit, Compass, Megaphone, Palette, Users2 } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const columns = [
  {
    icon: Compass,
    title: "Brand Strategy",
    items: [
      "Brand Positioning",
      "Messaging Architecture",
      "Communication Strategy",
      "Brand Guidelines",
      "Audience Research",
      "Customer Journey Mapping",
      "Narrative Development",
    ],
  },
  {
    icon: Megaphone,
    title: "Content & Marketing",
    items: [
      "Content Strategy",
      "Campaign Planning",
      "Marketing Communication",
      "Social Media Strategy",
      "Thought Leadership",
      "Community Building",
      "Content Ecosystems",
    ],
  },
  {
    icon: Palette,
    title: "Creative Direction",
    items: [
      "Creative Direction",
      "Brand Identity Design",
      "Visual Communication",
      "Art Direction",
      "Advertising Concepts",
      "Video Conceptualization",
      "Creative Team Leadership",
    ],
  },
  {
    icon: Users2,
    title: "Leadership & Operations",
    items: [
      "Team Building",
      "Stakeholder Management",
      "Vendor Management",
      "Project Leadership",
      "Process Development",
      "Marketing Operations",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Emerging Systems",
    items: [
      "AI-Assisted Marketing Workflows",
      "Research Automation",
      "Content Systems",
      "Creative Automation",
      "Workflow Optimization",
      "AI-Augmented Production",
    ],
  },
];

export function Capabilities() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="05" label="What I Do" />
          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            A connected capability set across strategy, content, creative, leadership and AI.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {columns.map((col, i) => {
            const Icon = col.icon;
            return (
              <Reveal key={col.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[var(--shadow-elevated)]">
                  <div className="inline-flex size-9 items-center justify-center rounded-lg bg-foreground/[0.04] text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-foreground">{col.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/40" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
