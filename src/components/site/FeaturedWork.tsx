import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const cases = [
  {
    n: "01",
    client: "Property First",
    title: "Building a Scalable Creative & Content Function",
    body: "Built the creative and content department from the ground up, establishing systems, workflows and processes that enabled consistent communication across multiple real estate projects.",
    tags: ["Creative Operations", "Content Systems", "AI Integration", "Marketing Communication"],
  },
  {
    n: "02",
    client: "Godrej Vanantara",
    title: "Brand Positioning & Communication Strategy",
    body: "Developed positioning territories, messaging architecture, content pillars and communication frameworks for a premium residential township project.",
    tags: ["Brand Strategy", "Audience Psychology", "Messaging", "Campaign Direction"],
  },
  {
    n: "03",
    client: "Global HR Community (GHRC)",
    title: "Building a Community-Led Brand Ecosystem",
    body: "Established brand identity systems, communication frameworks and growth strategies that helped scale community engagement and enterprise participation.",
    tags: ["Brand Development", "Community Growth", "Content Strategy", "Thought Leadership"],
  },
  {
    n: "04",
    client: "Singularity University India Program",
    title: "Strategic Communication Through the GHRC Ecosystem",
    body: "Led creative communication initiatives through the GHRC ecosystem, supporting awareness, engagement and audience participation.",
    tags: ["Strategic Communication", "Community Marketing", "Creative Leadership"],
  },
];

export function FeaturedWork() {
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
                  <ArrowUpRight className="size-5 text-dark-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-dark-foreground" />
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
