"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const categories = [
  { value: "blog", label: "Blog" },
  { value: "story", label: "Story" },
  { value: "testimony", label: "Testimony" },
  { value: "announcement", label: "Announcement" },
];

type PostResponse = {
  data?: {
    id: number;
    title: string;
    excerpt: string | null;
    content: string;
    category: string;
    cover_image_url: string | null;
    status: "draft" | "published" | "archived";
  };
  error?: string;
  message?: string;
};

type EditPostEditorProps = {
  postId: string;
};

export default function EditPostEditor({
  postId,
}: EditPostEditorProps) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("blog");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [postStatus, setPostStatus] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/admin/posts/${encodeURIComponent(postId)}`,
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          },
        );

        const result: PostResponse = await response.json();

        if (!response.ok || !result.data) {
          throw new Error(
            result.error ||
              result.message ||
              "Unable to load this post.",
          );
        }

        setTitle(result.data.title);
        setExcerpt(result.data.excerpt ?? "");
        setContent(result.data.content);
        setCategory(result.data.category);
        setCoverImageUrl(result.data.cover_image_url ?? "");
        setPostStatus(result.data.status);
      } catch (requestError) {
        if (
          requestError instanceof Error &&
          requestError.name === "AbortError"
        ) {
          return;
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : "Something went wrong while loading this post.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadPost();

    return () => controller.abort();
  }, [postId]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsSaving(true);

    try {
      const response = await fetch(
        `/api/admin/posts/${encodeURIComponent(postId)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title.trim(),
            excerpt: excerpt.trim() || null,
            content: content.trim(),
            category,
            cover_image_url: coverImageUrl.trim() || null,
          }),
        },
      );

      const result: PostResponse = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            result.message ||
            "Unable to update this post. Please try again.",
        );
      }

      router.push("/admin/posts");
      router.refresh();
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#e8ded2] bg-[#fffdf9] px-6 py-16 text-center text-sm text-[#756a6c]">
        Loading post...
      </div>
    );
  }

  if (error && !title && !content) {
    return (
      <div className="mx-auto max-w-5xl">
        <Link
          href="/admin/posts"
          className="text-sm font-medium text-[#a47b43] hover:text-[#481a2c]"
        >
          ? Back to Stories & Blog
        </Link>

        <div
          role="alert"
          className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <Link
          href="/admin/posts"
          className="text-sm font-medium text-[#a47b43] transition hover:text-[#481a2c]"
        >
          ? Back to Stories & Blog
        </Link>

        <p className="mt-6 text-sm font-medium text-[#a47b43]">
          Content management
        </p>

        <h2 className="mt-2 font-serif text-3xl text-[#481a2c] sm:text-4xl">
          Edit post
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756a6c]">
          Update your article, story, testimony or announcement.
        </p>

        <p className="mt-3 text-xs font-medium capitalize text-[#756a6c]">
          Current status: {postStatus}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <section className="space-y-5 rounded-2xl border border-[#e8ded2] bg-[#fffdf9] p-5 shadow-sm sm:p-7">
          <div>
            <label
              htmlFor="edit-post-title"
              className="mb-2 block text-sm font-semibold text-[#30242a]"
            >
              Post title <span className="text-red-600">*</span>
            </label>

            <input
              id="edit-post-title"
              type="text"
              required
              maxLength={250}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a47b43] focus:ring-2 focus:ring-[#d1ad69]/20"
            />

            <p className="mt-2 text-xs text-[#756a6c]">
              Maximum 250 characters.
            </p>
          </div>

          <div>
            <label
              htmlFor="edit-post-excerpt"
              className="mb-2 block text-sm font-semibold text-[#30242a]"
            >
              Short introduction
            </label>

            <textarea
              id="edit-post-excerpt"
              rows={3}
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              className="w-full resize-y rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#a47b43] focus:ring-2 focus:ring-[#d1ad69]/20"
            />
          </div>

          <div>
            <label
              htmlFor="edit-post-content"
              className="mb-2 block text-sm font-semibold text-[#30242a]"
            >
              Article content <span className="text-red-600">*</span>
            </label>

            <textarea
              id="edit-post-content"
              required
              rows={16}
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="w-full resize-y rounded-lg border border-[#e8ded2] bg-white px-4 py-4 text-sm leading-7 outline-none transition focus:border-[#a47b43] focus:ring-2 focus:ring-[#d1ad69]/20"
            />

            <p className="mt-2 text-xs text-[#756a6c]">
              Rich text formatting can be added separately.
            </p>
          </div>
        </section>

        <section className="space-y-5 rounded-2xl border border-[#e8ded2] bg-[#fffdf9] p-5 shadow-sm sm:p-7">
          <div>
            <h3 className="font-serif text-xl text-[#481a2c]">
              Post settings
            </h3>
            <p className="mt-1 text-sm text-[#756a6c]">
              Organise your post.
            </p>
          </div>

          <div>
            <label
              htmlFor="edit-post-category"
              className="mb-2 block text-sm font-semibold text-[#30242a]"
            >
              Category <span className="text-red-600">*</span>
            </label>

            <select
              id="edit-post-category"
              required
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a47b43]"
            >
              {categories.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="edit-post-cover-image"
              className="mb-2 block text-sm font-semibold text-[#30242a]"
            >
              Cover image URL
            </label>

            <input
              id="edit-post-cover-image"
              type="url"
              value={coverImageUrl}
              onChange={(event) => setCoverImageUrl(event.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a47b43] focus:ring-2 focus:ring-[#d1ad69]/20"
            />
          </div>
        </section>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-end gap-3 rounded-2xl border border-[#e8ded2] bg-[#fffdf9] p-5 shadow-sm">
          <Link
            href="/admin/posts"
            className="rounded-lg border border-[#e8ded2] px-5 py-3 text-sm font-medium text-[#481a2c] transition hover:bg-[#f7f0e6]"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSaving}
            className="rounded-lg bg-[#70263b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#481a2c] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Saving changes..." : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
