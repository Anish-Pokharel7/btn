import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function AdminLayout({ children, title = "Dashboard" }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <AdminSidebar />
      <AdminHeader />
      <main className="lg:ml-64 pt-16 min-h-screen transition-all duration-300">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#012358] tracking-tight">{title}</h1>
            <p className="text-[#64748B] text-sm md:text-base mt-1">Manage your organization's content and settings</p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}