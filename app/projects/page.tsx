import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects | BTN Organization",
  description:
    "Discover our ongoing and successfully completed field projects across the country, creating real change in rural communities.",
};

interface Project {
  id: string;
  location: string;
  title: string;
  description: string;
  image: string;
  status: "Ongoing" | "Completed";
  progress: number;
  budget: string;
  beneficiaries: string;
}

const projects: Project[] = [
  {
    id: "rural-smart-school",
    location: "EASTERN DISTRICT",
    title: "Rural Smart School Initiative",
    description:
      "Building solar-powered computer labs and libraries for 12 rural primary schools.",
    image: "/images/school.jpg",
    status: "Ongoing",
    progress: 0,
    budget: "Budget: 00",
    beneficiaries: "0 Beneficiaries",
  },
  {
    id: "safe-drinking-water",
    location: "NORTHERN PLAINS",
    title: "Safe Drinking Water Access",
    description:
      "Installing deep tube wells and solar filtration systems in drought-prone remote villages.",
    image: "/images/water.jpg",
    status: "Ongoing",
    progress: 0,
    budget: "Budget: 0",
    beneficiaries: "0 Beneficiaries",
  },
  {
    id: "green-hills-afforestation",
    location: "SOUTHERN HILLS",
    title: "Green Hills Afforestation",
    description:
      "Planted over 0 native saplings with community involvement to prevent soil erosion.",
    image: "/images/environment.jpg",
    status: "Completed",
    progress: 0,
    budget: "Budget: 0",
    beneficiaries: "Entire Community",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      {/* Featured Projects Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <span className="text-[#0284c7] font-bold tracking-wider text-xs sm:text-sm uppercase block mb-2 sm:mb-3">
              OUR TRACK RECORD
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Featured Projects
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
              Discover our ongoing and successfully completed field projects across
              the country.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Card Top Image with Status Badge */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm ${
                        project.status === "Ongoing"
                          ? "bg-[#0fb77a]"
                          : "bg-[#334155]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 bg-white justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-[#0284c7] font-bold text-xs tracking-wider uppercase mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug mb-2.5 group-hover:text-[#0284c7] transition-colors">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Progress & Stats Area */}
                  <div className="pt-2">
                    {/* Progress Bar Header */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium text-slate-600">Progress</span>
                      <span className="font-semibold text-slate-900">
                        {project.progress}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-5">
                      <div
                        className="h-full bg-[#0284c7] rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>

                    {/* Footer Stats */}
                    <div className="flex items-center justify-between text-xs text-slate-600 font-medium pt-3 border-t border-slate-100">
                      <span>{project.budget}</span>
                      <span className="font-semibold text-slate-800">
                        {project.beneficiaries}
                      </span>
                    </div>
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
