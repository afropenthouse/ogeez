export function Delivery() {
  return (
    <section id="delivery" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/30 p-12 sm:p-16 lg:p-20" style={{ background: "var(--gradient-hero)" }}>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, oklch(0.18 0.02 120) 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }} />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-primary-foreground">
              <span className="inline-block rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                Ogeez Recipe
              </span>
              <h2 className="mt-6 font-display text-6xl font-bold leading-none sm:text-7xl">
                Free
                <br />
                <span className="italic">Delivery.</span>
              </h2>
              <p className="mt-6 text-lg max-w-md opacity-90">
                Get food delivered free to your doorstep. Valid for selected areas,
                minimum order applies. Available on Glovo & Chowdeck — or call us direct.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="tel:08108243506"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105"
                >
                  📞 Order: 0810 824 3506
                </a>
                <a
                  href="https://wa.me/2348108243506"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Bike illustration / stat panel */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "30min", l: "Avg delivery" },
                  { v: "Glovo", l: "& Chowdeck" },
                  { v: "Yaba", l: "Hot zones" },
                  { v: "24/7", l: "WhatsApp" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-foreground/5 backdrop-blur border border-foreground/10 p-6 text-primary-foreground">
                    <div className="font-display text-3xl font-bold">{s.v}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider opacity-80">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
