
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Our Children | Remain In My Love",
  description:
    "Meet the children supported by Remain In My Love and discover how you can make a difference in a child's life.",
};

const children = [
  {
    id: "sample-01",
    name: "Sample Profile One",
    ageGroup: "CHILD PROFILE",
    introduction:
      "Every child deserves the opportunity to learn, grow and build a hopeful future.",
    image:
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Illustrative portrait for a sample child profile",
  },
  {
    id: "sample-02",
    name: "Sample Profile Two",
    ageGroup: "CHILD PROFILE",
    introduction:
      "Your kindness can help create opportunities for care, education and a brighter tomorrow.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Illustrative portrait for a sample child profile",
  },
  {
    id: "sample-03",
    name: "Sample Profile Three",
    ageGroup: "CHILD PROFILE",
    introduction:
      "Together, we can help children feel supported, valued and encouraged to reach their potential.",
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Illustrative portrait for a sample child profile",
  },
  {
    id: "sample-04",
    name: "Sample Profile Four",
    ageGroup: "CHILD PROFILE",
    introduction:
      "A caring community can make a meaningful difference in a child's everyday life.",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Illustrative portrait for a sample child profile",
  },
];

export default function OrphanagePage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#FFFCF6] text-[#30201D]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#3F0005]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1800&q=85')",
            }}
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#3F0005] via-[#3F0005]/90 to-[#3F0005]/55" />

          <div className="relative mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-[#D6AD59] sm:text-xs">
              <span className="h-px w-9 bg-[#D6AD59]" />
              CHILDREN'S CARE & SUPPORT
            </p>

            <h1 className="max-w-[800px] font-serif text-5xl leading-[1.12] tracking-[-0.035em] text-[#FFFCF6] sm:text-6xl md:text-7xl">
              Every child deserves
              <br />
              <em className="font-normal text-[#D6AD59]">
                a chance to thrive.
              </em>
            </h1>

            <p className="mt-7 max-w-[550px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              A little care can make a lasting difference. Discover how
              you can support a child's wellbeing, education and journey
              towards a brighter future.
            </p>

            <a
              href="#meet-the-children"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-4 bg-[#D6AD59] px-7 text-xs font-semibold text-[#3F0005] transition-colors hover:bg-[#FFF0D6]"
            >
              Meet the children <span className="text-base">↓</span>
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-[900px] px-6 py-16 text-center sm:px-10 sm:py-20">
          <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-[#730104]">
            LOVE IN ACTION
          </p>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            One act of kindness.
            <br />
            <em className="font-normal text-[#730104]">
              A world of possibility.
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-[660px] text-sm leading-7 text-[#776762] sm:text-base sm:leading-8">
            Every child deserves care, encouragement and the opportunity
            to grow. Through individual child support, we hope to connect
            compassionate people with meaningful ways to make a difference.
          </p>
        </section>

        {/* CHILD PROFILES */}
        <section
          id="meet-the-children"
          className="bg-[#F6EFE5] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-[#730104]">
                  MEET THE CHILDREN
                </p>

                <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                  A little love goes
                  <br />
                  <em className="font-normal text-[#730104]">
                    a long way.
                  </em>
                </h2>
              </div>

              <p className="max-w-[390px] text-sm leading-7 text-[#776762]">
                Every child has a story and a future worth investing in.
                Explore the profiles below to discover how you can help.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {children.map((child) => (
                <article
                  key={child.id}
                  className="group flex flex-col overflow-hidden border border-[#E9DED2] bg-[#FFFCF6] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3F0005]/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#E9DED2]">
                    <img
                      src={child.image}
                      alt={child.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#250004]/40 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 bg-[#FFFCF6]/95 px-3 py-2 text-[9px] font-semibold tracking-[0.16em] text-[#730104]">
                      {child.ageGroup}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-serif text-2xl text-[#3F0005]">
                      {child.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[#776762]">
                      {child.introduction}
                    </p>

                    <a
                      href={`/orphanage/support/${child.id}`}
                      className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 bg-[#730104] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#3F0005]"
                    >
                      <span>♡</span>
                      Support a Child
                      <span className="ml-auto text-base">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs leading-6 text-[#776762]">
              These are sample profiles for design purposes only. Approved
              child profiles will appear here once the management system
              is connected.
            </p>
          </div>
        </section>

        {/* CLOSING MESSAGE */}
        <section className="bg-[#3F0005] px-6 py-16 text-center text-[#FFFCF6] sm:px-10 sm:py-24">
          <div className="mx-auto max-w-[700px]">
            <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-[#D6AD59]">
              MAKE A DIFFERENCE
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Love is more than
              <br />
              <em className="font-normal text-[#D6AD59]">
                words. It's action.
              </em>
            </h2>

            <p className="mx-auto mt-6 max-w-[520px] text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Your support can help provide opportunities for a child to
              learn, grow and look forward to tomorrow.
            </p>

            <a
              href="#meet-the-children"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-4 bg-[#D6AD59] px-7 text-xs font-semibold text-[#3F0005] transition-colors hover:bg-[#FFF0D6]"
            >
              Choose a child to support <span className="text-white">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-4 bg-[#250004] px-6 py-7 text-center text-[11px] text-white/65 sm:flex-row sm:px-10 lg:px-16">
        <p>© 2026 Remain In My Love. All rights reserved.</p>

        <a
          href="/donate"
          className="text-[#D6AD59] transition-colors hover:text-[#FFF0D6]"
        >
          Support the mission ↗
        </a>
      </footer>
    </>
  );
}
