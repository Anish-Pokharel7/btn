import AdminPage from "@/app/admin/layout";
import { Plus, Search, MoreVertical, Edit, Trash2, Eye, MapPin, Clock, FolderKanban } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  status: "Ongoing" | "Completed" | "Draft";
  progress: number;
  budget: string;
  beneficiaries: string;
  createdAt: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Rural Smart School Initiative",
    location: "Eastern District",
    description: "Building solar-powered computer labs and libraries for 12 rural primary schools.",
    image: "/images/school.jpg",
    status: "Ongoing",
    progress: 65,
    budget: "₹25,00,000",
    beneficiaries: "1,200 Students",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Safe Drinking Water Access",
    location: "Northern Plains",
    description: "Installing deep tube wells and solar filtration systems in drought-prone remote villages.",
    image: "/images/water.jpg",
    status: "Ongoing",
    progress: 40,
    budget: "₹18,00,000",
    beneficiaries: "5,000 Villagers",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    title: "Green Hills Afforestation",
    location: "Southern Hills",
    description: "Planted over 10,000 native saplings with community involvement to prevent soil erosion.",
    image: "/images/environment.jpg",
    status: "Completed",
    progress: 100,
    budget: "₹12,00,000",
    beneficiaries: "Entire Community",
    createdAt: "2023-11-10",
  },
];

function StatusBadge({ status }: { status: Project["status"] }) {
  const variants = {
    Ongoing: "bg-emerald-100 text-emerald-700",
    Completed: "bg-slate-100 text-slate-700",
    Draft: "bg-amber-100 text-amber-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[status]}`}>
      {status}
    </span>
  );
}

function ActionDropdown({ project }: { project: Project }) {
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
          <Link href={`/admin/content/projects/${project.id}`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
            <Eye className="w-4 h-4" /> View
          </Link>
          <Link href={`/admin/content/projects/${project.id}/edit`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
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

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminPage title="Projects Management">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#64748B]">Manage field projects across regions</h2>
        </div>
        <Link
          href="/admin/content/projects/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FD6100] hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </Link>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
            <input
              type="search"
              placeholder="Search projects..."
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
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E2E8F0] bg-[#F8F9FB]">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Budget</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Beneficiaries</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-[#64748B] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]/50">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-[#F8F9FB] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-[#012358]">{project.title}</p>
                        <p className="text-xs text-[#64748B] truncate max-w-xs">{project.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-[#64748B] text-sm">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><StatusBadge status={project.status} /></td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1">
                        <div
                          className="h-full bg-[#005DCD] rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-[#64748B]">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#012358]">{project.budget}</td>
                  <td className="px-6 py-4 text-[#64748B]">{project.beneficiaries}</td>
                  <td className="px-6 py-4 text-[#64748B] text-sm">
                    <Clock className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                    {new Date(project.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4 text-right"><ActionDropdown project={project} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredProjects.length === 0 && (
          <div className="px-6 py-12 text-center">
            <FolderKanban className="w-12 h-12 text-[#E2E8F0] mx-auto mb-4" />
            <p className="text-[#64748B]">No projects found</p>
          </div>
        )}
      </div>
    </AdminPage>
  );
}