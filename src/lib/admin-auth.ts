import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type AdminUser = {
  id: number;
  full_name: string;
  email: string;
  role: string;
};

type AdminMeResponse = {
  admin?: AdminUser;
};

export async function getAdminSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("riml_admin_session");

  if (!sessionCookie?.value) {
    return null;
  }

  const apiBaseUrl = process.env.RIML_API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error("RIML_API_BASE_URL is not configured.");
  }

  const response = await fetch(`${apiBaseUrl}/api/v1/admin/me`, {
    method: "GET",
    headers: {
      Cookie: `riml_admin_session=${sessionCookie.value}`,
    },
    cache: "no-store",
  });

  if (response.status === 401) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Unable to verify the admin session.");
  }

  const data: AdminMeResponse = await response.json();

  return data.admin ?? null;
}

export async function requireAdmin(): Promise<AdminUser> {
  const admin = await getAdminSession();

  if (!admin) {
    redirect("/admin/login");
  }

  return admin;
}
