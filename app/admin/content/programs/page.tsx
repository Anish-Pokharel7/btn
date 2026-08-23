"use client";

import Image from "next/image";
import { Plus, Search, MoreVertical, Edit, Trash2, Eye, Building2, Users, Heart, Sprout, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Education" | "Healthcare" | "Women's Empowerment" | "Environment";
  status: "Active" | "Inactive" | "Draft";
  volunteers: number;
  beneficiaries: number;
  createdAt: string;
}

const programs: Program[] = [
  {
    id: "1",
    title: "Education",
    description: "Providing school supplies, infrastructure development, and after-school tutoring for underprivileged children.",
    image: "/images/education.jpg",
    category: "Education",
    status: "Active",
    volunteers: 45,
    beneficiaries: 1200,
    createdAt: "2024-01-10",
  },
  {
    id: "2",
    title: "Healthcare",
    description: "Mobile medical clinics, vaccination drives, and maternal health education in remote rural regions.",
    image: "/images/healthcare.jpg",
    category: "Healthcare",
    status: "Active",
    volunteers: 32,
    beneficiaries: 3500,
    createdAt: "2024-01-15",
  },
  {
    id: "3",
    title: "Women's Empowerment",
    description: "Vocational training, micro-loans, and leadership workshops supporting financial independence.",
    image: "/images/women.jpg",
    category: "Women's Empowerment",
    status: "Active",
    volunteers: 28,
    beneficiaries: 800,
    createdAt: "2024-02-01",
  },
  {
    id: "4",
    title: "Environmental Conservation",
    description: "Mass afforestation drives, clean water accessibility, and community recycling initiatives.",
    image: "/images/environment.jpg",
    category: "Environment",
    status: "Active",
    volunteers: 56,
    beneficiaries: 15000,
    createdAt: "2024-02-15",
  },
];

const categoryIcons: Record<Program["category"], React.ReactNode> = {
  Education: <Building2 className="w-5 h-5" />,
  Healthcare: <Heart className="w-5 h-5" />,
  "Women's Empowerment": <Users className="w-5 h-5" />,
  Environment: <Sprout className="w-5 h-5" />,
};

const categoryColors: Record<Program["category"], string> = {
  Education: "bg-blue-100 text-blue-700",
  Healthcare: "bg-rose-100 text-rose-700",
  "Women's Empowerment": "bg-purple-100 text-purple-700",
  Environment: "bg-emerald-100 text-emerald-700",
};

function StatusBadge({ status }: { status: Program["status"] }) {
  const variants = {
    Active: "bg-emerald-100 text-emerald-700",
    Inactive: "bg-slate-100 text-slate-700",
    Draft: "bg-amber-100 text-amber-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[status]}`}>
      {status}
    </span>
  );
}

function ActionDropdown({ program }: { program: Program }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors"
        aria-label="More actions"
        aria-expanded={open}
      >
        <MoreVertical className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl border border-[#E2E8F0] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 z-10">
          <Link href={`/admin/content/programs/${program.id}`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
            <Eye className="w-4 h-4" /> View
          </Link>
          <Link href={`/admin/content/programs/${program.id}/edit`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
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

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProgram, setNewProgram] = useState({
    title: "", description: "", category: "Education" as Program["category"], status: "Active" as Program["status"],
  });

  const filteredPrograms = programs.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#012358] tracking-tight">Programs Management</h2>
          <p className="text-[#64748B] text-sm md:text-base mt-1">Manage core programs and initiatives</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FD6100] hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Program
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
            <input
              type="search"
              placeholder="Search programs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 min-w-[160px]"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg hover:border-[#005DCD]/30 transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute top-3 right-3">
                <StatusBadge status={program.status} />
              </div>
              <div className="absolute bottom-3 left-3">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[program.category]}`}>
                  {categoryIcons[program.category]}
                  {program.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-[#012358] text-lg mb-2 line-clamp-1">{program.title}</h3>
              <p className="text-[#64748B] text-sm mb-4 line-clamp-2">{program.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#F8F9FB] rounded-xl p-3 text-center">
                  <p className="text-2xl font-extrabold text-[#012358]">{program.volunteers}</p>
                  <p className="text-xs text-[#64748B]">Volunteers</p>
                </div>
                <div className="bg-[#F8F9FB] rounded-xl p-3 text-center">
                  <p className="text-2xl font-extrabold text-[#012358]">{program.beneficiaries.toLocaleString()}</p>
                  <p className="text-xs text-[#64748B]">Beneficiaries</p>
                </div>
              </div>
              <ActionDropdown program={program} />
            </div>
          </div>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-12 text-center">
          <Building2 className="w-12 h-12 text-[#E2E8F0] mx-auto mb-4" />
          <p className="text-[#64748B]">No programs found</p>
        </div>
      )}

      {/* Add Program Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-lg font-bold text-[#012358]">Add New Program</h3>
              <button onClick={() => setShowAddModal(false)} className="p-2 rounded-lg text-[#64748B] hover:bg-[#F8F9FB] cursor-pointer"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#012358] mb-1">Program Title <span className="text-rose-500">*</span></label>
                <input type="text" placeholder="Enter program title" value={newProgram.title} onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })} className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#012358] mb-1">Category</label>
                  <select value={newProgram.category} onChange={(e) => setNewProgram({ ...newProgram, category: e.target.value as Program["category"] })} className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15">
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Women's Empowerment">Women&apos;s Empowerment</option>
                    <option value="Environment">Environment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#012358] mb-1">Status</label>
                  <select value={newProgram.status} onChange={(e) => setNewProgram({ ...newProgram, status: e.target.value as Program["status"] })} className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#012358] mb-1">Description</label>
                <textarea rows={3} placeholder="Describe the program..." value={newProgram.description} onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })} className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 resize-none" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button onClick={() => setShowAddModal(false)} className="px-4 py-2.5 text-sm font-medium text-[#64748B] hover:bg-[#F8F9FB] rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button onClick={() => setShowAddModal(false)} className="px-5 py-2.5 text-sm font-semibold text-white bg-[#FD6100] hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Create Program</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}