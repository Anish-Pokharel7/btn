import Image from "next/image";
import Link from "next/link";
import { Heart, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiteHero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-start overflow-hidden px-4 md:px-8 lg:px-12 py-16 md:py-24">
      {/* Background Image from public/logo/hero.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logo/hero.png"
          alt="Fresh produce background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/65 backdrop-brightness-75" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-start text-left gap-6 md:gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-sm sm:text-base font-medium shadow-sm backdrop-blur-md">
          <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Empowering Lives Since 2026</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Together We Build a{" "}
          <span className="text-[#0284c7] font-bold">Better</span>
          <span className="block text-[#0fb77a] font-bold mt-1">Tomorrow</span>
        </h1>

        {/* Description */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
          We are dedicated to uplifting underprivileged communities through
          comprehensive education, sustainable healthcare, environmental
          preservation, and women&apos;s empowerment initiatives.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Donate Now Button */}
          <Button
            asChild
            className="h-auto bg-[#0fb77a] hover:bg-[#0da26c] text-white font-semibold text-base sm:text-lg px-7 py-3.5 rounded-2xl shadow-lg transition-all duration-200 border-0 cursor-pointer"
          >
            <Link href="/donate" className="inline-flex items-center gap-2.5">
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>Donate Now</span>
            </Link>
          </Button>

          {/* Become a Volunteer Button */}
          <Button
            asChild
            variant="outline"
            className="h-auto bg-[#24292e]/70 hover:bg-[#2f353d]/90 text-white border border-white/20 backdrop-blur-md font-semibold text-base sm:text-lg px-7 py-3.5 rounded-2xl shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Link href="/volunteer">
              <span>Become a Volunteer</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
