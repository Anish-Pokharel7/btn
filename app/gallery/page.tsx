"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Education" | "Healthcare" | "Environment";
  src: string;
  alt: string;
}

const categories = ["All Photos", "Education", "Healthcare", "Environment"] as const;
type Category = (typeof categories)[number];

const galleryItems: GalleryItem[] = [
  {
    id: "item-1",
    title: "Educational Books & Supplies",
    category: "Education",
    src: "/images/education.jpg",
    alt: "Stack of textbooks and educational supplies",
  },
  {
    id: "item-2",
    title: "Healthcare Clinic & Vaccination",
    category: "Healthcare",
    src: "/images/healthcare.jpg",
    alt: "Healthcare worker providing medical care",
  },
  {
    id: "item-3",
    title: "Tree Planting & Seedlings",
    category: "Environment",
    src: "/images/environment.jpg",
    alt: "Hands holding a green seedling in soil",
  },
  {
    id: "item-4",
    title: "Smart Classroom Learning",
    category: "Education",
    src: "/images/school.jpg",
    alt: "Children engaged in classroom learning",
  },
  {
    id: "item-5",
    title: "Clean Water Community Access",
    category: "Healthcare",
    src: "/images/water.jpg",
    alt: "Clean water facility for local village",
  },
  {
    id: "item-6",
    title: "Joyful Smiling Children",
    category: "Education",
    src: "/images/children.jpg",
    alt: "Smiling children celebrating together",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All Photos");

  const filteredItems =
    selectedCategory === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      {/* Gallery Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-tight mb-3 sm:mb-4">
              Our Gallery in Action
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
              A glimpse into our ground operations, community workshops, and smiling faces.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0284c7] text-white shadow-sm font-semibold"
                      : "bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:text-slate-950 hover:bg-slate-50/80"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-semibold drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
