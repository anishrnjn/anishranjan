export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row lg:px-10">
        <div className="font-display font-bold tracking-[0.18em] text-foreground">
          ANISH<span className="text-muted-foreground/60">·</span>RANJAN
        </div>
        <div>© {new Date().getFullYear()} Anish Ranjan. All rights reserved.</div>
        <div>Brand · Content · Creative · Marcom</div>
      </div>
    </footer>
  );
}
