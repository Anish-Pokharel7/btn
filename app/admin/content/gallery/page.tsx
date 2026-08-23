import AdminPage from "@/app/admin/layout";
import { Plus, Search, MoreVertical, Edit, Trash2, Eye, Image, Upload, Filter, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  category: "Education" | "Healthcare" | "Environment" | "Women's Empowerment";
  src: string;
  alt: string;
  uploadedAt: string;
  uploadedBy: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Educational Books & Supplies",
    category: "Education",
    src: "/images/education.jpg",
    alt: "Stack of textbooks and educational supplies",
    uploadedAt: "2024-03-15",
    uploadedBy: "Admin",
  },
  {
    id: "2",
    title: "Healthcare Clinic & Vaccination",
    category: "Healthcare",
    src: "/images/healthcare.jpg",
    alt: "Healthcare worker providing medical care",
    uploadedAt: "2024-03-10",
    uploadedBy: "Content Manager",
  },
  {
    id: "3",
    title: "Tree Planting & Seedlings",
    category: "Environment",
    src: "/images/environment.jpg",
    alt: "Hands holding a green seedling in soil",
    uploadedAt: "2024-03-05",
    uploadedBy: "Admin",
  },
  {
    id: "4",
    title: "Smart Classroom Learning",
    category: "Education",
    src: "/images/school.jpg",
    alt: "Children engaged in classroom learning",
    uploadedAt: "2024-02-28",
    uploadedBy: "Content Manager",
  },
  {
    id: "5",
    title: "Clean Water Community Access",
    category: "Healthcare",
    src: "/images/water.jpg",
    alt: "Clean water facility for local village",
    uploadedAt: "2024-02-20",
    uploadedBy: "Admin",
  },
  {
    id: "6",
    title: "Joyful Smiling Children",
    category: "Education",
    src: "/images/children.jpg",
    alt: "Smiling children celebrating together",
    uploadedAt: "2024-02-15",
    uploadedBy: "Content Manager",
  },
];

const categories = ["All", "Education", "Healthcare", "Environment", "Women's Empowerment"] as const;

function CategoryBadge({ category }: { category: GalleryItem["category"] }) {
  const colors: Record<GalleryItem["category"], string> = {
    Education: "bg-blue-100 text-blue-700",
    Healthcare: "bg-rose-100 text-rose-700",
    Environment: "bg-emerald-100 text-emerald-700",
    "Women's Empowerment": "bg-purple-100 text-purple-700",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors[category]}`}>
      {category}
    </span>
  );
}

function ActionDropdown({ item }: { item: GalleryItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        className="p-2 rounded-lg text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors"
        aria-label="More actions"
        aria-expanded={open}
      >
        <MoreVertical className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl border border-[#E2E8F0] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 z-10">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB] w-full text-left">
            <Eye className="w-4 h-4" /> View
          </button>
          <Link href={`/admin/content/gallery/${item.id}/edit`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
            <Edit className="w-4 h-4" /> Edit
          </Link>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 w-full text-left">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<typeof categories[number]>("All");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.alt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleSelect = (id: string) => {
    setSelectedItems((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map((i) => i.id));
    }
  };

  return (
    <AdminPage title="Gallery Management">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#64748B]">Manage gallery images and media</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setUploadModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FD6100] hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all"
          >
            <Upload className="w-5 h-5" />
            Upload Images
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
            <input
              type="search"
              placeholder="Search images..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  categoryFilter === cat
                    ? "bg-[#012358] text-white"
                    : "bg-[#F8F9FB] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#012358]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="bg-[#FD6100]/10 border border-[#FD6100]/30 rounded-xl p-3 mb-6 flex items-center justify-between">
          <span className="text-sm text-[#FD6100] font-medium">{selectedItems.length} selected</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-rose-500 hover:bg-rose-50 rounded-lg">Delete</button>
            <button onClick={() => setSelectedItems([])} className="p-1.5 text-[#64748B] hover:text-[#012358]"><X className="w-5 h-5" /></button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {filteredItems.map((item) => (
            <label
              key={item.id}
              className={`relative group cursor-pointer aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                selectedItems.includes(item.id) ? "border-[#FD6100] ring-2 ring-[#FD6100]/20" : "border-[#E2E8F0] hover:border-[#005DCD]/50"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="absolute top-2 left-2 z-10 w-5 h-5 accent-[#FD6100] bg-white border-[#E2E8F0]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-semibold w-full truncate block">{item.title}</span>
              </div>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
                <CategoryBadge category={item.category} />
              </div>
              <ActionDropdown item={item} />
            </label>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="p-12 text-center">
            <Image className="w-12 h-12 text-[#E2E8F0] mx-auto mb-4" />
            <p className="text-[#64748B]">No images found</p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => setUploadModalOpen(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#012358]">Upload Images</h3>
              <button onClick={() => setUploadModalOpen(false)} className="p-2 rounded-lg text-[#64748B] hover:bg-[#F8F9FB]"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-[#E2E8F0] rounded-xl p-8 text-center hover:border-[#005DCD] transition-colors mb-4">
                <Upload className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" />
                <p className="text-[#64748B] mb-1">Drag & drop images here, or click to browse</p>
                <p className="text-xs text-[#94A3B8]">Supports: JPG, PNG, WebP (max 5MB each)</p>
                <input type="file" multiple accept="image/*" className="hidden" id="gallery-upload" />
                <button onClick={() => document.getElementById("gallery-upload")?.click()} className="mt-3 px-4 py-2 bg-[#005DCD] text-white rounded-xl text-sm font-medium hover:bg-[#005DCD]/90">Browse Files</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#012358] mb-1">Category</label>
                  <select className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15">
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Environment">Environment</option>
                    <option value="Women's Empowerment">Women's Empowerment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#012358] mb-1">Alt Text (for accessibility)</label>
                  <input type="text" placeholder="Describe the image..." className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => setUploadModalOpen(false)} className="px-4 py-2.5 text-sm font-medium text-[#64748B] hover:bg-[#F8F9FB] rounded-xl">Cancel</button>
                <button className="px-4 py-2.5 text-sm font-medium text-white bg-[#FD6100] hover:bg-[#e05700] rounded-xl">Upload Images</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPage>
  );
}