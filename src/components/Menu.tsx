import seafood from "@/assets/dish-seafood.jpg";
import jollof from "@/assets/dish-jollof.jpg";
import drinks from "@/assets/dish-drinks.jpg";
import icecream from "@/assets/dish-icecream.jpg";

const dishes = [
  {
    name: "Seafood Rice",
    tag: "Signature",
    desc: "Premium taste wey dey burst brain. Prawns, mussels, crab, fish.",
    price: "₦19,500",
    size: "1000ml Bowl",
    img: seafood,
  },
  {
    name: "Smoky Party Jollof",
    tag: "ChopNsave",
    desc: "Wood-smoked party jollof with grilled or crispy chicken.",
    price: "₦3,300",
    size: "With Chicken",
    img: jollof,
  },
  {
    name: "Tropical Cocktails",
    tag: "Bar",
    desc: "Hand-crafted mocktails & cocktails. Karaoke fuel of choice.",
    price: "From ₦2,500",
    size: "Mixed Bar",
    img: drinks,
  },
  {
    name: "Ice Cream Sundae",
    tag: "Sweet",
    desc: "Loaded scoops, waffle, syrup. Childhood, but make it luxe.",
    price: "From ₦3,000",
    size: "Dessert",
    img: icecream,
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            The Menu
          </span>
          <h2 className="mt-4 font-display text-5xl font-bold sm:text-6xl">
            Premium taste,
            <br />
            <span className="text-gradient-gold italic">burst brain</span> energy.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            From signature seafood rice to smoky party jollof, every plate is built to be
            remembered. Available dine-in, take-away or delivered to your door.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {dishes.map((d, i) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur">
                  {d.tag}
                </span>
              </div>

              <div className="relative p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl font-bold">{d.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-sm">{d.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-2xl font-bold text-gradient-gold">
                      {d.price}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {d.size}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
