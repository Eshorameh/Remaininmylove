"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type CommentStatus = "pending" | "approved" | "rejected";

type Comment = {
  id: number;
  post_id: number;
  post_slug: string;
  post_title: string;
  name: string;
  content: string;
  status: CommentStatus;
  created_at: string;
  updated_at: string;
};

type CommentsResponse = {
  data: Comment[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
  error?: string;
};

const statuses = [
  { value: "", label: "All statuses" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function statusStyles(status: CommentStatus) {
  switch (status) {
    case "approved":
      return "bg-green-50 text-green-700";
    case "rejected":
      return "bg-red-50 text-red-700";
    default:
      return "bg-amber-50 text-amber-700";
  }
}

export default function CommentsManagement() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalComments, setTotalComments] = useState(0);

  const [draftSearch, setDraftSearch] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [activeAction, setActiveAction] = useState("");

  const loadComments = useCallback(async (signal?: AbortSignal) => {
    const params = new URLSearchParams({
      page: String(page),
      limit: "10",
    });

    if (search) params.set("search", search);
    if (status) params.set("status", status);

    try {
      const response = await fetch(
        `/api/admin/comments?${params.toString()}`,
        {
          method: "GET",
          cache: "no-store",
          signal,
        },
      );

      const result: CommentsResponse = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to load comments. Please try again.",
        );
      }

      setComments(result.data ?? []);
      setTotalComments(result.pagination?.total ?? 0);
      setTotalPages(Math.max(result.pagination?.total_pages ?? 1, 1));
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
          : "Something went wrong while loading comments.",
      );
    } finally {
      if (!signal?.aborted) {
        setIsLoading(false);
      }
    }
  }, [page, search, status]);

  useEffect(() => {
    const controller = new AbortController();

    Promise.resolve().then(() => {
      if (!controller.signal.aborted) {
        void loadComments(controller.signal);
      }
    });

    return () => controller.abort();
  }, [loadComments]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setPage(1);
    setSearch(draftSearch.trim());
    setSuccess("");
  }

  function resetFilters() {
    setDraftSearch("");
    setSearch("");
    setStatus("");
    setPage(1);
    setSuccess("");
  }

  async function updateCommentStatus(
    commentId: number,
    nextStatus: CommentStatus,
  ) {
    setActiveAction(`${commentId}-${nextStatus}`);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`/api/admin/comments/${commentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to update this comment.",
        );
      }

      setSuccess(result.message || "Comment status updated successfully.");
      setIsLoading(true);
      await loadComments();
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while updating the comment.",
      );
    } finally {
      setActiveAction("");
    }
  }

  async function deleteComment(commentId: number) {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this comment? This action cannot be undone.",
    );

    if (!confirmed) return;

    setActiveAction(`${commentId}-delete`);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`/api/admin/comments/${commentId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to delete this comment.");
      }

      setSuccess(result.message || "Comment deleted successfully.");

      if (comments.length === 1 && page > 1) {
        setIsLoading(true);
        setPage((current) => current - 1);
      } else {
        setIsLoading(true);
        await loadComments();
      }
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while deleting the comment.",
      );
    } finally {
      setActiveAction("");
    }
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-[#a47b43]">
          Community engagement
        </p>
        <h2 className="mt-2 font-serif text-3xl text-[#481a2c] sm:text-4xl">
          Comments Management
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756a6c]">
          Review comments submitted by visitors, approve contributions for
          public display, and keep conversations respectful and welcoming.
        </p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[#e8ded2] bg-[#fffdf9] p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-[#756a6c]">
            Matching comments
          </p>
          <p className="mt-2 font-serif text-3xl text-[#481a2c]">
            {isLoading ? "—" : totalComments}
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
            Comments per page
          </p>
          <p className="mt-2 font-serif text-3xl text-[#481a2c]">10</p>
        </div>
      </div>

      <section className="rounded-2xl border border-[#e8ded2] bg-[#fffdf9] p-5 shadow-sm sm:p-6">
        <div className="mb-5">
          <h3 className="font-serif text-xl text-[#481a2c]">
            Find and filter comments
          </h3>
          <p className="mt-1 text-sm text-[#756a6c]">
            Search by commenter, comment content or the related post.
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="comment-search"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Search comments
              </label>
              <input
                id="comment-search"
                type="search"
                value={draftSearch}
                onChange={(event) => setDraftSearch(event.target.value)}
                placeholder="Name, comment or post title..."
                className="w-full rounded-lg border border-[#e8ded2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a47b43] focus:ring-2 focus:ring-[#d1ad69]/20"
              />
            </div>

            <div>
              <label
                htmlFor="comment-status"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Moderation status
              </label>
              <select
                id="comment-status"
                value={status}
                onChange={(event) => {
                  setIsLoading(true);
                  setError("");
                  setStatus(event.target.value);
                  setPage(1);
                  setSuccess("");
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
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-lg bg-[#70263b] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#481a2c]"
            >
              Search comments
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
              Submitted comments
            </h3>
            <p className="mt-1 text-sm text-[#756a6c]">
              {totalComments} {totalComments === 1 ? "comment" : "comments"} found
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

        {success && (
          <div
            role="status"
            className="m-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
          >
            {success}
          </div>
        )}

        {isLoading ? (
          <div className="px-6 py-16 text-center text-sm text-[#756a6c]">
            Loading comments...
          </div>
        ) : error ? null : comments.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <h4 className="font-serif text-xl text-[#481a2c]">
              No comments found
            </h4>
            <p className="mt-2 text-sm text-[#756a6c]">
              There are no comments matching your current search or filter.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] text-left">
                <thead className="bg-[#f7f0e6] text-xs uppercase tracking-wider text-[#756a6c]">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Comment</th>
                    <th className="px-5 py-4 font-semibold">Post</th>
                    <th className="px-5 py-4 font-semibold">Date</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                    <th className="px-5 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee5da]">
                  {comments.map((comment) => (
                    <tr
                      key={comment.id}
                      className="transition hover:bg-[#fdf9f3]"
                    >
                      <td className="max-w-md px-6 py-5">
                        <p className="font-medium text-[#481a2c]">
                          {comment.name}
                        </p>
                        <p className="mt-2 whitespace-normal text-sm leading-6 text-[#756a6c]">
                          {comment.content}
                        </p>
                      </td>
                      <td className="max-w-xs px-5 py-5">
                        <p className="text-sm font-medium text-[#481a2c]">
                          {comment.post_title}
                        </p>
                        <p className="mt-1 text-xs text-[#756a6c]">
                          {comment.post_slug}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-5 py-5 text-sm text-[#756a6c]">
                        {formatDate(comment.created_at)}
                      </td>
                      <td className="px-5 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles(comment.status)}`}
                        >
                          {comment.status}
                        </span>
                      </td>
                      <td className="px-5 py-5">
                        <div className="flex flex-wrap gap-2">
                          {comment.status !== "approved" && (
                            <button
                              type="button"
                              disabled={Boolean(activeAction)}
                              onClick={() =>
                                updateCommentStatus(comment.id, "approved")
                              }
                              className="rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {activeAction === `${comment.id}-approved`
                                ? "Saving..."
                                : "Approve"}
                            </button>
                          )}

                          {comment.status !== "rejected" && (
                            <button
                              type="button"
                              disabled={Boolean(activeAction)}
                              onClick={() =>
                                updateCommentStatus(comment.id, "rejected")
                              }
                              className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {activeAction === `${comment.id}-rejected`
                                ? "Saving..."
                                : "Reject"}
                            </button>
                          )}

                          {comment.status !== "pending" && (
                            <button
                              type="button"
                              disabled={Boolean(activeAction)}
                              onClick={() =>
                                updateCommentStatus(comment.id, "pending")
                              }
                              className="rounded-lg border border-[#e8ded2] px-3 py-2 text-xs font-semibold text-[#481a2c] transition hover:bg-[#f7f0e6] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {activeAction === `${comment.id}-pending`
                                ? "Saving..."
                                : "Set pending"}
                            </button>
                          )}

                          <button
                            type="button"
                            disabled={Boolean(activeAction)}
                            onClick={() => deleteComment(comment.id)}
                            className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {activeAction === `${comment.id}-delete`
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
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
                  onClick={() => {
                    setIsLoading(true);
                    setError("");
                    setPage((current) => current - 1);
                  }}
                  className="rounded-lg border border-[#e8ded2] px-4 py-2 text-sm font-medium text-[#481a2c] transition hover:bg-[#f7f0e6] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => {
                    setIsLoading(true);
                    setError("");
                    setPage((current) => current + 1);
                  }}
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