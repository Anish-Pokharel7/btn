import AdminNav from "@/components/admin/AdminNav";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <main className="w-full min-h-screen px-4 md:px-8 lg:px-12 py-8 sm:py-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 lg:gap-8">
          <AdminNav />
          {children}
        </div>
      </main>
    </div>
  );
}