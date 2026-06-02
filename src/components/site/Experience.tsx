import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";

type Job = {
  company: string;
  role: string;
  dates: string;
  impact: { value: string; label: string }[];
  leads: string[];
  contributions?: string[];
  industries?: string[];
  brands?: string[];
  organizations?: string[];
};

const jobs: Job[] = [
  {
    company: "PROPERTY FIRST",
    role: "Assistant General Manager – Marcom",
    dates: "October 2025 – Present",
    impact: [
      { value: "3K → 16K+", label: "YouTube Subscribers in 8 Months" },
      { value: "32K → 45K+", label: "Instagram Followers via Strategic Content Systems" },
      { value: "4 Markets", label: "Bangalore · Mumbai · Delhi NCR · Dubai" },
    ],
    leads: [
      "Brand Communication",
      "Content Strategy",
      "Creative Operations",
      "Marketing Communication",
      "AI Workflow Integration",
      "Team Development",
    ],
    contributions: [
      "Built the Creative & Content Function from Ground Zero",
      "Integrated AI Across Marketing Operations",
      "Developed Real Estate Communication Frameworks",
      "Led Creative Direction Across Channels",
    ],
  },
  {
    company: "TEXNERE",
    role: "Marcom Head",
    dates: "April 2025 – August 2025",
    impact: [
      { value: "6K → 9K+", label: "LinkedIn Followers" },
      { value: "AI Adoption", label: "Integrated Across Strategy, Content & Execution" },
      { value: "Executive Visibility", label: "Established Structured Thought Leadership Systems" },
    ],
    leads: [
      "Brand Communication",
      "Executive Branding",
      "Content Strategy",
      "Thought Leadership",
      "AI Workflow Adoption",
    ],
  },
  {
    company: "GLOBAL HR COMMUNITY",
    role: "Marcom Head",
    dates: "January 2024 – March 2025",
    impact: [
      { value: "9,000+", label: "LinkedIn Followers" },
      { value: "1,850+", label: "Community Members & Enterprise Clients" },
      { value: "Global", label: "Recognition Across Industries" },
    ],
    leads: ["Brand Strategy", "Community Growth", "Content Ecosystems", "Thought Leadership"],
    organizations: [
      "Britannia Industries",
      "Quess Corp",
      "TE Connectivity",
      "Natural Remedies",
      "iValue",
      "Bhilwara Technologies",
      "HireGain",
    ],
  },
  {
    company: "PAPER KRAFT DESIGN STUDIO",
    role: "Founder & Creative Lead",
    dates: "Earlier Career",
    impact: [
      { value: "Multi-Industry", label: "Creative Practice Across Verticals" },
      { value: "Brand Identity", label: "End-to-End Visual Communication" },
      { value: "Founder", label: "Built & Led Creative Studio" },
    ],
    leads: ["Brand Identity", "Creative Direction", "Visual Communication", "Client Leadership"],
    industries: ["Healthcare", "Hospitality", "Retail", "Education", "Startups", "Corporate"],
    brands: [
      "Design Cafe",
      "Sagar Group of Hospitals",
      "Nandhana Group",
      "Exxon",
      "Multiple Startup Ventures",
    ],
  },
];

function JobCard({ job, defaultOpen }: { job: Job; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="rounded-3xl border border-border bg-background transition-colors hover:border-foreground/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 p-7 text-left lg:p-9"
      >
        <div>
          <div className="font-display text-[11px] font-semibold tracking-[0.22em] text-accent">
            {job.dates}
          </div>
          <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-foreground lg:text-2xl">
            {job.company}
          </h3>
          <div className="mt-1 text-sm text-muted-foreground">{job.role}</div>
        </div>
        <div
          className={`shrink-0 rounded-full border border-border bg-surface p-2 text-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="size-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-7 pb-9 pt-7 lg:px-9">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {job.impact.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-surface p-5">
                    <div className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                      {m.value}
                    </div>
                    <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    What I Lead
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.leads.map((l) => (
                      <span
                        key={l}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
                {(job.contributions || job.organizations || job.brands || job.industries) && (
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {job.contributions
                        ? "Key Contributions"
                        : job.organizations
                          ? "Organizations Engaged"
                          : job.brands
                            ? "Brands & Industries"
                            : "Industries"}
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {(job.contributions || job.organizations || job.brands || job.industries || []).map(
                        (it) => (
                          <li
                            key={it}
                            className="flex items-start gap-2 text-sm text-foreground/85"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                            <span>{it}</span>
                          </li>
                        ),
                      )}
                    </ul>
                    {job.brands && job.industries && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {job.industries.map((i) => (
                          <span
                            key={i}
                            className="rounded-md bg-foreground/[0.04] px-2 py-1 text-[11px] font-medium text-muted-foreground"
                          >
                            {i}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="07" label="Professional Experience" />
          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            A career building brands, teams and marketing systems.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {jobs.map((j, i) => (
            <Reveal key={j.company} delay={i * 0.06}>
              <JobCard job={j} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
