"use client";


import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
  status: "draft" | "published" | "archived";
  author_name: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

type PostsResponse = {
  data: Post[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
  error?: string;
};

const categories = [
  { value: "", label: "All categories" },
  { value: "blog", label: "Blog" },
  { value: "story", label: "Story" },
  { value: "testimony", label: "Testimony" },
  { value: "announcement", label: "Announcement" },
];

const statuses = [
  { value: "", label: "All statuses" },
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
];

function formatDate(value: string | null) {
  if (!value) return "—";

  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function statusStyles(status: Post["status"]) {
  switch (status) {
    case "published":
      return "bg-green-50 text-green-700";
    case "archived":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-amber-50 text-amber-700";
  }
}

export default function PostsManagement() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const [draftSearch, setDraftSearch] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      setIsLoading(true);
      setError("");

      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        sort: "newest",
      });

      if (search) params.set("search", search);
      if (category) params.set("category", category);
      if (status) params.set("status", status);
      if (dateFrom) params.set("date_from", dateFrom);
      if (dateTo) params.set("date_to", dateTo);

      try {
        const response = await fetch(
          `/api/admin/posts?${params.toString()}`,
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          },
        );

        const result: PostsResponse = await response.json();

        if (!response.ok) {
          throw new Error(
            result.error || "Unable to load posts. Please try again.",
          );
        }

        setPosts(result.data ?? []);
        setTotalPosts(result.pagination?.total ?? 0);
        setTotalPages(Math.max(result.pagination?.total_pages ?? 1, 1));
      } catch (requestError) {
        if (requestError instanceof Error && requestError.name === "AbortError") {
          return;
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : "Something went wrong while loading posts.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();

    return () => controller.abort();
  }, [page, search, category, status, dateFrom, dateTo]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setSearch(draftSearch.trim());
  }

  function resetFilters() {
    setDraftSearch("");
    setSearch("");
    setCategory("");
    setStatus("");
    setDateFrom("");
    setDateTo("");
    setPage(1);
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-[#a47b43]">
          Content management
        </p>
        <h2 className="mt-2 font-serif text-3xl text-[#481a2c] sm:text-4xl">
          Stories & Blog
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756a6c]">
          Create, organise and manage the stories, articles, testimonies and
          announcements shared with your community.
        </p>
        <div className="mt-5">
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center rounded-lg bg-[#70263b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#481a2c]"
          >
            + Create New Post
          </Link>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[#e8ded2] bg-[#fffdf9] p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-[#756a6c]">
            Total posts
          </p>
          <p className="mt-2 font-serif text-3xl text-[#481a2c]">
            {isLoading ? "—" : totalPosts}
          </p>
        </div>

        <div className="rounded-xl border border-[#e8ded2] bg-[#fffdf9] p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-[#756a6c]">
            Current page
          </p>
          <p className="mt-2 font-serif text-3xl text-[#481a2c]">
            {page} <span className="text-lg text-[#a47b43]">/ {totalPages}</span>
          </p>
        </div>

        <div className="rounded-xl border border-[#e8ded2] bg-[#fffdf9] p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-[#756a6c]">
            Posts per page
          </p>
          <p className="mt-2 font-serif text-3xl text-[#481a2c]">10</p>
        </div>
      </div>

      <section className="rounded-2xl border border-[#e8ded2] bg-[#fffdf9] p-5 shadow-sm sm:p-6">
        <div className="mb-5">
          <h3 className="font-serif text-xl text-[#481a2c]">
            Find and filter posts
          </h3>
          <p className="mt-1 text-sm text-[#756a6c]">
            Narrow down your posts by title, category, status or date.
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <label
                htmlFor="post-search"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Search title
              </label>
              <input
                id="post-search"
                type="search"
                value={draftSearch}
                onChange={(event) => setDraftSearch(event.target.value)}
                placeholder="Enter a post title..."
                className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a47b43] focus:ring-2 focus:ring-[#d1ad69]/20"
              />
            </div>

            <div>
              <label
                htmlFor="post-category"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Category
              </label>
              <select
                id="post-category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                  setPage(1);
                }}
                className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none focus:border-[#a47b43]"
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
                htmlFor="post-status"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Status
              </label>
              <select
                id="post-status"
                value={status}
                onChange={(event) => {
                  setStatus(event.target.value);
                  setPage(1);
                }}
                className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none focus:border-[#a47b43]"
              >
                {statuses.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="date-from"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Date from
              </label>
              <input
                id="date-from"
                type="date"
                value={dateFrom}
                onChange={(event) => {
                  setDateFrom(event.target.value);
                  setPage(1);
                }}
                className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none focus:border-[#a47b43]"
              />
            </div>

            <div>
              <label
                htmlFor="date-to"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Date to
              </label>
              <input
                id="date-to"
                type="date"
                value={dateTo}
                min={dateFrom || undefined}
                onChange={(event) => {
                  setDateTo(event.target.value);
                  setPage(1);
                }}
                className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none focus:border-[#a47b43]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-lg bg-[#70263b] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#481a2c]"
            >
              Search posts
            </button>
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-lg border border-[#e8ded2] px-5 py-2.5 text-sm font-medium text-[#481a2c] transition hover:bg-[#f7f0e6]"
            >
              Clear filters
            </button>
          </div>
        </form>
      </section>

      <section className="mt-7 overflow-hidden rounded-2xl border border-[#e8ded2] bg-[#fffdf9] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e8ded2] px-5 py-5 sm:px-6">
          <div>
            <h3 className="font-serif text-xl text-[#481a2c]">
              All posts
            </h3>
            <p className="mt-1 text-sm text-[#756a6c]">
              {totalPosts} {totalPosts === 1 ? "post" : "posts"} found
            </p>
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="m-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="px-6 py-16 text-center text-sm text-[#756a6c]">
            Loading posts...
          </div>
        ) : error ? null : posts.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <h4 className="font-serif text-xl text-[#481a2c]">
              No posts found
            </h4>
            <p className="mt-2 text-sm text-[#756a6c]">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] text-left">
                <thead className="bg-[#f7f0e6] text-xs uppercase tracking-wider text-[#756a6c]">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Post</th>
                    <th className="px-5 py-4 font-semibold">Category</th>
                    <th className="px-5 py-4 font-semibold">Author</th>
                    <th className="px-5 py-4 font-semibold">Date</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                    <th className="px-5 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee5da]">
                  {posts.map((post) => (
                    <tr key={post.id} className="transition hover:bg-[#fdf9f3]">
                      <td className="max-w-sm px-6 py-5">
                        <p className="font-medium text-[#481a2c]">
                          {post.title}
                        </p>
                        <p className="mt-1 truncate text-xs text-[#756a6c]">
                          {post.excerpt || post.slug}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm capitalize text-[#756a6c]">
                        {post.category}
                      </td>
                      <td className="px-5 py-5 text-sm text-[#756a6c]">
                        {post.author_name}
                      </td>
                      <td className="whitespace-nowrap px-5 py-5 text-sm text-[#756a6c]">
                        {formatDate(post.published_at || post.created_at)}
                      </td>
                      <td className="px-5 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles(post.status)}`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="px-5 py-5">
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="inline-flex rounded-lg border border-[#e8ded2] px-3 py-2 text-xs font-semibold text-[#70263b] transition hover:border-[#d1ad69] hover:bg-[#f7f0e6]"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e8ded2] px-5 py-4 sm:px-6">
              <p className="text-sm text-[#756a6c]">
                Page {page} of {totalPages}
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((current) => current - 1)}
                  className="rounded-lg border border-[#e8ded2] px-4 py-2 text-sm font-medium text-[#481a2c] transition hover:bg-[#f7f0e6] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((current) => current + 1)}
                  className="rounded-lg border border-[#e8ded2] px-4 py-2 text-sm font-medium text-[#481a2c] transition hover:bg-[#f7f0e6] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}


