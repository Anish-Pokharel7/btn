import Image from "next/image";
import Link from "next/link";
import { Heart, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiteHero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-start overflow-hidden py-16 md:py-24">
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

      {/* Hero Content — constrained max-width, aligned with navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl flex flex-col items-start text-left gap-6 md:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#012358]/70 border border-[#005DCD]/50 text-blue-200 text-sm sm:text-base font-medium shadow-sm backdrop-blur-md">
            <Sprout className="w-4 h-4 text-blue-300 shrink-0" />
            <span>Empowering Lives Since 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Together We Build a{" "}
            <span className="text-[#005DCD] font-bold">Better</span>
            <span className="block text-[#FD6100] font-bold mt-1">Tomorrow</span>
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
              className="h-auto bg-[#FD6100] hover:bg-[#e05700] text-white font-semibold text-base sm:text-lg px-7 py-3.5 rounded-2xl shadow-lg transition-all duration-200 border-0 cursor-pointer"
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
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfV39BVLOhuJ2iFS3WWAcaZPGFVyWatiUU6HQ-Gp0CGMejv5g/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Become a Volunteer</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
