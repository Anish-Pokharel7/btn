"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Image,
  Heart,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Projects", href: "/admin/content/projects", icon: <FolderKanban className="w-5 h-5" />, badge: "3" },
  { label: "Programs", href: "/admin/content/programs", icon: <Building2 className="w-5 h-5" />, badge: "4" },
  { label: "Gallery", href: "/admin/content/gallery", icon: <Image className="w-5 h-5" />, badge: "6" },
  { label: "Donations", href: "/admin/donations", icon: <Heart className="w-5 h-5" />, badge: "12" },
  { label: "Users", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-full bg-white border-r border-[#E2E8F0] transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } flex flex-col`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between h-16 px-4 border-b border-[#E2E8F0] ${collapsed ? "justify-center" : ""}`}>
        {!collapsed && (
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#012358] flex items-center justify-center">
              <span className="text-white font-bold text-lg">BTN</span>
            </div>
            <span className="font-extrabold text-[#012358] text-lg">Admin</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-xl text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto" aria-label="Admin navigation">
        <ul className="space-y-1" role="list">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#012358] text-white shadow-sm"
                      : "text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358]"
                  } ${collapsed ? "justify-center" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <span className="flex-shrink-0 px-2 py-0.5 text-xs font-bold rounded-full bg-[#FD6100]/20 text-[#FD6100]">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className={`p-3 border-t border-[#E2E8F0] ${collapsed ? "hidden" : ""}`}>
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors"
        >
          <span className="w-5 h-5 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
          <span>View Website</span>
        </Link>
      </div>
    </aside>
  );
}