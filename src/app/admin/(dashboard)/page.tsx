import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
};

const sections = [
  {
    title: "Stories & Blog",
    description: "Create and manage stories, articles and testimonies.",
  },
  {
    title: "Children",
    description: "Manage child profiles and individual support information.",
  },
  {
    title: "Events",
    description: "Organise upcoming events and publish event updates.",
  },
  {
    title: "Comments",
    description: "Review submitted comments before they appear publicly.",
  },
  {
    title: "Donations",
    description: "View and manage donation-related information.",
  },
  {
    title: "Team",
    description: "Manage team profiles and organisational information.",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-9">
        <p className="text-sm font-medium text-[#a47b43]">
          Your workspace
        </p>
        <h2 className="mt-2 font-serif text-3xl text-[#481a2c] sm:text-4xl">
          Welcome to your dashboard
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756a6c]">
          Manage the content and activities that support the mission of
          Remain In My Love. Each management section will be connected
          incrementally to the backend.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-[#e8ded2] bg-[#fffdf9] p-6 shadow-sm"
          >
            <div className="mb-5 h-1 w-12 rounded-full bg-[#d1ad69]" />
            <h3 className="font-serif text-xl text-[#481a2c]">
              {section.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#756a6c]">
              {section.description}
            </p>
            {section.title === "Stories & Blog" ? (
              <Link
                href="/admin/posts"
                className="mt-5 inline-block text-xs font-semibold text-[#a47b43] transition hover:text-[#481a2c]"
              >
                Manage posts
              </Link>
            ) : (
              <p className="mt-5 text-xs font-medium text-[#a47b43]">
                Management module
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
