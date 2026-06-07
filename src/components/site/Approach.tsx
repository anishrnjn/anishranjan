import { Reveal, SectionLabel } from "./Reveal";

export function Approach() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10">
        <Reveal>
          <SectionLabel index="08" label="My Approach" />
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-4xl lg:text-[56px] text-balance">
            Strategy First.{" "}
            <span className="block text-muted-foreground/70">Systems Always.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-[17px] leading-relaxed text-foreground/85 lg:text-lg text-pretty">
            <p>
              I believe successful brands are built when strategy, storytelling,
              creativity and execution operate as a connected system.
            </p>
            <p>
              Rather than treating branding, content, marketing and creative
              development as separate disciplines. I view them as interconnected
              components of a larger ecosystem that shapes perception, drives
              engagement and creates long term business value.
            </p>
            <p className="text-muted-foreground">
              The addition of AI has only strengthened this belief.
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-6 font-display text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
              The future belongs to organizations that build smarter marketing
              systems and not the ones that simply build more marketing assets.
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
