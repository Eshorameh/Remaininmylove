import type { Metadata } from "next";
import { Suspense } from "react";
import AdminLoginPageContent from "./AdminLoginPageContent";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Sign in to the Remain In My Love administration dashboard.",
};

function LoginFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f0e6]">
      <p className="text-sm font-medium text-[#481a2c]">
        Loading admin login...
      </p>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <AdminLoginPageContent />
    </Suspense>
  );
}