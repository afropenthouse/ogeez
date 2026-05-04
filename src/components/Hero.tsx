import heroFood from "@/assets/hero-food.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="Signature Ogeez jollof rice with grilled chicken"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Sabo-Yaba, Lagos
          </span>

          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            Eat. Chill.
            <br />
            <span className="text-gradient-gold italic">Repeat.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ogeez Lounge & Restaurant — where premium Nigerian flavour meets
            late-night vibes. Smoky party jollof, seafood like never before,
            karaoke Fridays and free delivery to your door.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-20px] shadow-primary/60 transition-transform hover:scale-105"
            >
              View the Menu
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
              href="https://wa.me/2348108243506"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4 7.94 7.94 0 0 0 5.1 15.83L4 20l4.27-1.12a7.93 7.93 0 0 0 3.79.97h.01a7.94 7.94 0 0 0 5.53-13.53zM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.53.66.68-2.47-.16-.25a6.59 6.59 0 1 1 12.23-3.49 6.59 6.59 0 0 1-6.61 6.61z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { v: "5★", l: "Karaoke Fridays" },
              { v: "₦25k", l: "Platters from" },
              { v: "Free", l: "Delivery" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
