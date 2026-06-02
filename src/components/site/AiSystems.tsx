import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const flow = [
  {
    step: "01",
    title: "Research & Insights",
    items: ["Market Research", "Audience Research", "Competitive Intelligence", "Communication Audits"],
  },
  {
    step: "02",
    title: "Strategy Development",
    items: ["Positioning", "Messaging Frameworks", "Campaign Ideation", "Content Planning"],
  },
  {
    step: "03",
    title: "Content & Creative",
    items: ["Content Creation", "Creative Development", "Design Support", "Video Planning"],
  },
  {
    step: "04",
    title: "Workflow Optimization",
    items: ["Knowledge Systems", "Automation", "Documentation", "Productivity Enhancement"],
  },
];

export function AiSystems() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-dark-foreground lg:py-32">
      <div className="absolute inset-0 bg-grid-dark mask-radial-fade opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-dark-foreground/60">
            <span className="text-accent">10</span>
            <span className="h-px w-8 bg-dark-foreground/20" />
            <span>AI & Modern Marketing Systems</span>
          </div>
          <h2 className="max-w-4xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[56px] text-balance">
            AI Is Not Replacing Marketing.{" "}
            <span className="text-dark-foreground/60">It's Replacing Inefficiency.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {flow.map((f, i) => (
            <Reveal key={f.step} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                {i < flow.length - 1 && (
                  <ArrowRight className="absolute -right-2 top-9 hidden size-5 text-dark-foreground/30 lg:block" />
                )}
                <div className="font-display text-xs font-semibold tracking-[0.22em] text-accent">
                  STEP {f.step}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{f.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-dark-foreground/75">
                  {f.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Core Philosophy
            </div>
            <p className="mt-4 max-w-4xl font-display text-xl font-semibold leading-snug tracking-tight text-dark-foreground lg:text-2xl text-balance">
              Use AI to enhance strategic thinking, accelerate execution and improve
              creative output—without compromising originality or human insight.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
