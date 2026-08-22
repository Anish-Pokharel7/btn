import SiteHero from "@/components/site/SiteHero";
import Gallery from "@/components/site/SiteGallery";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <SiteHero />
      <Gallery />
    </main>
  );
}
