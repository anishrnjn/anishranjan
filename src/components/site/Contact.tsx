import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const cards = [
  { icon: MapPin, label: "Location", value: "Bengaluru, India", href: null as string | null },
  { icon: Mail, label: "Email", value: "anishrnjn@gmail.com", href: "mailto:anishrnjn@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anishranjan", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="11" label="Contact" />
          <h2 className="max-w-4xl font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-4xl lg:text-[64px] text-balance">
            Let's Build Brands That{" "}
            <span className="text-muted-foreground/60">Create Lasting Impact.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
            <p className="max-w-2xl text-[17px] leading-relaxed text-muted-foreground lg:text-lg text-pretty">
              Whether you're looking to strengthen your brand positioning, build a
              scalable content ecosystem, establish smarter marketing systems or
              integrate AI into your marketing operations, I'd love to connect. I'm
              open to leadership opportunities, consulting engagements, strategic
              collaborations and conversations around branding, content, creative
              direction and marketing transformation.
            </p>
            <div className="flex items-start lg:justify-end">
              <a
                href="mailto:anishrnjn@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                Start A Conversation
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const Inner = (
              <div className="group flex h-full items-start justify-between gap-6 rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[var(--shadow-elevated)]">
                <div>
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-foreground/[0.04] text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1.5 font-display text-base font-semibold text-foreground">
                    {c.value}
                  </div>
                </div>
                {c.href && (
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                )}
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 0.07}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
