import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Target } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 overflow-hidden px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Image with floating quote card */}
          <div className="lg:col-span-6 relative pb-10 sm:pb-8 lg:pb-0 group">
            {/* Main Image with Pop-up Shadow Effect */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.32),0_12px_28px_-8px_rgba(0,0,0,0.18)] ring-1 ring-black/5 bg-slate-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_38px_85px_-18px_rgba(0,0,0,0.42),0_18px_38px_-8px_rgba(0,0,0,0.22)]">
              <Image
                src="/images/children.jpg"
                alt="Children smiling together"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-2 right-2 sm:-bottom-4 sm:right-4 md:-bottom-6 md:right-2 lg:-bottom-6 lg:-right-4 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.22)] border border-slate-100 max-w-[280px] sm:max-w-xs z-10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-slate-900 font-bold text-sm sm:text-base leading-snug">
                &ldquo;Rooted in compassion, driven by sustainable action.&rdquo;
              </p>
              <span className="block text-[#0fb77a] font-semibold text-xs sm:text-sm mt-2.5">
                — Founder &amp; Executive Director
              </span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tagline */}
            <span className="text-[#0284c7] font-bold tracking-wider text-xs sm:text-sm uppercase mb-3">
              ABOUT OUR FOUNDATION
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-[1.18] mb-5">
              Paving the Way for a Brighter,
              <span className="block">Sustainable Future</span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-[1.05rem] leading-relaxed mb-8">
              Established in 2026, Better Tomorrow Foundation started as a
              grassroots initiative by a small group of educators and social
              workers. Today, we operate across multiple regions, implementing
              programs that address core systemic challenges.
            </p>

            {/* Vision & Mission Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 w-full mb-8">
              {/* Our Vision */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                    An equitable world where every individual has access to
                    opportunities, dignity, and a healthy environment.
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0fb77a] flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                    To empower vulnerable communities through education,
                    healthcare, and sustainable environmental practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Link */}
            <Link
              href="/governance"
              className="inline-flex items-center gap-1.5 text-[#0284c7] hover:text-sky-700 font-semibold text-sm sm:text-base transition-colors group cursor-pointer"
            >
              <span>Learn more about our governance &amp; reports</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
