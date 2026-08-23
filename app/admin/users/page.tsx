import AdminPage from "@/app/admin/layout";
import { Search, Filter, MoreVertical, Edit, Trash2, Eye, Users, UserPlus, Mail, Shield, UserCheck, UserX, Activity, Calendar, Heart, DollarSign } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "Volunteer" | "Donor";
  status: "Active" | "Inactive" | "Pending" | "Suspended";
  avatar?: string;
  joinedAt: string;
  lastActive: string;
  donationsCount: number;
  totalDonated: number;
}

const users: User[] = [
  {
    id: "USR-001",
    name: "Admin User",
    email: "admin@btn.org",
    role: "Admin",
    status: "Active",
    joinedAt: "2024-01-01",
    lastActive: "2024-03-15T10:30:00Z",
    donationsCount: 0,
    totalDonated: 0,
  },
  {
    id: "USR-002",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    role: "Manager",
    status: "Active",
    joinedAt: "2024-01-15",
    lastActive: "2024-03-14T15:45:00Z",
    donationsCount: 12,
    totalDonated: 45000,
  },
  {
    id: "USR-003",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    role: "Volunteer",
    status: "Active",
    joinedAt: "2024-02-01",
    lastActive: "2024-03-13T09:15:00Z",
    donationsCount: 5,
    totalDonated: 25000,
  },
  {
    id: "USR-004",
    name: "Amit Patel",
    email: "amit.patel@email.com",
    role: "Donor",
    status: "Active",
    joinedAt: "2024-02-10",
    lastActive: "2024-03-12T14:20:00Z",
    donationsCount: 8,
    totalDonated: 60000,
  },
  {
    id: "USR-005",
    name: "Sunita Devi",
    email: "sunita.devi@email.com",
    role: "Volunteer",
    status: "Inactive",
    joinedAt: "2024-01-20",
    lastActive: "2024-02-28T11:00:00Z",
    donationsCount: 3,
    totalDonated: 15000,
  },
  {
    id: "USR-006",
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    role: "Donor",
    status: "Pending",
    joinedAt: "2024-03-01",
    lastActive: "2024-03-10T16:30:00Z",
    donationsCount: 1,
    totalDonated: 3000,
  },
  {
    id: "USR-007",
    name: "Meera Reddy",
    email: "meera.reddy@email.com",
    role: "Manager",
    status: "Active",
    joinedAt: "2024-02-15",
    lastActive: "2024-03-15T08:00:00Z",
    donationsCount: 0,
    totalDonated: 0,
  },
];

const roleConfig = {
  Admin: { color: "bg-purple-100 text-purple-700", icon: Shield },
  Manager: { color: "bg-blue-100 text-blue-700", icon: Users },
  Volunteer: { color: "bg-emerald-100 text-emerald-700", icon: UserCheck },
  Donor: { color: "bg-orange-100 text-orange-700", icon: Heart },
} as const;

const statusConfig = {
  Active: { color: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
  Inactive: { color: "bg-slate-100 text-slate-700", dot: "bg-slate-400" },
  Pending: { color: "bg-amber-100 text-amber-700", dot: "bg-amber-500" },
  Suspended: { color: "bg-rose-100 text-rose-700", dot: "bg-rose-500" },
} as const;

function RoleBadge({ role }: { role: User["role"] }) {
  const config = roleConfig[role];
  const Icon = config.icon;
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      <Icon className="w-3.5 h-3.5" />
      {role}
    </span>
  );
}

function StatusBadge({ status }: { status: User["status"] }) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      <span className={`w-2 h-2 rounded-full ${config.dot}`} />
      {status}
    </span>
  );
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function ActionDropdown({ user }: { user: User }) {
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
        <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl border border-[#E2E8F0] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 z-10">
          <Link href={`/admin/users/${user.id}`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
            <Eye className="w-4 h-4" /> View Profile
          </Link>
          <Link href={`/admin/users/${user.id}/edit`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
            <Edit className="w-4 h-4" /> Edit
          </Link>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-[#005DCD] hover:bg-blue-50 w-full text-left">
            <Mail className="w-4 h-4" /> Send Email
          </button>
          {user.status === "Active" && (
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-amber-500 hover:bg-amber-50 w-full text-left">
              <UserX className="w-4 h-4" /> Suspend
            </button>
          )}
          {user.status !== "Active" && (
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-emerald-500 hover:bg-emerald-50 w-full text-left">
              <UserCheck className="w-4 h-4" /> Activate
            </button>
          )}
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 w-full text-left">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      )}
    </div>
  );
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateTime(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(amount);
}

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    const matchesStatus = statusFilter === "all" || u.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const stats = {
    total: users.length,
    active: users.filter((u) => u.status === "Active").length,
    donors: users.filter((u) => u.role === "Donor").length,
    volunteers: users.filter((u) => u.role === "Volunteer").length,
    totalDonations: users.reduce((sum, u) => sum + u.totalDonated, 0),
  };

  return (
    <AdminPage title="Users Management">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Total Users</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{stats.total}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Active Users</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{stats.active}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Donors</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{stats.donors}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Volunteers</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{stats.volunteers}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Total Donated</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{formatCurrency(stats.totalDonations)}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
            <input
              type="search"
              placeholder="Search users (name, email, ID)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
            />
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 min-w-[140px]"
          >
            <option value="all">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Donor">Donor</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 min-w-[140px]"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E2E8F0] bg-[#F8F9FB]">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Donations</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Total Donated</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-[#64748B] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]/50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#F8F9FB] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#005DCD]/10 text-[#005DCD] flex items-center justify-center font-semibold text-sm">
                        {getInitials(user.name)}
                      </div>
                      <div>
                        <p className="font-medium text-[#012358]">{user.name}</p>
                        <p className="text-xs text-[#64748B]">{user.email}</p>
                        <p className="text-xs text-[#94A3B8] font-mono">{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><RoleBadge role={user.role} /></td>
                  <td className="px-6 py-4"><StatusBadge status={user.status} /></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
                      <Activity className="w-4 h-4" />
                      <span>{user.donationsCount} donations</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#012358]">{formatCurrency(user.totalDonated)}</td>
                  <td className="px-6 py-4 text-[#64748B] whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                    {formatDate(user.joinedAt)}
                  </td>
                  <td className="px-6 py-4 text-[#64748B] text-sm whitespace-nowrap">{formatDateTime(user.lastActive)}</td>
                  <td className="px-6 py-4 text-right"><ActionDropdown user={user} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredUsers.length === 0 && (
          <div className="px-6 py-12 text-center">
            <Users className="w-12 h-12 text-[#E2E8F0] mx-auto mb-4" />
            <p className="text-[#64748B]">No users found</p>
          </div>
        )}
      </div>
    </AdminPage>
  );
}