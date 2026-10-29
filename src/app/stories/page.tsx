
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  slug: string;
  type: "Story" | "Blog";
  category: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
  readTime: string;
};

const categories = [
  "All",
  "Stories",
  "Relationships",
  "Faith",
  "Personal Growth",
  "Community",
];

const posts: Post[] = [
  {
    id: 1,
    title: "Building Healthy Relationships That Last",
    slug: "building-healthy-relationships",
    type: "Blog",
    category: "Relationships",
    excerpt:
      "Healthy relationships are built intentionally. Discover how communication, patience, trust, and understanding help us nurture meaningful connections.",
    author: "Remain In My Love",
    date: "2026-10-20",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
    featured: true,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "A Story of Hope and New Beginnings",
    slug: "a-story-of-hope",
    type: "Story",
    category: "Stories",
    excerpt:
      "Every journey has its challenges. This sample story reflects on finding courage, embracing change, and discovering hope again.",
    author: "Remain In My Love",
    date: "2026-10-14",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Growing Through Faith, One Day at a Time",
    slug: "growing-through-faith",
    type: "Blog",
    category: "Faith",
    excerpt:
      "Growth doesn't always happen in a moment. Sometimes it is found in the little choices, quiet reflections, and lessons of everyday life.",
    author: "Remain In My Love",
    date: "2026-10-09",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Love in Action: The Power of Showing Up",
    slug: "love-in-action",
    type: "Story",
    category: "Community",
    excerpt:
      "Small acts of kindness can make a difference. Explore the role of compassion, service, and community in building a better world.",
    author: "Remain In My Love",
    date: "2026-10-02",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Becoming the Person You Want to Be",
    slug: "becoming-your-better-self",
    type: "Blog",
    category: "Personal Growth",
    excerpt:
      "Personal growth starts with honest reflection. Learn how consistent habits, self-awareness, and accountability can support your journey.",
    author: "Remain In My Love",
    date: "2026-09-24",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=85",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Listening Is Also an Expression of Love",
    slug: "listening-as-an-expression-of-love",
    type: "Blog",
    category: "Relationships",
    excerpt:
      "Sometimes the most meaningful thing we can offer another person is our attention. Discover how intentional listening builds connection.",
    author: "Remain In My Love",
    date: "2026-09-16",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    readTime: "3 min read",
  },
  {
    id: 7,
    title: "The Courage to Start Again",
    slug: "the-courage-to-start-again",
    type: "Story",
    category: "Stories",
    excerpt:
      "Starting again can feel uncertain. This sample reflection explores resilience, the lessons we carry, and the possibilities ahead.",
    author: "Remain In My Love",
    date: "2026-09-08",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",
    readTime: "4 min read",
  },
  {
    id: 8,
    title: "Creating Space for Meaningful Conversations",
    slug: "meaningful-conversations",
    type: "Blog",
    category: "Community",
    excerpt:
      "Good conversations create room for understanding. Explore how we can make our homes and communities places where people feel heard.",
    author: "Remain In My Love",
    date: "2026-08-29",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85",
    readTime: "5 min read",
  },
];

const PAGE_SIZE = 6;

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#eadfce] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/stories/${post.slug}`}
        className="block"
        aria-label={`Read ${post.title}`}
      >
        <div className="relative h-56 overflow-hidden bg-[#e9dfd2]">
          <img
            src={post.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-[#faf7f1] px-3 py-1.5 text-xs font-bold text-[#4b2035]">
            {post.type}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#9a7537]">
          <span className="font-bold">{post.category}</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h3 className="mt-3 text-xl font-bold leading-snug text-[#4b2035] transition group-hover:text-[#87652e]">
          <Link href={`/stories/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#71666b]">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#eee5da] pt-4">
          <span className="text-xs text-[#82757a]">{post.readTime}</span>

          <Link
            href={`/stories/${post.slug}`}
            className="text-sm font-bold text-[#4b2035] hover:text-[#a47b35]"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function StoriesPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sort, setSort] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const featuredPost = posts.find((post) => post.featured);


const filteredPosts = posts
  .filter((post) => !post.featured)
  .filter((post) => {
    const matchesCategory =
      category === "All" ||
      (category === "Stories"
        ? post.type === "Story"
        : post.category === category);

    const term = search.trim().toLowerCase();

    const matchesSearch =
      !term ||
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term);

    const matchesFrom = !fromDate || post.date >= fromDate;
    const matchesTo = !toDate || post.date <= toDate;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesFrom &&
      matchesTo
    );
  })
  .sort((a, b) =>
    sort === "newest"
      ? b.date.localeCompare(a.date)
      : a.date.localeCompare(b.date)
  );


  const hasFilters =
    category !== "All" || search || fromDate || toDate;

  function resetFilters() {
    setCategory("All");
    setSearch("");
    setFromDate("");
    setToDate("");
    setSort("newest");
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#39232e]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#4b2035] px-6 py-20 text-center text-[#fffaf2] sm:py-28">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full border border-[#c8a45d]/20" />
        <div className="pointer-events-none absolute -bottom-40 -right-16 h-96 w-96 rounded-full border border-[#c8a45d]/20" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9b96e]">
            Remain In My Love
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
            Stories & <span className="text-[#d9b96e]">Blog</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f0e5e8] sm:text-lg">
            Stories that inspire. Conversations that matter. Insights that
            help us love, live, and grow better together.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-10 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a47b35]">
            Read. Reflect. Grow.
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#4b2035] sm:text-4xl">
            Words, Stories & Shared Experiences
          </h2>

          <p className="mt-5 leading-8 text-[#71666b]">
            Explore personal stories, practical insights, and thoughtful
            conversations about relationships, faith, personal growth, and
            community.
          </p>
        </div>
      </section>

      {/* Featured story */}
      {featuredPost && (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c8a45d]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47b35]">
                Editor&apos;s Pick
              </p>
            </div>

            <article className="grid overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-sm lg:grid-cols-2">
              <Link
                href={`/stories/${featuredPost.slug}`}
                className="relative block min-h-[280px] overflow-hidden bg-[#e9dfd2] sm:min-h-[420px]"
                aria-label={`Read ${featuredPost.title}`}
              >
                <img
                  src={featuredPost.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </Link>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a47b35]">
                  <span>Featured {featuredPost.type}</span>
                  <span>•</span>
                  <span>{featuredPost.category}</span>
                </div>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#4b2035] sm:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 leading-8 text-[#71666b]">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-5 text-sm text-[#82757a]">
                  By {featuredPost.author} ·{" "}
                  {formatDate(featuredPost.date)} · {featuredPost.readTime}
                </div>

                <Link
                  href={`/stories/${featuredPost.slug}`}
                  className="mt-7 inline-flex w-fit rounded-full bg-[#4b2035] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#65334a]"
                >
                  Read Featured Story →
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="bg-[#f2ece3] px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47b35]">
              Explore Our Content
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#4b2035]">
              Latest Stories & Articles
            </h2>
          </div>

          <div className="rounded-2xl border border-[#e6d9c8] bg-white p-5 sm:p-7">
            {/* Search */}
            <div>
              <label
                htmlFor="story-search"
                className="mb-2 block text-sm font-semibold text-[#4b2035]"
              >
                Search articles
              </label>

              <input
                id="story-search"
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                placeholder="Search by title, topic, or keyword..."
                className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3.5 text-sm text-[#39232e] outline-none transition placeholder:text-[#a79ba0] focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
              />
            </div>

            {/* Category */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-[#4b2035]">
                Browse by category
              </p>

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setCategory(item);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    aria-pressed={category === item}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                      category === item
                        ? "border-[#4b2035] bg-[#4b2035] text-white"
                        : "border-[#e5d9ce] bg-white text-[#655b58] hover:border-[#b68a3a] hover:text-[#4b2035]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Date and sort filters */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="from-date"
                  className="mb-2 block text-sm font-semibold text-[#4b2035]"
                >
                  Published from
                </label>
                <input
                  id="from-date"
                  type="date"
                  value={fromDate}
                  max={toDate || undefined}
                  onChange={(e) => {
                    setFromDate(e.target.value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3 text-sm text-[#39232e] outline-none focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="to-date"
                  className="mb-2 block text-sm font-semibold text-[#4b2035]"
                >
                  Published until
                </label>
                <input
                  id="to-date"
                  type="date"
                  min={fromDate || undefined}
                  value={toDate}
                  onChange={(e) => {
                    setToDate(e.target.value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3 text-sm text-[#39232e] outline-none focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="story-sort"
                  className="mb-2 block text-sm font-semibold text-[#4b2035]"
                >
                  Sort by date
                </label>
                <select
                  id="story-sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3 text-sm text-[#39232e] outline-none focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
              </div>
            </div>

            {hasFilters && (
              <div className="mt-5">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-sm font-bold text-[#7d4a5e] underline underline-offset-4 hover:text-[#4b2035]"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-6 mt-9 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#71666b]" aria-live="polite">
              Showing {Math.min(visibleCount, filteredPosts.length)} of{" "}
              {filteredPosts.length} articles
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.slice(0, visibleCount).map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {visibleCount < filteredPosts.length && (
                <div className="mt-12 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((count) => count + PAGE_SIZE)
                    }
                    className="rounded-full border border-[#4b2035] px-8 py-3.5 text-sm font-bold text-[#4b2035] transition hover:bg-[#4b2035] hover:text-white"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-[#eadfce] bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f2ece3] text-[#8a6a38]">
                <span className="text-2xl">⌕</span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#4b2035]">
                No articles found
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#71666b]">
                Try another search term, category, or date range.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-full bg-[#4b2035] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#65334a]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#4b2035] px-6 py-16 text-center text-[#fffaf2] sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d9b96e]">
            Remain In My Love
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Every Story Has the Power to Inspire
          </h2>

          <p className="mt-5 leading-8 text-[#f0e5e8]">
            Keep learning, keep sharing, and keep growing with our community.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#c8a45d] px-7 py-3.5 text-sm font-bold text-[#3e2030] transition hover:bg-[#dfc27f]"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </main>
  );
}
