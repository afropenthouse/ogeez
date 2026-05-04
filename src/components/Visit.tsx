const locations = [
  {
    name: "Ogeez Recipe",
    address: "2nd Floor, E-Center Mall (Ozone Cinema), Sabo-Yaba",
    phone: "0814 095 6939",
  },
  {
    name: "Ogeez Quick Service",
    address: "Opp 33, Moronfolu Street, Off Pako, Akoka Bus Stop, Yaba",
    phone: "0708 108 0925",
  },
];

export function Visit() {
  return (
    <section id="visit" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Find Us
          </span>
          <h2 className="mt-4 font-display text-5xl font-bold sm:text-6xl">
            Two locations.
            <br />
            <span className="text-gradient-gold italic">One vibe.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {locations.map((l, i) => (
            <div
              key={l.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 transition-all hover:border-primary/40"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.25em] text-primary">
                  Branch {i + 1}
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold">{l.name}</h3>
                <div className="mt-6 flex items-start gap-3 text-muted-foreground">
                  <svg className="h-5 w-5 shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
                  <span>{l.address}</span>
                </div>
                <a
                  href={`tel:${l.phone.replace(/\s/g, "")}`}
                  className="mt-3 flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.5 9.8a14 14 0 006.7 6.7l1.47-1.68a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.4 21 3 14.6 3 6V5z" /></svg>
                  <span className="font-medium">{l.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
