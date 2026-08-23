"use client";

import AdminPage from "@/app/admin/layout";
import { Search, MoreVertical, Eye, Edit, Trash2, Download, CreditCard, Wallet, DollarSign, Calendar, User, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Donation {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  currency: string;
  type: "One-time" | "Monthly" | "Yearly";
  program: string;
  status: "Completed" | "Pending" | "Failed" | "Refunded";
  paymentMethod: "Card" | "UPI" | "Net Banking" | "Wallet";
  transactionId: string;
  date: string;
  receiptSent: boolean;
}

const donations: Donation[] = [
  {
    id: "DON-2024-001",
    donorName: "Rajesh Kumar",
    donorEmail: "rajesh.kumar@email.com",
    amount: 5000,
    currency: "INR",
    type: "Monthly",
    program: "Education",
    status: "Completed",
    paymentMethod: "Card",
    transactionId: "TXN_789456123",
    date: "2024-03-15T10:30:00Z",
    receiptSent: true,
  },
  {
    id: "DON-2024-002",
    donorName: "Priya Sharma",
    donorEmail: "priya.sharma@email.com",
    amount: 10000,
    currency: "INR",
    type: "One-time",
    program: "Healthcare",
    status: "Completed",
    paymentMethod: "UPI",
    transactionId: "TXN_789456124",
    date: "2024-03-14T15:45:00Z",
    receiptSent: true,
  },
  {
    id: "DON-2024-003",
    donorName: "Amit Patel",
    donorEmail: "amit.patel@email.com",
    amount: 2500,
    currency: "INR",
    type: "Monthly",
    program: "Environment",
    status: "Completed",
    paymentMethod: "Net Banking",
    transactionId: "TXN_789456125",
    date: "2024-03-13T09:15:00Z",
    receiptSent: true,
  },
  {
    id: "DON-2024-004",
    donorName: "Sunita Devi",
    donorEmail: "sunita.devi@email.com",
    amount: 15000,
    currency: "INR",
    type: "One-time",
    program: "Women's Empowerment",
    status: "Completed",
    paymentMethod: "Card",
    transactionId: "TXN_789456126",
    date: "2024-03-12T14:20:00Z",
    receiptSent: true,
  },
  {
    id: "DON-2024-005",
    donorName: "Vikram Singh",
    donorEmail: "vikram.singh@email.com",
    amount: 3000,
    currency: "INR",
    type: "Monthly",
    program: "Education",
    status: "Pending",
    paymentMethod: "Wallet",
    transactionId: "TXN_789456127",
    date: "2024-03-11T11:00:00Z",
    receiptSent: false,
  },
  {
    id: "DON-2024-006",
    donorName: "Meera Reddy",
    donorEmail: "meera.reddy@email.com",
    amount: 7500,
    currency: "INR",
    type: "One-time",
    program: "Healthcare",
    status: "Failed",
    paymentMethod: "Card",
    transactionId: "TXN_789456128",
    date: "2024-03-10T16:30:00Z",
    receiptSent: false,
  },
];

const statusConfig = {
  Completed: { label: "Completed", color: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
  Pending: { label: "Pending", color: "bg-amber-100 text-amber-700", icon: Clock },
  Failed: { label: "Failed", color: "bg-rose-100 text-rose-700", icon: XCircle },
  Refunded: { label: "Refunded", color: "bg-slate-100 text-slate-700", icon: DollarSign },
} as const;

const typeConfig = {
  "One-time": { color: "bg-orange-100 text-orange-700" },
  Monthly: { color: "bg-blue-100 text-blue-700" },
  Yearly: { color: "bg-purple-100 text-purple-700" },
} as const;

const paymentMethodIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Card: CreditCard,
  UPI: Wallet,
  "Net Banking": DollarSign,
  Wallet: DollarSign,
};

function StatusBadge({ status }: { status: Donation["status"] }) {
  const config = statusConfig[status];
  const Icon = config.icon;
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      <Icon className="w-3.5 h-3.5" />
      {config.label}
    </span>
  );
}

function TypeBadge({ type }: { type: Donation["type"] }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${typeConfig[type].color}`}>
      {type}
    </span>
  );
}

function ActionDropdown({ donation }: { donation: Donation }) {
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
          <Link href={`/admin/donations/${donation.id}`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
            <Eye className="w-4 h-4" /> View Details
          </Link>
          <Link href={`/admin/donations/${donation.id}/edit`} className="flex items-center gap-2 px-3 py-2 text-sm text-[#012358] hover:bg-[#F8F9FB]">
            <Edit className="w-4 h-4" /> Edit
          </Link>
          {!donation.receiptSent && (
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-[#005DCD] hover:bg-blue-50 w-full text-left">
              <Download className="w-4 h-4" /> Send Receipt
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

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency, minimumFractionDigits: 0 }).format(amount);
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function DonationsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateRange, setDateRange] = useState("all");

  const filteredDonations = donations.filter((d) => {
    const matchesSearch = d.donorName.toLowerCase().includes(search.toLowerCase()) ||
      d.donorEmail.toLowerCase().includes(search.toLowerCase()) ||
      d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.transactionId.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || d.status === statusFilter;
    const matchesType = typeFilter === "all" || d.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const totalAmount = filteredDonations.reduce((sum, d) => sum + d.amount, 0);
  const completedCount = filteredDonations.filter((d) => d.status === "Completed").length;
  const pendingCount = filteredDonations.filter((d) => d.status === "Pending").length;
  const thisMonth = filteredDonations.filter((d) => new Date(d.date).getMonth() === new Date().getMonth()).length;

  return (
    <AdminPage title="Donations Management">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Total Amount</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{formatCurrency(totalAmount, "INR")}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Completed</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{completedCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">Pending</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{pendingCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider">This Month</p>
              <p className="text-3xl font-extrabold text-[#012358] mt-1">{thisMonth}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
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
              placeholder="Search donations (name, email, ID, transaction)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 min-w-[150px]"
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
            <option value="Refunded">Refunded</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 min-w-[140px]"
          >
            <option value="all">All Types</option>
            <option value="One-time">One-time</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 min-w-[150px]"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E2E8F0] bg-[#F8F9FB]">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Donation ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Donor</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Payment</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-[#64748B] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]/50">
              {filteredDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-[#F8F9FB] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm font-medium text-[#012358]">{donation.id}</div>
                    <div className="text-xs text-[#94A3B8] font-mono">{donation.transactionId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#005DCD]/10 text-[#005DCD] flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-[#012358]">{donation.donorName}</p>
                        <p className="text-xs text-[#64748B]">{donation.donorEmail}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#012358] text-lg">{formatCurrency(donation.amount, donation.currency)}</td>
                  <td className="px-6 py-4"><TypeBadge type={donation.type} /></td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {donation.program}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
                      {(() => {
                        const Icon = paymentMethodIcons[donation.paymentMethod as keyof typeof paymentMethodIcons];
                        return Icon ? <Icon className="w-4 h-4" /> : null;
                      })()}
                      <span>{donation.paymentMethod}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><StatusBadge status={donation.status} /></td>
                  <td className="px-6 py-4 text-[#64748B] text-sm whitespace-nowrap">{formatDate(donation.date)}</td>
                  <td className="px-6 py-4 text-right"><ActionDropdown donation={donation} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredDonations.length === 0 && (
          <div className="px-6 py-12 text-center">
            <CreditCard className="w-12 h-12 text-[#E2E8F0] mx-auto mb-4" />
            <p className="text-[#64748B]">No donations found</p>
          </div>
        )}
      </div>
    </AdminPage>
  );
}