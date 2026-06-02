import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const articles = [
  { tag: "Brand Strategy", title: "Why Most Brand Positioning Fails", read: "8 min read" },
  { tag: "AI Systems", title: "Building AI-Powered Marketing Workflows", read: "10 min read" },
  { tag: "Operations", title: "From Content Creation to Content Systems", read: "7 min read" },
  { tag: "Leadership", title: "The Future of Marketing Operations", read: "9 min read" },
];

export function Thinking() {
  return (
    <section id="thinking" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel index="09" label="Thinking" />
              <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Writing on brand, content systems and modern marketing.
              </h2>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              All essays
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <a
                href="#"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-foreground/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {a.tag}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <h3 className="mt-12 font-display text-2xl font-bold leading-tight tracking-tight text-foreground lg:text-[28px]">
                  {a.title}
                </h3>
                <div className="mt-8 text-xs text-muted-foreground">{a.read} · Coming soon</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
