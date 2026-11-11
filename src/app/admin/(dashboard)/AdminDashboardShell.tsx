import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export default async function AdminDashboardShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await requireAdmin();

  return (
    <div className="min-h-screen bg-[#f7f0e6] text-[#30242a] lg:flex">
      <aside className="flex w-full flex-col bg-[#481a2c] text-white lg:min-h-screen lg:w-64 lg:shrink-0">
        <div className="border-b border-white/10 px-6 py-7">
          <p className="font-serif text-2xl">Remain In My Love</p>
          <p className="mt-1 text-xs tracking-[0.18em] text-[#d1ad69]">
            ADMINISTRATION
          </p>
        </div>

        <nav aria-label="Admin navigation" className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
            Workspace
          </p>

          <div className="space-y-2">
            <Link
              href="/admin"
              className="block rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-white"
            >
              Overview
            </Link>
            <Link
              href="/admin/posts"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              Stories & Blog
            </Link>
            <Link
              href="/admin/comments"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              Comments
            </Link>
          </div>

          <p className="mt-8 px-3 text-xs leading-6 text-white/55">
            Additional management sections will be connected as their
            respective features are implemented.
          </p>
        </nav>

        <div className="border-t border-white/10 px-6 py-5">
          <p className="truncate text-sm font-medium">{admin.full_name}</p>
          <p className="mt-1 text-xs capitalize text-white/55">
            {admin.role}
          </p>
          <div className="mt-4">
            <AdminLogoutButton />
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="border-b border-[#e8ded2] bg-[#fffdf9] px-6 py-5 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a47b43]">
            Administration
          </p>
          <h1 className="mt-1 font-serif text-2xl text-[#481a2c]">
            Dashboard
          </h1>
        </header>

        <main className="px-6 py-8 sm:px-10 sm:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
