import type { Metadata } from "next";
import EditPostEditor from "@/components/admin/EditPostEditor";

export const metadata: Metadata = {
  title: "Edit Post",
};

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({
  params,
}: EditPostPageProps) {
  const { id } = await params;

  return <EditPostEditor postId={id} />;
}
