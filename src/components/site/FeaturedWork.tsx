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
    approach?: { heading?: string; intro: string; items?: string[] };
    built?: { n?: string; heading: string; intro?: string; bullets?: string[]; outro?: string }[];
    projects?: { items: { name: string; description: string }[] };
    outcomes?: { items: string[] };
    lesson?: { heading: string; body: string[] };
    funnel?: string[];
    whyDifferent?: string;
    meta?: { organization?: string; program?: string; partner?: string };
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
    title: "Building a Community-Led Brand in the HR & Future of Work Space",
    body: "Developed communication strategies, content ecosystems and engagement frameworks that strengthened community growth and brand trust across a professional HR network.",
    tags: ["Brand Development", "Community Growth", "Content Strategy", "Thought Leadership"],
    details: {
      role: "Brand & Community Strategy Lead",
      duration: "Long-term engagement",
      overview:
        "Global HR Community was one of the first environments where I had the opportunity to work at the intersection of branding, content, community engagement, events, partnerships, and thought leadership. The challenge wasn't simply marketing a product or service. The challenge was building engagement, trust, and relevance within a growing professional community of HR leaders, business professionals, industry experts, and learning-focused audiences.",
      challenge: {
        intro:
          "Professional communities grow differently from traditional businesses. People don't join communities because of advertising. They join because of:",
        body: "The challenge was creating a communication ecosystem that could consistently engage and grow the community while strengthening the overall brand.",
        requirements: [
          "Shared interests",
          "Valuable content",
          "Meaningful conversations",
          "Professional networking",
          "Continuous learning opportunities",
        ],
      },
      objective: {
        intro: "Position GHRC as a trusted platform for learning, networking, and professional development through strategic communication, content, and community engagement initiatives.",
        items: [],
      },
      built: [
        {
          n: "01",
          heading: "Strengthened Brand Communication",
          intro: "Developed communication strategies that improved consistency across community touchpoints. This included:",
          bullets: [
            "Brand Messaging",
            "Community Communication",
            "Event Promotion",
            "Social Media Content",
            "Member Engagement Campaigns",
          ],
        },
        {
          n: "02",
          heading: "Built Content-Led Community Engagement",
          intro: "Created and managed content initiatives focused on:",
          bullets: [
            "HR Trends",
            "Leadership",
            "Learning & Development",
            "Workplace Transformation",
            "Industry Conversations",
          ],
          outro: "The goal was to keep the community engaged beyond individual events.",
        },
        {
          n: "03",
          heading: "Supported High-Impact Events & Programs",
          intro: "Created communication assets and campaigns supporting:",
          bullets: [
            "Industry Events",
            "Leadership Sessions",
            "Learning Programs",
            "Community Initiatives",
          ],
          outro: "Ensuring strong participation and visibility.",
        },
        {
          n: "04",
          heading: "Managed Multi-Stakeholder Communication",
          intro: "Worked closely with:",
          bullets: [
            "Community Members",
            "Industry Experts",
            "Speakers",
            "Leadership Teams",
            "Partners",
          ],
          outro: "To ensure alignment across communication and engagement efforts.",
        },
        {
          n: "05",
          heading: "Enabled Program Marketing",
          intro: "Supporting the Singularity University India Program. Developed communication and marketing initiatives that helped drive awareness and engagement for the Singularity University India program associated with Singularity University and Peter Diamandis. This required translating complex innovation-focused topics into compelling communication that resonated with the GHRC audience.",
        },
      ],
      highlights: [
        "Community Building: Helped strengthen engagement across a growing professional community.",
        "Content Ecosystem: Created consistent communication that supported learning, networking, and industry conversations.",
        "Event & Program Visibility: Supported participation and awareness for key community initiatives and learning programs.",
        "Stakeholder Collaboration: Managed communication across multiple internal and external stakeholders.",
      ],
      outcomes: {
        items: [
          "Strengthened community engagement through content and communication",
          "Improved consistency across brand and event communication",
          "Supported high-profile learning and networking initiatives",
          "Contributed to the growth and visibility of the community brand",
          "Built experience in community-led marketing and audience engagement",
        ],
      },
      lesson: {
        heading: "Key Learning",
        body: [
          "Community brands are built differently from corporate brands. Success comes from creating value consistently, facilitating meaningful conversations, and fostering a sense of belonging among members.",
          "GHRC provided valuable experience in understanding how content, events, partnerships, and community engagement work together to build long-term brand trust.",
        ],
      },
    },
  },
  {
    n: "04",
    client: "Singularity India Program",
    title: "Leveraging a Professional Community to Drive Program Awareness, Engagement & Sales",
    body: "Converted an existing professional community into a highly engaged audience capable of generating registrations and program participation for a premium innovation learning program.",
    tags: ["Strategic Communication", "Community Marketing", "Program Marketing"],
    details: {
      role: "Creative & Communication Lead",
      duration: "Program engagement",
      meta: {
        organization: "Global HR Community (GHRC)",
        program: "Singularity India Program",
        partner: "Singularity University",
      },
      overview:
        "The Singularity India Program was designed to introduce business leaders, HR professionals, entrepreneurs, and innovation-focused individuals to emerging technologies, future trends, and exponential thinking. The challenge was not simply promoting another event. The challenge was converting an existing professional community into a highly engaged audience capable of generating registrations and program participation.",
      challenge: {
        intro: "Premium learning programs often face three major obstacles:",
        requirements: [
          "Awareness — Many potential participants are unaware of the program's value.",
          "Relevance — Future-focused innovation topics can often feel distant from day-to-day business challenges.",
          "Conversion — Generating actual registrations requires far more than visibility. It requires trust.",
        ],
      },
      objective: {
        intro: "Use GHRC's existing community ecosystem to create awareness, build trust, generate engagement, and ultimately support registrations for the Singularity India Program.",
        items: [],
      },
      approach: {
        heading: "Strategic Approach",
        intro: "Community-Led Marketing Instead of Traditional Advertising. Rather than relying solely on paid promotion, the strategy focused on activating an existing professional audience that already trusted the GHRC platform. The approach centered around:",
        items: [
          "Audience Education",
          "Thought Leadership",
          "Community Engagement",
          "Credibility Building",
          "Program Awareness",
        ],
      },
      built: [
        {
          n: "01",
          heading: "Audience Mapping",
          intro: "Identified segments within the GHRC ecosystem most likely to resonate with the program. This included:",
          bullets: [
            "HR Leaders",
            "Business Leaders",
            "Entrepreneurs",
            "Innovation Enthusiasts",
            "Learning & Development Professionals",
          ],
        },
        {
          n: "02",
          heading: "Program Positioning",
          intro: "Helped communicate the program in a way that connected future technologies and innovation with real business opportunities and leadership challenges. The communication moved beyond features and focused on outcomes.",
        },
        {
          n: "03",
          heading: "Content-Led Awareness Campaigns",
          intro: "Developed content designed to generate curiosity, build credibility, educate audiences, and increase consideration. Content formats included:",
          bullets: [
            "Thought Leadership",
            "Speaker Highlights",
            "Program Insights",
            "Industry Trends",
            "Community Discussions",
          ],
        },
        {
          n: "04",
          heading: "Community Activation",
          intro: "Leveraged GHRC's existing audience and engagement channels to amplify communication. This included:",
          bullets: [
            "Community Communication",
            "Email Campaigns",
            "Social Media Promotion",
            "Member Outreach",
            "Event-Based Engagement",
          ],
          outro: "The goal was to convert trust already established within the community into program interest.",
        },
        {
          n: "05",
          heading: "Conversion Support",
          intro: "Created communication assets that helped move audiences from awareness to consideration and ultimately registration. This included:",
          bullets: [
            "Promotional Communication",
            "Registration Messaging",
            "Program Benefits",
            "Participant-Focused Storytelling",
          ],
        },
      ],
      funnel: [
        "Community Trust",
        "Awareness",
        "Education",
        "Engagement",
        "Consideration",
        "Registration",
      ],
      whyDifferent:
        "Most program marketing starts with advertising. This initiative started with community trust. Instead of building an audience from scratch, the strategy leveraged an engaged professional network and transformed community engagement into business outcomes.",
      outcomes: {
        items: [
          "Audience Reach — Community-driven awareness generation.",
          "Engagement — Increased interest and conversations around the program.",
          "Registrations — Supported participant acquisition through community-led marketing efforts.",
          "Brand Credibility — Strengthened association between innovation, learning, and professional growth.",
        ],
      },
      lesson: {
        heading: "Key Learning",
        body: [
          "Communities are more than engagement platforms. When nurtured correctly, they become powerful growth engines capable of generating awareness, trust, advocacy, and revenue.",
          "The Singularity India Program demonstrated how a well-established professional community can be leveraged to support business objectives while continuing to provide value to its members.",
        ],
      },
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
        <DialogContent className="max-h-[88vh] overflow-y-auto border-white/10 bg-dark text-dark-foreground sm:max-w-3xl">
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

              {active.details.meta && (
                <div className="mt-3 grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-3">
                  {active.details.meta.organization && (
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-foreground/50">Organization</div>
                      <div className="mt-1 text-sm font-medium">{active.details.meta.organization}</div>
                    </div>
                  )}
                  {active.details.meta.program && (
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-foreground/50">Program</div>
                      <div className="mt-1 text-sm font-medium">{active.details.meta.program}</div>
                    </div>
                  )}
                  {active.details.meta.partner && (
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-foreground/50">Partner</div>
                      <div className="mt-1 text-sm font-medium">{active.details.meta.partner}</div>
                    </div>
                  )}
                </div>
              )}

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

              {active.details.challenge && (
                <div className="mt-6">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">The Challenge</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/80">{active.details.challenge.intro}</p>
                  {active.details.challenge.body && (
                    <p className="mt-3 text-[15px] leading-relaxed text-dark-foreground/70">{active.details.challenge.body}</p>
                  )}
                  {active.details.challenge.requirements && (
                    <>
                      <p className="mt-4 text-sm text-dark-foreground/60">The organization required:</p>
                      <ul className="mt-2 space-y-2">
                        {active.details.challenge.requirements.map((r) => (
                          <li key={r} className="flex gap-3 text-[15px] leading-relaxed text-dark-foreground/80">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              {active.details.objective && (
                <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-accent">My Objective</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/80">{active.details.objective.intro}</p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {active.details.objective.items.map((it) => (
                      <li key={it} className="flex gap-2 text-[14px] leading-relaxed text-dark-foreground/85">
                        <span className="text-accent">✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.details.approach && (
                <div className="mt-6">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">
                    {active.details.approach.heading || "Strategic Approach"}
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/80">{active.details.approach.intro}</p>
                  {active.details.approach.items && active.details.approach.items.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {active.details.approach.items.map((it) => (
                        <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-dark-foreground/80">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {active.details.built && (
                <div className="mt-6">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">What I Built</h4>
                  <div className="mt-4 space-y-4">
                    {active.details.built.map((s) => (
                      <div key={s.heading} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <div className="flex items-start gap-4">
                          {s.n && (
                            <div className="font-display text-2xl font-extrabold text-accent/80">{s.n}</div>
                          )}
                          <div className="flex-1">
                            <h5 className="font-display text-base font-bold text-dark-foreground">{s.heading}</h5>
                            {s.intro && (
                              <p className="mt-2 text-[14px] leading-relaxed text-dark-foreground/70">{s.intro}</p>
                            )}
                            {s.bullets && (
                              <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                                {s.bullets.map((b) => (
                                  <li key={b} className="flex gap-2 text-[14px] leading-relaxed text-dark-foreground/80">
                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {s.outro && (
                              <p className="mt-3 text-[13px] italic leading-relaxed text-dark-foreground/60">{s.outro}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active.details.funnel && active.details.funnel.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">The Marketing Funnel</h4>
                  <div className="mt-4 flex flex-col items-center gap-2">
                    {active.details.funnel?.map((step, idx) => (
                      <div key={step} className="flex flex-col items-center gap-2">
                        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-accent/10 to-white/[0.02] px-5 py-2.5 text-center">
                          <span className="text-[14px] font-semibold text-dark-foreground">{step}</span>
                        </div>
                        {idx < active.details.funnel!.length - 1 && (
                          <div className="h-4 w-px bg-accent/40" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active.details.whyDifferent && (
                <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-accent">Why This Project Was Different</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-dark-foreground/80">{active.details.whyDifferent}</p>
                </div>
              )}

              {active.details.projects && (
                <div className="mt-6">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Key Projects Led</h4>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {active.details.projects.items.map((p) => (
                      <div key={p.name} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-4">
                        <div className="font-display text-base font-bold text-dark-foreground">{p.name}</div>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-dark-foreground/70">{p.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active.details.outcomes && (
                <div className="mt-6">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-dark-foreground/80">Outcomes</h4>
                  <ul className="mt-3 space-y-2">
                    {active.details.outcomes.items.map((o) => (
                      <li key={o} className="flex gap-2 text-[15px] leading-relaxed text-dark-foreground/85">
                        <span className="text-accent">✓</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.details.lesson && (
                <div className="mt-6 rounded-2xl border-l-2 border-accent bg-white/[0.03] p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Lessons Learned</div>
                  <h5 className="mt-2 font-display text-lg font-bold text-dark-foreground">{active.details.lesson.heading}</h5>
                  {active.details.lesson.body.map((p, idx) => (
                    <p key={idx} className="mt-3 text-[15px] leading-relaxed text-dark-foreground/75">{p}</p>
                  ))}
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
