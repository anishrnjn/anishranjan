import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const cases = [
  {
    n: "01",
    client: "Property First",
    title: "Building a Scalable Creative & Content Function",
    body: "Built the creative and content department from the ground up, establishing systems, workflows and processes that enabled consistent communication across multiple real estate projects.",
    tags: ["Creative Operations", "Content Systems", "AI Integration", "Marketing Communication"],
    details: {
      role: "Head of Creative & Content",
      duration: "2+ years",
      overview:
        "Joined as the first creative hire and built a full-stack creative and content function supporting multiple residential and commercial real estate projects across India.",
      highlights: [
        "Set up creative operations, briefing systems and review workflows from zero.",
        "Built and managed a multi-disciplinary team across copy, design, video and motion.",
        "Integrated AI tools into ideation, content production and asset management pipelines.",
        "Standardised brand and communication systems across 6+ project verticals.",
      ],
      impact:
        "Reduced creative turnaround time significantly while improving quality, consistency and on-brand output across all projects.",
    },
  },
  {
    n: "02",
    client: "Godrej Vanantara",
    title: "Brand Positioning & Communication Strategy",
    body: "Developed positioning territories, messaging architecture, content pillars and communication frameworks for a premium residential township project.",
    tags: ["Brand Strategy", "Audience Psychology", "Messaging", "Campaign Direction"],
    details: {
      role: "Brand & Communication Strategy Lead",
      duration: "Project engagement",
      overview:
        "Led the strategic positioning and communication architecture for Godrej Vanantara — a premium residential township — translating buyer psychology into a distinct brand voice.",
      highlights: [
        "Crafted positioning territories grounded in audience research and category analysis.",
        "Built a messaging architecture covering brand promise, pillars and proof points.",
        "Defined content pillars and tone-of-voice guidelines for launch and sustenance phases.",
        "Directed campaign narratives across digital, print and on-ground touchpoints.",
      ],
      impact:
        "Established a premium, ownable brand voice that differentiated the project in a saturated luxury residential market.",
    },
  },
  {
    n: "03",
    client: "Global HR Community (GHRC)",
    title: "Building a Community-Led Brand Ecosystem",
    body: "Established brand identity systems, communication frameworks and growth strategies that helped scale community engagement and enterprise participation.",
    tags: ["Brand Development", "Community Growth", "Content Strategy", "Thought Leadership"],
    details: {
      role: "Brand & Community Strategy Lead",
      duration: "Long-term engagement",
      overview:
        "Helped shape GHRC into one of India's most active HR communities by designing the brand ecosystem, content engine and growth playbook.",
      highlights: [
        "Designed the brand identity system and visual language for the community.",
        "Built content frameworks for thought leadership, events and member spotlights.",
        "Drove growth strategies that scaled both individual and enterprise participation.",
        "Created communication systems across newsletter, social and event channels.",
      ],
      impact:
        "Grew GHRC into a recognised community brand attracting senior HR leaders and enterprise partners.",
    },
  },
  {
    n: "04",
    client: "Singularity University India Program",
    title: "Strategic Communication Through the GHRC Ecosystem",
    body: "Led creative communication initiatives through the GHRC ecosystem, supporting awareness, engagement and audience participation.",
    tags: ["Strategic Communication", "Community Marketing", "Creative Leadership"],
    details: {
      role: "Creative & Communication Lead",
      duration: "Program engagement",
      overview:
        "Led the creative and communication push for Singularity University's India Program through the GHRC community ecosystem.",
      highlights: [
        "Built the communication narrative connecting future-of-work themes with HR leaders.",
        "Directed creative assets across launch, awareness and registration phases.",
        "Activated the GHRC community as a strategic distribution and engagement channel.",
        "Coordinated with global and Indian stakeholders to align messaging.",
      ],
      impact:
        "Drove strong awareness and qualified participation from senior leaders across Indian enterprises.",
    },
  },
];

export function FeaturedWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? cases[openIndex] : null;

  return (
    <section id="work" className="relative overflow-hidden bg-dark py-24 text-dark-foreground lg:py-32">
      <div className="absolute inset-0 bg-grid-dark mask-radial-fade opacity-60" />
      <div className="absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-dark-foreground/60">
            <span className="text-accent">06</span>
            <span className="h-px w-8 bg-dark-foreground/20" />
            <span>Featured Work</span>
          </div>
          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Selected case studies from brand, content and communication leadership.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-dark-foreground/50">
                    CASE STUDY · {c.n}
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`View details for ${c.client}`}
                    className="rounded-full p-1.5 text-dark-foreground/40 transition-all hover:bg-white/10 hover:text-dark-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
                <div className="mt-6 text-sm font-semibold text-accent">{c.client}</div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug lg:text-2xl">{c.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-dark-foreground/70">{c.body}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-dark-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Read more <ArrowUpRight className="size-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 bg-dark text-dark-foreground sm:max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <div className="text-xs font-semibold tracking-[0.2em] text-accent">
                  CASE STUDY · {active.n}
                </div>
                <DialogTitle className="font-display text-2xl font-bold leading-tight lg:text-3xl">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-dark-foreground/70">
                  {active.client}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-foreground/50">Role</div>
                  <div className="mt-1 text-sm font-medium">{active.details.role}</div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-foreground/50">Duration</div>
                  <div className="mt-1 text-sm font-medium">{active.details.duration}</div>
                </div>
              </div>

              <div className="mt-5">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Overview</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/75">{active.details.overview}</p>
              </div>

              <div className="mt-5">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Key Highlights</h4>
                <ul className="mt-2 space-y-2">
                  {active.details.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-[15px] leading-relaxed text-dark-foreground/75">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Impact</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/75">{active.details.impact}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-dark-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
