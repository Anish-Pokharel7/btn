"use client";

import { Bell, Sun, Moon, LogOut, User, ChevronDown, Menu, Settings, LayoutDashboard, FolderKanban, Building2, Image, Heart, Users, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationMenuRef = useRef<HTMLDivElement>(null);
  const [notificationOpen, setNotificationOpen] = useState(false);

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

  const notifications = [
    { id: 1, title: "New donation received", message: "₹5,000 from Rajesh Kumar", time: "5 min ago", read: false },
    { id: 2, title: "Project updated", message: "Rural Smart School Initiative progress updated", time: "1 hour ago", read: false },
    { id: 3, title: "New volunteer signup", message: "Priya Sharma registered for Healthcare drive", time: "3 hours ago", read: true },
  ];

  return (
    <header className="fixed top-0 left-64 right-0 z-30 h-16 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-all duration-300 lg:left-64">
      <div className="h-full max-w-full mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 rounded-xl text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Page Title - will be overridden by pages */}
        <div className="flex-1 lg:hidden">
          <h1 className="text-lg font-bold text-[#012358]">Admin Panel</h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 md:mx-8">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
            <input
              type="search"
              placeholder="Search projects, donations, users..."
              className="w-full pl-10 pr-4 py-2 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationMenuRef}>
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative p-2.5 rounded-xl text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors"
              aria-label="Notifications"
              aria-expanded={notificationOpen}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FD6100] text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>

            {notificationOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between">
                  <h3 className="font-semibold text-[#012358]">Notifications</h3>
                  <button className="text-xs text-[#005DCD] hover:underline">Mark all read</button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <button
                      key={notif.id}
                      className={`w-full px-4 py-3 text-left hover:bg-[#F8F9FB] transition-colors border-b border-[#E2E8F0]/50 last:border-0 ${!notif.read ? "bg-blue-50/30" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#005DCD]/10 flex items-center justify-center flex-shrink-0">
                          <Bell className="w-4 h-4 text-[#005DCD]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#012358] text-sm">{notif.title}</p>
                          <p className="text-[#64748B] text-xs mt-0.5 truncate">{notif.message}</p>
                          <p className="text-[#94A3B8] text-[11px] mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-[#E2E8F0]">
                  <Link href="/admin/notifications" className="text-sm font-medium text-[#005DCD] hover:underline block text-center">View all notifications</Link>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl hover:bg-[#F8F9FB] transition-colors"
              aria-expanded={userMenuOpen}
              aria-label="User menu"
            >
              <div className="w-8 h-8 rounded-xl bg-[#012358] flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:block font-medium text-[#012358] text-sm">Admin</span>
              <ChevronDown className="w-4 h-4 text-[#64748B] hidden sm:block" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-[#E2E8F0]">
                  <p className="font-semibold text-[#012358] text-sm">Administrator</p>
                  <p className="text-xs text-[#64748B]">admin@btn.org</p>
                </div>
                <Link href="/admin/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors">
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358] transition-colors">
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <hr className="my-1 border-[#E2E8F0]" />
                <button className="flex items-center gap-3 px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-50 transition-colors w-full">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
      )}
      {mobileMenuOpen && (
        <aside className="lg:hidden fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-[#E2E8F0] flex flex-col animate-in slide-in-from-left duration-300">
          <div className="flex items-center justify-between h-16 px-4 border-b border-[#E2E8F0]">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#012358] flex items-center justify-center">
                <span className="text-white font-bold text-lg">BTN</span>
              </div>
              <span className="font-extrabold text-[#012358] text-lg">Admin</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl text-[#64748B] hover:bg-[#F8F9FB]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex-1 py-4 px-3 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive ? "bg-[#012358] text-white" : "text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358]"
                      }`}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span>{item.label}</span>
                      {item.badge && <span className="ml-auto px-2 py-0.5 text-xs font-bold rounded-full bg-[#FD6100]/20 text-[#FD6100]">{item.badge}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
}

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Projects", href: "/admin/content/projects", icon: <FolderKanban className="w-5 h-5" /> },
  { label: "Programs", href: "/admin/content/programs", icon: <Building2 className="w-5 h-5" /> },
  { label: "Gallery", href: "/admin/content/gallery", icon: <Image className="w-5 h-5" /> },
  { label: "Donations", href: "/admin/donations", icon: <Heart className="w-5 h-5" /> },
  { label: "Users", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
];