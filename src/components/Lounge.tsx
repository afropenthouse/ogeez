import lounge from "@/assets/lounge-interior.jpg";

const features = [
  { icon: "🍽", t: "Food" },
  { icon: "🍿", t: "Snacks" },
  { icon: "🍦", t: "Ice Cream" },
  { icon: "🍹", t: "Drinks" },
  { icon: "🎮", t: "Games" },
];

export function Lounge() {
  return (
    <section id="lounge" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={lounge} alt="Ogeez Lounge interior" loading="lazy" className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-8 -right-4 sm:right-8 rounded-2xl border border-primary/40 bg-card/95 p-6 backdrop-blur-xl glow-primary">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Karaoke</div>
            <div className="mt-1 font-display text-2xl font-bold">Every Friday</div>
            <div className="text-sm text-muted-foreground">From 6 PM</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            The Lounge
          </span>
          <h2 className="mt-4 font-display text-5xl font-bold sm:text-6xl">
            Celebrate your
            <br />
            <span className="text-gradient-gold italic">special moments.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our exclusive lounge is built for magical memories — book your night, dine
            with us, and walk away with a free cake on your special day.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {features.map((f) => (
              <div
                key={f.t}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium"
              >
                <span className="text-base">{f.icon}</span>
                {f.t}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Platters from</div>
              <div className="mt-2 font-display text-3xl font-bold text-gradient-gold">₦25,000</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Free cake</div>
              <div className="mt-2 font-display text-3xl font-bold text-gradient-gold">On us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
