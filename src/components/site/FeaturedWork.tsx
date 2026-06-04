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

type CaseStudy = {
  n: string;
  client: string;
  title: string;
  body: string;
  tags: string[];
  details: {
    role: string;
    duration: string;
    snapshot?: { value: string; label: string }[];
    coreRole?: string[];
    overview?: string;
    highlights?: string[];
    impact?: string;
    challenge?: { intro: string; body?: string; requirements?: string[] };
    objective?: { intro: string; items: string[] };
    built?: { n?: string; heading: string; intro?: string; bullets?: string[]; outro?: string }[];
    projects?: { items: { name: string; description: string }[] };
    outcomes?: { items: string[] };
    lesson?: { heading: string; body: string[] };
  };
};

const cases: CaseStudy[] = [
  {
    n: "01",
    client: "Property First",
    title: "Building a Scalable Marketing, Content & Creative Engine from Scratch",
    body: "Built an end-to-end marketing and creative ecosystem from the ground up — structured teams, workflows, AI-enabled production and brand systems to support multiple launches in a fast-scaling real estate business.",
    tags: ["Creative Operations", "Marketing Systems", "AI Integration", "Brand Communication"],
    details: {
      role: "Assistant General Manager – Marcom",
      duration: "October 2025 – Present",
      challenge: {
        intro:
          "When I joined Property First, the company was scaling rapidly in the highly competitive Bengaluru real estate market.",
        body: "The challenge wasn't simply creating marketing assets. It was building an entire marketing and creative ecosystem capable of supporting multiple project launches, lead generation initiatives, digital campaigns, influencer collaborations, sales communication and brand-building efforts at scale.",
        requirements: [
          "A structured creative function",
          "Faster content production",
          "Consistent brand communication",
          "Improved collaboration between sales and marketing",
          "Scalable systems that could support future growth",
        ],
      },
      objective: {
        intro: "Create a modern marketing infrastructure capable of delivering:",
        items: [
          "Consistent Brand Communication",
          "Faster Campaign Execution",
          "Scalable Creative Production",
          "AI-Enabled Workflows",
          "Stronger Alignment Between Sales & Marketing",
        ],
      },
      built: [
        {
          n: "01",
          heading: "Established the Creative & Content Function",
          intro: "Built the company's internal creative and content ecosystem from the ground up. This included:",
          bullets: [
            "Team structure",
            "Roles & responsibilities",
            "Creative workflow systems",
            "Content approval frameworks",
            "Asset management processes",
          ],
        },
        {
          n: "02",
          heading: "Created Marketing Communication Frameworks",
          intro: "Developed communication structures for:",
          bullets: [
            "Project Launches",
            "Pre-Launch Campaigns",
            "Investor Communication",
            "Influencer Marketing",
            "Social Media Content",
            "Sales Enablement Assets",
          ],
          outro: "This helped create consistency across multiple projects and customer touchpoints.",
        },
        {
          n: "03",
          heading: "AI Integration Across Marketing Operations",
          intro: "Introduced AI-assisted workflows across:",
          bullets: [
            "Market Research",
            "Audience Analysis",
            "Messaging Development",
            "Content Creation",
            "Creative Ideation",
            "Video Scripting",
            "Campaign Planning",
          ],
          outro: "Resulting in significantly faster turnaround times and increased production efficiency.",
        },
        {
          n: "04",
          heading: "Scaled Content Production",
          intro: "Built systems to support:",
          bullets: [
            "Meta Campaign Creatives",
            "Social Media Content",
            "Influencer Scripts",
            "Launch Films",
            "Project Presentations",
            "Sales Communication Assets",
            "Investor-Focused Marketing Material",
          ],
          outro: "Across multiple real estate projects simultaneously.",
        },
        {
          n: "05",
          heading: "Strengthened Sales & Marketing Alignment",
          intro: "Created structured communication systems that improved collaboration between:",
          bullets: [
            "Sales Teams",
            "Leadership Teams",
            "Creative Teams",
            "Performance Marketing Teams",
            "External Agencies",
          ],
          outro: "Helping marketing efforts remain closely aligned with business objectives.",
        },
      ],
      projects: {
        items: [
          { name: "Godrej Bannerghatta", description: "Township launch communication strategy, positioning support, content systems and campaign assets." },
          { name: "Century Jakkur", description: "Launch messaging, marketing communication and campaign content development." },
          { name: "Lodha Sadahalli", description: "Pre-launch communication strategy and investor-focused marketing content." },
          { name: "Godrej Crown Residences", description: "Launch communication, positioning support and content ecosystem creation." },
        ],
      },
      outcomes: {
        items: [
          "Built the complete marketing and creative function from scratch",
          "Established AI-enabled marketing workflows",
          "Reduced content production timelines through process optimization",
          "Supported multiple simultaneous project launches",
          "Created scalable systems for future growth",
          "Improved consistency across brand communication and customer touchpoints",
        ],
      },
      lesson: {
        heading: "Key Learning",
        body: [
          "Building marketing teams is not about producing more content. It's about creating systems that allow strategy, creativity and execution to scale together.",
          "At Property First, the focus was not merely campaign delivery, but building an operating model that could support long-term growth.",
        ],
      },
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

              {active.details.snapshot && (
                <div className="mt-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">
                    Key Impact Snapshot
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {active.details.snapshot.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 to-white/[0.02] p-4"
                      >
                        <div className="font-display text-xl font-extrabold tracking-tight text-accent">
                          {s.value}
                        </div>
                        <div className="mt-1.5 text-[12px] leading-relaxed text-dark-foreground/70">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active.details.overview && (
                <div className="mt-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Overview</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/75">{active.details.overview}</p>
                </div>
              )}

              {active.details.coreRole && (
                <div className="mt-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Core Role</h4>
                  <ul className="mt-3 space-y-2.5">
                    {active.details.coreRole.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-dark-foreground/80">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.details.highlights && (
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
              )}

              {active.details.impact && (
                <div className="mt-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Impact</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/75">{active.details.impact}</p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
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
