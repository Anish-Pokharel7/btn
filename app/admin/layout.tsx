import AdminLayout from "@/components/admin/AdminLayout";
import { ReactNode } from "react";

interface AdminPageProps {
  children: ReactNode;
  title: string;
}

export default function AdminPage({ children, title }: AdminPageProps) {
  return <AdminLayout title={title}>{children}</AdminLayout>;
}