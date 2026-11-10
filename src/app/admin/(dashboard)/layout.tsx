import type { Metadata } from "next";
import { Suspense } from "react";
import AdminDashboardShell from "./AdminDashboardShell";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

function DashboardFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f0e6]">
      <p className="text-sm font-medium text-[#481a2c]">
        Loading administration dashboard...
      </p>
    </div>
  );
}

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<DashboardFallback />}>
      <AdminDashboardShell>{children}</AdminDashboardShell>
    </Suspense>
  );
}
export const instant = false;