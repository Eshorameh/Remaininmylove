import type { Metadata } from "next";
import PostsManagement from "@/components/admin/PostsManagement";

export const metadata: Metadata = {
  title: "Stories & Blog Management",
};

export default function AdminPostsPage() {
  return <PostsManagement />;
}
