import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Core Programs | BTN Organization",
  description:
    "Comprehensive programs curated to create lasting, multi-generational impact across communities: Education, Healthcare, Women's Empowerment, and Environmental Conservation.",
};

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const programs: Program[] = [
  {
    id: "education",
    title: "Education",
    description:
      "Providing school supplies, infrastructure development, and after-school tutoring for underprivileged children.",
    image: "/images/education.jpg",
    href: "/programs/education",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Mobile medical clinics, vaccination drives, and maternal health education in remote rural regions.",
    image: "/images/healthcare.jpg",
    href: "/programs/healthcare",
  },
  {
    id: "womens-empowerment",
    title: "Women's Empowerment",
    description:
      "Vocational training, micro-loans, and leadership workshops supporting financial independence.",
    image: "/images/women.jpg",
    href: "/programs/womens-empowerment",
  },
  {
    id: "environmental-conservation",
    title: "Environmental Conservation",
    description:
      "Mass afforestation drives, clean water accessibility, and community recycling initiatives.",
    image: "/images/environment.jpg",
    href: "/programs/environmental-conservation",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      {/* Core Programs Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <span className="text-[#0fb77a] font-bold tracking-wider text-xs sm:text-sm uppercase block mb-2 sm:mb-3">
              WHAT WE DO
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Our Core Programs
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
              Comprehensive programs curated to create lasting, multi-generational
              impact across communities.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group flex flex-col bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Card Top Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug mb-2.5 group-hover:text-[#0fb77a] transition-colors">
                      {program.title}
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  {/* Card Link */}
                  <div className="pt-2">
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-1 text-[#0284c7] hover:text-sky-700 font-semibold text-xs sm:text-sm transition-colors group/link"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
