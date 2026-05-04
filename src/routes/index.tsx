import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Lounge } from "@/components/Lounge";
import { Delivery } from "@/components/Delivery";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ogeez Lounge & Restaurant — Eat. Chill. Repeat." },
      { name: "description", content: "Premium Nigerian cuisine, lounge vibes, karaoke Fridays and free delivery in Yaba. Smoky party jollof, signature seafood rice & more." },
      { property: "og:title", content: "Ogeez — Eat. Chill. Repeat." },
      { property: "og:description", content: "Premium Nigerian flavour, lounge vibes & free delivery. Sabo-Yaba, Lagos." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Menu />
      <Lounge />
      <Delivery />
      <Visit />
      <Footer />
    </main>
  );
}
