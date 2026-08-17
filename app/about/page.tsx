import AboutHero from "./AboutHero";
import AboutVision from "./AboutVision";

export const metadata = {
  title: "About Us | BTN Organization",
  description:
    "Paving the Way for a Brighter, Sustainable Future. Learn about Better Tomorrow Foundation, our vision, mission, and leadership.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <AboutHero />
      <AboutVision />
    </main>
  );
}
