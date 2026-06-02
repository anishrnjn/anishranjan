import { Building2, Globe2, Layers, MapPin } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import breadthVisual from "@/assets/breadth-visual.jpg";

const items = [
  { icon: Globe2, title: "15+ Years", body: "Building Brands & Marketing Systems" },
  { icon: MapPin, title: "Major Markets", body: "Bangalore · Mumbai · Delhi NCR · Dubai" },
  {
    icon: Building2,
    title: "Multiple Industries",
    body: "Real Estate · Healthcare · Hospitality · F&B · Retail · Education · Startups · Corporate",
  },
  { icon: Layers, title: "End-to-End Expertise", body: "Strategy → Content → Creative → Marcom" },
];

export function Breadth() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="03" label="Breadth of Experience" />
          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            A career operating across markets, industries and the entire marketing stack.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <Reveal key={it.title} delay={i * 0.07}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[var(--shadow-elevated)]">
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-foreground/[0.04] text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="size-5" />
                    </div>
                    <div className="mt-6 font-display text-lg font-bold text-foreground">{it.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-border">
              <img
                src={breadthVisual}
                alt="Skylines across global markets representing 15+ years of brand and marketing leadership"
                width={1024}
                height={1280}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-background/0" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
