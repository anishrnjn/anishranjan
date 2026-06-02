import { Counter } from "./Counter";
import { Reveal, SectionLabel } from "./Reveal";
import { Instagram, Linkedin, Users, Youtube } from "lucide-react";

const stats = [
  { value: 16000, suffix: "+", label: "YouTube Subscribers Built Through Content Systems", icon: Youtube },
  { value: 45000, suffix: "+", label: "Instagram Audience Growth Through Strategic Communication", icon: Instagram },
  { value: 9000, suffix: "+", label: "LinkedIn Community Growth Across Organizations", icon: Linkedin },
  { value: 1850, suffix: "+", label: "Community Members & Enterprise Clients Acquired", icon: Users },
];

export function Impact() {
  return (
    <section id="impact" className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="02" label="Impact at a Glance" />
          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Measurable growth across content, community and brand ecosystems.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[var(--shadow-card)]">
                  <div className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/0 transition-colors duration-500 group-hover:bg-accent/5" />
                  <Icon className="size-5 text-muted-foreground" />
                  <div className="mt-8 font-display text-[56px] font-extrabold leading-none tracking-tight text-foreground lg:text-[80px]">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
