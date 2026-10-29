
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Remain In My Love, our faith, our values and our commitment to nurturing relationships, families and communities.",
};

const values = [
  {
    number: "01",
    title: "Faith",
    description:
      "Our Christian foundation inspires us to approach people and relationships with grace, humility and purpose.",
  },
  {
    number: "02",
    title: "Love",
    description:
      "We believe love is demonstrated through compassion, understanding, respect and intentional care.",
  },
  {
    number: "03",
    title: "Purpose",
    description:
      "We seek to make our work meaningful by encouraging positive change in lives, families and communities.",
  },
  {
    number: "04",
    title: "Service",
    description:
      "We value showing up for others, creating opportunities to help and treating every person with dignity.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Relationships",
    description:
      "Encouraging healthy connections, thoughtful communication and stronger interpersonal relationships.",
  },
  {
    number: "02",
    title: "Marriage & Family",
    description:
      "Promoting stronger marriages and family relationships through learning, encouragement and meaningful engagement.",
  },
  {
    number: "03",
    title: "Children",
    description:
      "Supporting the wellbeing, care and development of children through initiatives aligned with our mission.",
  },
  {
    number: "04",
    title: "Community",
    description:
      "Inspiring compassion, responsibility and a shared commitment to the wellbeing of our communities.",
  },
];



export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#FFFCF6] text-[#30201D]">
        {/* ABOUT HERO */}
        <section className="relative flex min-h-[590px] items-center overflow-hidden bg-[#3F0005] md:min-h-[680px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=85')",
            }}
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#250004]/95 via-[#3F0005]/80 to-[#3F0005]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#250004]/45 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 py-24 sm:px-10 lg:px-16">
            <div className="max-w-[720px]">
              <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-[#D6AD59] sm:text-xs">
                <span className="h-px w-10 bg-[#D6AD59]" />
                GET TO KNOW US
              </p>

              <h1 className="font-serif text-5xl leading-[1.13] tracking-[-0.035em] text-[#FFFCF6] sm:text-6xl md:text-7xl lg:text-[82px]">
                Rooted in faith.
                <br />
                Driven by love.
                <br />
                <em className="font-normal text-[#D6AD59]">
                  Living with purpose.
                </em>
              </h1>

              <p className="mt-7 max-w-[510px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                We believe love has the power to strengthen relationships,
                nurture families and transform communities.
              </p>

              <a
                href="#who-we-are"
                className="mt-9 inline-flex items-center gap-5 border-b border-[#D6AD59]/70 pb-3 text-xs font-semibold tracking-wide text-[#FFFCF6] transition-colors hover:text-[#D6AD59]"
              >
                <span className="text-white">Discover our story</span> <span className="text-lg text-white">↓</span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-7 right-6 z-10 text-[9px] font-medium tracking-[0.25em] text-white/80 sm:right-10 lg:right-16">
            FAITH <span className="px-2 text-[#D6AD59]">·</span> LOVE
            <span className="px-2 text-[#D6AD59]">·</span> PURPOSE
          </div>
        </section>

        {/* WHO WE ARE */}
        <section
          id="who-we-are"
          className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-32"
        >
          <div className="relative mx-auto w-full max-w-[490px] pb-12 pr-8 sm:pb-14 sm:pr-12">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#EEE4D9]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1100&q=85')",
                }}
                role="img"
                aria-label="Family sharing a moment together"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F0005]/30 to-transparent" />
            </div>

            <div className="absolute -right-1 bottom-0 flex h-28 w-28 items-center justify-center border-[6px] border-[#FFFCF6] bg-[#FFF0D6] p-4 sm:right-0 sm:h-36 sm:w-36 sm:p-5">
              <img
                src="/assets/images/logo.png"
                alt="Remain In My Love Inc. emblem"
                className="h-full w-full object-contain"
              />
            </div>

            <p className="absolute bottom-2 left-0 max-w-[180px] font-serif text-sm italic text-[#776762] sm:bottom-4">
              Love that transforms lives.
            </p>
          </div>

          <div className="lg:py-6">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#730104]">
              <span className="h-px w-8 bg-[#D6AD59]" />
              WHO WE ARE
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] text-[#30201D] sm:text-5xl">
              More than a name.
              <br />
              <em className="font-normal text-[#730104]">
                A way of living.
              </em>
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-[#776762] sm:text-base sm:leading-8">
              <p>
                Remain In My Love is a Christian organisation inspired by
                the call to live in love, walk in faith and serve with purpose.
              </p>

              <p>
                We care about the relationships that shape our lives:
                our relationships with one another, our marriages, our
                families and the communities we belong to.
              </p>

              <p>
                Through meaningful engagement, programmes and community
                initiatives, we seek to encourage a culture where love is
                not simply spoken, but demonstrated through everyday actions.
              </p>
            </div>

            <a
              href="/programmes"
              className="mt-8 inline-flex items-center gap-4 border-b border-[#D6AD59] pb-2 text-xs font-semibold text-[#730104] transition-colors hover:text-[#3F0005]"
            >
              Explore our programmes <span className="text-base">↗</span>
            </a>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="grid md:grid-cols-2">
          <div className="flex min-h-[330px] flex-col justify-center bg-[#3F0005] px-7 py-16 text-[#FFFCF6] sm:px-12 lg:px-[12%] lg:py-24">
            <p className="mb-6 text-[10px] font-semibold tracking-[0.25em] text-[#D6AD59]">
              OUR MISSION
            </p>

            <h2 className="font-serif text-3xl leading-[1.4] sm:text-4xl">
              To nurture love that strengthens relationships, supports
              families and inspires positive change in our communities.
            </h2>

            <div className="mt-8 h-px w-14 bg-[#D6AD59]" />
            <p className="mt-4 text-xs text-white/65">
              What we seek to do.
            </p>
          </div>

          <div className="flex min-h-[330px] flex-col justify-center bg-[#481B45] px-7 py-16 text-[#FFFCF6] sm:px-12 lg:px-[12%] lg:py-24">
            <p className="mb-6 text-[10px] font-semibold tracking-[0.25em] text-[#D6AD59]">
              OUR VISION
            </p>

            <h2 className="font-serif text-3xl leading-[1.4] sm:text-4xl">
              A world where faith, love and purpose inspire stronger
              families and caring communities.
            </h2>

            <div className="mt-8 h-px w-14 bg-[#D6AD59]" />
            <p className="mt-4 text-xs text-white/65">
              The future we hope to see.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="mx-auto max-w-[1240px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto mb-14 max-w-[620px] text-center sm:mb-16">
            <p className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#730104]">
              <span className="h-px w-8 bg-[#D6AD59]" />
              WHAT GUIDES US
              <span className="h-px w-8 bg-[#D6AD59]" />
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl">
              The heart behind
              <br />
              <em className="font-normal text-[#730104]">
                everything we do.
              </em>
            </h2>

            <p className="mx-auto mt-5 max-w-[480px] text-sm leading-7 text-[#776762]">
              Our values shape the way we serve, connect with people
              and pursue our purpose.
            </p>
          </div>

          <div className="grid gap-px bg-[#E9DED2] sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                className="group bg-[#FFFCF6] px-7 py-9 transition-colors duration-300 hover:bg-[#FFF0D6] sm:px-8 sm:py-10"
                key={value.number}
              >
                <span className="font-serif text-sm italic text-[#B18B48]">
                  {value.number}
                </span>

                <h3 className="mt-7 font-serif text-2xl text-[#730104]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#776762]">
                  {value.description}
                </p>

                <div className="mt-7 h-px w-9 bg-[#D6AD59] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </section>

        {/* AREAS OF FOCUS */}
        <section className="bg-[#F6EFE5] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16">
              <div>
                <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#730104]">
                  <span className="h-px w-8 bg-[#D6AD59]" />
                  WHERE OUR HEART IS
                </p>

                <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl">
                  Love in action.
                  <br />
                  <em className="font-normal text-[#730104]">
                    In every season of life.
                  </em>
                </h2>
              </div>

              <p className="max-w-[530px] text-sm leading-7 text-[#776762] sm:text-base sm:leading-8 lg:justify-self-end">
                We recognise that healthy relationships, supported
                children and thriving communities are interconnected.
                Our areas of focus reflect the people and relationships
                we hope to serve.
              </p>
            </div>

            <div className="border-t border-[#DCCDBD]">
              {focusAreas.map((area) => (
                <article
                  className="grid gap-3 border-b border-[#DCCDBD] py-7 sm:py-8 md:grid-cols-[55px_0.8fr_1.2fr] md:items-start md:gap-8"
                  key={area.number}
                >
                  <span className="pt-1 font-serif text-sm italic text-[#B18B48]">
                    {area.number}
                  </span>

                  <h3 className="font-serif text-2xl text-[#730104] sm:text-3xl">
                    {area.title}
                  </h3>

                  <p className="max-w-[480px] text-sm leading-7 text-[#776762]">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative overflow-hidden bg-[#3F0005] px-6 py-20 text-center text-[#FFFCF6] sm:px-10 sm:py-28">
          <div
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D6AD59]/15 sm:h-[440px] sm:w-[440px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#D6AD59]/15 sm:h-[360px] sm:w-[360px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[720px]">
            <p className="mb-6 text-[10px] font-semibold tracking-[0.28em] text-[#D6AD59]">
              BE PART OF THE STORY
            </p>

            <h2 className="font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl md:text-7xl">
              Love grows when
              <br />
              <em className="font-normal text-[#D6AD59]">
                we share it.
              </em>
            </h2>

            <p className="mx-auto mt-6 max-w-[490px] text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Join us in creating meaningful connections and making
              a difference through faith, compassion and service.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-4 bg-[#D6AD59] px-7 text-xs font-semibold text-[#3F0005] transition-colors hover:bg-[#FFF0D6]"
              >
                Get Involved <span>↗</span>
              </a>

              <a
                href="/donate"
                className="inline-flex min-h-12 items-center justify-center gap-4 border border-white/35 px-7 text-xs font-semibold text-white transition-colors hover:border-[#D6AD59] hover:text-[#D6AD59]"
              >
                Support Our Work <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
