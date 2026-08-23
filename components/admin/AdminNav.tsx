"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Building2,
  Image as ImageIcon,
  Heart,
  Users,
  Settings,
  Bell,
  User,
  LogOut,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Search,
} from "lucide-react";

interface NavTab {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

const navTabs: NavTab[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { label: "Projects", href: "/admin/content/projects", icon: <FolderKanban className="w-4 h-4" />, badge: "3" },
  { label: "Programs", href: "/admin/content/programs", icon: <Building2 className="w-4 h-4" />, badge: "4" },
  { label: "Gallery", href: "/admin/content/gallery", icon: <ImageIcon className="w-4 h-4" />, badge: "6" },
  { label: "Donations", href: "/admin/donations", icon: <Heart className="w-4 h-4" />, badge: "6" },
  { label: "Users", href: "/admin/users", icon: <Users className="w-4 h-4" />, badge: "7" },
  { label: "Settings", href: "/admin/settings", icon: <Settings className="w-4 h-4" /> },
];

export default function AdminNav() {
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New donation received", message: "रु 5,000 from Rajesh Kumar", time: "5 min ago", read: false },
    { id: 2, title: "Project milestone reached", message: "Rural Smart School Initiative at 65%", time: "1 hour ago", read: false },
    { id: 3, title: "New volunteer signup", message: "Priya Sharma registered for Healthcare drive", time: "3 hours ago", read: true },
  ]);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (notificationMenuRef.current && !notificationMenuRef.current.contains(event.target as Node)) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Banner / Utility Bar */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left: Organization Badge & Active Path */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#012358] text-white flex items-center justify-center shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#FD6100]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#005DCD] tracking-wider uppercase">
                Better Tomorrow Nepal
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-extrabold text-[#012358] tracking-tight">
              Management Workspace
            </h1>
          </div>
        </div>

        {/* Right: Search, Notifications & User Dropdown */}
        <div className="flex items-center justify-between sm:justify-end gap-3 flex-wrap sm:flex-nowrap">
          {/* Quick Search */}
          <div className="relative hidden md:block w-64 lg:w-72">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="search"
              placeholder="Search admin workspace..."
              className="w-full pl-9 pr-4 py-2 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications Menu */}
            <div className="relative" ref={notificationMenuRef}>
              <button
                type="button"
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative p-2.5 rounded-2xl bg-[#F8F9FB] border border-[#E2E8F0] text-[#64748B] hover:text-[#012358] hover:border-[#005DCD]/40 transition-all cursor-pointer"
                aria-label="Notifications"
                aria-expanded={notificationOpen}
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FD6100] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notificationOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8F9FB]">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-[#012358]">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        type="button"
                        onClick={markAllAsRead}
                        className="text-xs text-[#005DCD] hover:underline font-semibold cursor-pointer"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-[#E2E8F0]/60">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3.5 flex items-start gap-3 transition-colors ${
                          !notif.read ? "bg-blue-50/40" : "hover:bg-[#F8F9FB]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#005DCD]/10 text-[#005DCD] flex items-center justify-center shrink-0 mt-0.5">
                          <Bell className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[#012358] text-xs leading-tight">{notif.title}</p>
                          <p className="text-[#64748B] text-xs mt-0.5 line-clamp-2">{notif.message}</p>
                          <p className="text-[#94A3B8] text-[10px] mt-1">{notif.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-2xl bg-[#F8F9FB] border border-[#E2E8F0] hover:border-[#005DCD]/40 transition-all cursor-pointer"
                aria-expanded={userMenuOpen}
                aria-label="User menu"
              >
                <div className="w-7 h-7 rounded-xl bg-[#012358] flex items-center justify-center text-white text-xs font-bold shadow-xs">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-[#012358] hidden sm:block">Admin</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8F9FB]">
                    <p className="font-bold text-[#012358] text-sm">System Administrator</p>
                    <p className="text-xs text-[#64748B]">admin@bettertomorrownepal.org</p>
                  </div>
                  <div className="p-1.5">
                    <Link
                      href="/admin/settings"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#012358] hover:bg-blue-50/60 hover:text-[#005DCD] rounded-xl transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Settings &amp; Preferences
                    </Link>
                    <Link
                      href="/"
                      target="_blank"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#012358] hover:bg-blue-50/60 hover:text-[#005DCD] rounded-xl transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-[#FD6100]" />
                      View Public Site
                    </Link>
                    <hr className="my-1 border-[#E2E8F0]" />
                    <button
                      type="button"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-xl transition-colors w-full text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <nav
        aria-label="Admin Navigation Tabs"
        className="w-full bg-white rounded-2xl border border-[#E2E8F0] p-1.5 shadow-xs overflow-x-auto scrollbar-none"
      >
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-max">
          {navTabs.map((tab) => {
            const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#012358] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#012358] hover:bg-[#F8F9FB]"
                }`}
              >
                <span className={isActive ? "text-[#FD6100]" : "text-[#64748B]"}>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-[#FD6100] text-white"
                        : "bg-blue-50 text-[#005DCD] border border-blue-200/50"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
