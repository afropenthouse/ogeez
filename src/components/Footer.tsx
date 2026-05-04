import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Ogeez Lounge & Restaurant. Premium Nigerian flavour, lounge vibes & free
              delivery. Sabo-Yaba, Lagos.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Visit</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#menu" className="hover:text-foreground">Menu</a></li>
              <li><a href="#lounge" className="hover:text-foreground">Lounge</a></li>
              <li><a href="#delivery" className="hover:text-foreground">Delivery</a></li>
              <li><a href="#visit" className="hover:text-foreground">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="https://instagram.com/ogeezrecipe" className="hover:text-foreground">@ogeezrecipe</a></li>
              <li><a href="https://instagram.com/ogeezquickservice" className="hover:text-foreground">@ogeezquickservice</a></li>
              <li><a href="https://tiktok.com/@ogeezlounge" className="hover:text-foreground">TikTok: ogeezlounge</a></li>
              <li><a href="https://wa.me/2348108243506" className="hover:text-foreground">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ogeez Lounge & Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Order Now. <span className="text-primary font-semibold not-italic">No dull.</span> 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
