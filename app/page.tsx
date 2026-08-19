import SiteHero from "@/components/site/SiteHero";
import Gallery from "@/app/gallery/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <SiteHero />
      <Gallery />
    </main>
  );
}
