import type { Metadata } from "next";
import CommentsManagement from "@/components/admin/CommentsManagement";

export const metadata: Metadata = {
  title: "Comments Management",
};

export default function AdminCommentsPage() {
  return <CommentsManagement />;
}