import type { Metadata } from "next";
import NewPostEditor from "@/components/admin/NewPostEditor";

export const metadata: Metadata = {
  title: "Create New Post",
};

export default function NewPostPage() {
  return <NewPostEditor />;
}
