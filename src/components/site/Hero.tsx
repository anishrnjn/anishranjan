import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import portrait from "@/assets/anish-portrait.png";
import { AboutMeDialog } from "./AboutMeDialog";

const chips = [
  "Brand Strategist",
  "Content Strategist",
  "Creative Leader",
  "Marketing Communication Specialist",
  "AI-Driven Marketing Professional",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-70" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            Available for leadership & consulting engagements
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[72px] text-balance"
          >
            Building Brands Through{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Strategy</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/20 lg:h-4" />
            </span>
            , Storytelling & Scalable Marketing Systems
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 space-y-4 text-[17px] leading-relaxed text-muted-foreground lg:text-[18px] text-pretty max-w-2xl"
          >
            <p>
              I help businesses build stronger brand perception, audience engagement
              and market impact by combining brand strategy, content ecosystems,
              creative leadership and AI-powered marketing workflows.
            </p>
            <p>
              Over the last 15+ years, I've evolved from brand identity design into
              brand strategy, content development, marketing communication and
              creative leadership—helping organizations build stronger brands,
              smarter systems and more meaningful customer experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80"
              >
                <Sparkles className="size-3 text-accent" />
                {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://drive.google.com/drive/folders/1lCcBanNVFEXGLJOTXlK9JHufrM4Q2S-h?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:bg-accent"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground"
            >
              Let's Connect
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-tr from-accent/15 via-transparent to-foreground/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
            <img
              src={portrait}
              alt="Portrait of Anish Ranjan, Brand & Marketing Leader"
              width={896}
              height={1152}
              className="aspect-[7/9] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-border/60 bg-background/85 px-4 py-3 backdrop-blur">
              <div>
                <div className="font-display text-sm font-bold text-foreground">Anish Ranjan</div>
                <div className="text-xs text-muted-foreground">Brand, Content & Creative Strategist</div>
              </div>
              <div className="hidden items-center gap-1 rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-foreground/70 sm:inline-flex">
                <span className="size-1.5 rounded-full bg-success" /> Bengaluru
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
