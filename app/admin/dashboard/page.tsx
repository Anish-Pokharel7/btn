import { Users, Heart, FolderKanban, Image, TrendingUp, ArrowUpRight, Building2 } from "lucide-react";


const stats = [
  {
    label: "Total Donations",
    value: "रु 12,45,000",
    change: "+12.5%",
    changeLabel: "vs last month",
    icon: Heart,
    iconColor: "bg-rose-100 text-rose-600",
    trend: "up",
  },
  {
    label: "Active Projects",
    value: "3",
    change: "+1",
    changeLabel: "this quarter",
    icon: FolderKanban,
    iconColor: "bg-blue-100 text-blue-600",
    trend: "up",
  },
  {
    label: "Programs Running",
    value: "4",
    change: "0",
    changeLabel: "active",
    icon: Building2,
    iconColor: "bg-emerald-100 text-emerald-600",
    trend: "neutral",
  },
  {
    label: "Gallery Images",
    value: "6",
    change: "+2",
    changeLabel: "this month",
    icon: Image,
    iconColor: "bg-orange-100 text-orange-600",
    trend: "up",
  },
  {
    label: "Total Volunteers",
    value: "247",
    change: "+23",
    changeLabel: "new registrations",
    icon: Users,
    iconColor: "bg-purple-100 text-purple-600",
    trend: "up",
  },
  {
    label: "Beneficiaries Reached",
    value: "1,234",
    change: "+156",
    changeLabel: "this year",
    icon: TrendingUp,
    iconColor: "bg-indigo-100 text-indigo-600",
    trend: "up",
  },
];

const recentDonations = [
  { id: 1, donor: "Rajesh Kumar", amount: "रु 5,000", type: "Monthly", program: "Education", date: "2 hours ago", status: "Completed" },
  { id: 2, donor: "Priya Sharma", amount: "रु 10,000", type: "One-time", program: "Healthcare", date: "5 hours ago", status: "Completed" },
  { id: 3, donor: "Amit Patel", amount: "रु 2,500", type: "Monthly", program: "Environment", date: "1 day ago", status: "Completed" },
  { id: 4, donor: "Sunita Devi", amount: "रु 15,000", type: "One-time", program: "Women's Empowerment", date: "2 days ago", status: "Completed" },
  { id: 5, donor: "Vikram Singh", amount: "रु 3,000", type: "Monthly", program: "Education", date: "3 days ago", status: "Pending" },
];

const recentActivity = [
  { id: 1, action: "New project created", detail: "Rural Smart School Initiative", time: "10 min ago", user: "Admin" },
  { id: 2, action: "Donation received", detail: "रु 5,000 from Rajesh Kumar", time: "2 hours ago", user: "System" },
  { id: 3, action: "Gallery updated", detail: "Added 2 new images to Education", time: "3 hours ago", user: "Content Manager" },
  { id: 4, action: "Volunteer registered", detail: "Priya Sharma for Healthcare drive", time: "5 hours ago", user: "System" },
  { id: 5, action: "Program updated", detail: "Women's Empowerment - new batch added", time: "1 day ago", user: "Program Manager" },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon;
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 overflow-hidden hover:shadow-lg hover:border-[#005DCD]/30 transition-all duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[#64748B] text-sm font-medium uppercase tracking-wider mb-2">{stat.label}</p>
          <p className="text-2xl font-extrabold text-[#012358] break-all tracking-tight leading-tight">{stat.value}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl ${stat.iconColor} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5">
        <ArrowUpRight className={`w-4 h-4 ${stat.trend === "up" ? "text-emerald-600" : stat.trend === "down" ? "text-rose-600" : "text-slate-400"}`} />
        <span className={`text-sm font-semibold ${stat.trend === "up" ? "text-emerald-600" : stat.trend === "down" ? "text-rose-600" : "text-slate-500"}`}>
          {stat.change}
        </span>
        <span className="text-sm text-[#64748B]">{stat.changeLabel}</span>
      </div>
    </div>
  );
}

function RecentDonationsTable() {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#012358]">Recent Donations</h2>
        <a href="/admin/donations" className="text-sm text-[#005DCD] hover:underline flex items-center gap-1">
          View all <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F8F9FB]">
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Donor</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Program</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]/50">
            {recentDonations.map((donation) => (
              <tr key={donation.id} className="hover:bg-[#F8F9FB] transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-[#012358]">{donation.donor}</div>
                </td>
                <td className="px-6 py-4 font-semibold text-[#012358]">{donation.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    donation.type === "Monthly" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {donation.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-[#64748B]">{donation.program}</td>
                <td className="px-6 py-4 text-[#64748B] text-sm">{donation.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    donation.status === "Completed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {donation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RecentActivityFeed() {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#012358]">Recent Activity</h2>
        <a href="/admin/activity" className="text-sm text-[#005DCD] hover:underline flex items-center gap-1">
          View all <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <div className="divide-y divide-[#E2E8F0]/50">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="px-6 py-4 flex items-start gap-4 hover:bg-[#F8F9FB] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#005DCD]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#005DCD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[#012358] text-sm">{activity.action}</p>
              <p className="text-[#64748B] text-sm mt-0.5">{activity.detail}</p>
              <p className="text-[#94A3B8] text-xs mt-1">{activity.time} • by {activity.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#012358] tracking-tight">Dashboard</h2>
        <p className="text-[#64748B] text-sm md:text-base mt-1">Overview of your organization&apos;s activity and performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecentDonationsTable />
          <RecentActivityFeed />
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
            <h3 className="text-lg font-bold text-[#012358] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a href="/admin/content/projects" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F8F9FB] border border-[#E2E8F0] hover:border-[#005DCD]/50 hover:bg-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#005DCD]/10 text-[#005DCD] flex items-center justify-center group-hover:bg-[#005DCD] group-hover:text-white transition-colors">
                  <FolderKanban className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#012358]">Add New Project</p>
                  <p className="text-xs text-[#64748B]">Create a new field project</p>
                </div>
              </a>
              <a href="/admin/content/programs" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F8F9FB] border border-[#E2E8F0] hover:border-[#005DCD]/50 hover:bg-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#012358]">Add New Program</p>
                  <p className="text-xs text-[#64748B]">Create a core program</p>
                </div>
              </a>
              <a href="/admin/content/gallery" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F8F9FB] border border-[#E2E8F0] hover:border-[#005DCD]/50 hover:bg-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Image className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-[#012358]">Upload Gallery Images</p>
                  <p className="text-xs text-[#64748B]">Add photos to gallery</p>
                </div>
              </a>
              <a href="/admin/donations" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F8F9FB] border border-[#E2E8F0] hover:border-[#005DCD]/50 hover:bg-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#012358]">Record Donation</p>
                  <p className="text-xs text-[#64748B]">Manually add a donation</p>
                </div>
              </a>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
            <h3 className="text-lg font-bold text-[#012358] mb-4">System Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-[#012358]">Website Uptime</span>
                  <span className="text-sm font-semibold text-emerald-600">99.9%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "99.9%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-[#012358]">Database Status</span>
                  <span className="text-sm font-semibold text-emerald-600">Healthy</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-[#012358]">Storage Used</span>
                  <span className="text-sm font-semibold text-[#64748B]">2.4 GB / 10 GB</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "24%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-[#012358]">API Response Time</span>
                  <span className="text-sm font-semibold text-emerald-600">142ms</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}