import { Reveal, SectionLabel } from "./Reveal";

const phases = [
  {
    tag: "Phase 01",
    title: "Foundation",
    body: [
      "I began my career in brand identity design and visual communication, helping businesses build recognizable brands through thoughtful design systems, storytelling and customer centric communication.",
      "This phase gave me a deep understanding of brand perception, design thinking and visual communication.",
    ],
  },
  {
    tag: "Phase 02",
    title: "Builder",
    body: [
      "As my career progressed, I expanded into content strategy, campaign development, communication planning and marketing execution.",
      "I started working closely with founders, leadership teams and business stakeholders to build stronger communication systems and audience engagement frameworks.",
    ],
  },
  {
    tag: "Phase 03",
    title: "Scaler",
    body: [
      "Today, I operate at the intersection of strategy, creativity, leadership and technology.",
      "My work focuses on building scalable communication ecosystems, content operations and AI-assisted marketing systems that enable organizations to grow faster and communicate more effectively.",
    ],
  },
];

export function Evolution() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="04" label="My Evolution" />
          <h2 className="max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Foundation <span className="text-muted-foreground/50">→</span> Builder{" "}
            <span className="text-muted-foreground/50">→</span> Scaler
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl border border-border bg-background p-7">
                  <div className="absolute -top-3 left-7 hidden size-6 items-center justify-center rounded-full border border-border bg-background lg:flex">
                    <span className="size-2.5 rounded-full bg-foreground" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{p.tag}</div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{p.title}</h3>
                  <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                    {p.body.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
