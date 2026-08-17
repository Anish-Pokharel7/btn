import Image from "next/image";
import { Eye, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const visionPoints = [
  "Universal access to quality healthcare in underserved communities",
  "Equitable education opportunities for every child, regardless of background",
  "Sustainable environmental practices that preserve future generations",
  "Empowered women leading change across all regions we serve",
];

export default function AboutVision() {
  return (
    <section className="w-full bg-slate-50 py-14 md:py-20 lg:py-28 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-20 items-center">

          {/* Right Column: Image */}
          <div className="relative group order-1 lg:order-2">
            {/* Decorative background blob */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-emerald-50 to-teal-100 opacity-60 blur-xl -z-10 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Image container */}
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_28px_65px_-15px_rgba(0,0,0,0.30),0_12px_28px_-8px_rgba(0,0,0,0.16)] ring-1 ring-black/5 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_40px_90px_-18px_rgba(0,0,0,0.38),0_18px_40px_-10px_rgba(0,0,0,0.20)]">
              <Image
                src="/images/doctor.jpg"
                alt="Healthcare workers serving the community"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 lg:-left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.20)] border border-slate-100 z-10 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <p className="text-3xl font-extrabold text-slate-900 leading-none">
                12<span className="text-[#0fb77a]">+</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Regions Served
              </p>
            </div>

            {/* Floating badge card */}
            <div className="absolute -top-4 -right-3 sm:-right-5 lg:-right-6 bg-[#0284c7]/90 backdrop-blur-sm rounded-2xl px-4 py-3.5 shadow-lg z-10 text-white transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <p className="text-2xl font-extrabold leading-none">
                5K<span className="text-sky-200">+</span>
              </p>
              <p className="text-xs font-medium text-sky-100 mt-1">
                Lives Impacted
              </p>
            </div>
          </div>

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-[#0284c7] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 border border-sky-200/60">
              <Eye className="w-3.5 h-3.5" />
              <span>Our Vision</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-slate-950 tracking-tight leading-[1.18] mb-5">
              An Equitable World for{" "}
              <span className="text-[#0284c7]">Every Individual</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-[1.05rem] leading-relaxed mb-8">
              We envision a world where every person — regardless of geography,
              gender, or circumstance — has access to the resources, dignity, and
              opportunity to thrive. Our healthcare programs are a direct
              expression of this belief, bringing professional medical attention
              to those who need it most.
            </p>

            {/* Vision Points */}
            <ul className="flex flex-col gap-3.5 w-full mb-9">
              {visionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0fb77a] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Link */}
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-[#0284c7] hover:text-sky-700 font-semibold text-sm sm:text-base transition-colors group cursor-pointer"
            >
              <span>Explore our programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}