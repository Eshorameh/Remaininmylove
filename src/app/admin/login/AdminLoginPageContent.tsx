import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default async function AdminLoginPageContent() {
  const admin = await getAdminSession();

  if (admin) {
    redirect("/admin");
  }

  return <AdminLoginForm />;
}