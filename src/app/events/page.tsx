import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const events = [
  {
    title: "Grace for Him: The Man Within",
    subtitle: "Raising men of character, purpose, and godly influence.",
    description:
      "A meaningful gathering focused on helping men grow in character, strengthen their relationships, and discover the purpose within them. Through honest conversations and practical insights, we create room for growth, reflection, and positive change.",
    paragraphs: [
      "Join us for conversations that encourage personal development, accountability, and stronger relationships.",
      "This event is an opportunity to learn, connect with others, and take practical steps towards becoming the man you are called to be.",
    ],
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85",
    date: "Details to be announced",
    time: "Time to be announced",
    venue: "Venue to be announced",
    featured: true,
    registrationUrl: "",
  },
  {
    title: "Building Stronger Bonds",
    subtitle: "Creating healthier relationships through love and understanding.",
    description:
      "Healthy relationships grow when people communicate honestly, listen with empathy, and choose to understand one another. This gathering explores practical ways to build trust and nurture meaningful connections.",
    paragraphs: [
      "Discover simple ways to communicate more effectively and approach relationship challenges with patience and understanding.",
      "Come ready to learn, share, and grow alongside a community that values healthy relationships.",
    ],
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    date: "Details to be announced",
    time: "Time to be announced",
    venue: "Venue to be announced",
    featured: false,
    registrationUrl: "",
  },
  {
    title: "Growing Together",
    subtitle: "Building a community where people feel supported and valued.",
    description:
      "Lasting change happens when people grow together. This community-focused gathering creates space for encouragement, shared experiences, learning, and stronger connections.",
    paragraphs: [
      "Explore the importance of community, support, and intentional growth in our everyday lives.",
      "Connect with others who share a desire to build stronger families, healthier relationships, and a more caring community.",
    ],
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85",
    date: "Details to be announced",
    time: "Time to be announced",
    venue: "Venue to be announced",
    featured: false,
    registrationUrl: "",
  },
];

function EventDetails({
  date,
  time,
  venue,
}: {
  date: string;
  time: string;
  venue: string;
}) {
  return (
    <div className="mt-5 space-y-3 border-t border-[#eadfce] pt-4 text-sm text-[#655b58]">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-lg text-[#b68a3a]" aria-hidden="true">
          ◷
        </span>
        <div>
          <p className="font-semibold text-[#4c2637]">Date</p>
          <p>{date}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-lg text-[#b68a3a]" aria-hidden="true">
          ◷
        </span>
        <div>
          <p className="font-semibold text-[#4c2637]">Time</p>
          <p>{time}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-lg text-[#b68a3a]" aria-hidden="true">
          ◎
        </span>
        <div>
          <p className="font-semibold text-[#4c2637]">Venue</p>
          <p>{venue}</p>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const featuredEvent = events.find((event) => event.featured);
  const upcomingEvents = events.filter((event) => !event.featured);

  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#39232e]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#4b2035] px-6 py-20 text-center text-[#fffaf2] sm:py-28">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full border border-[#c8a45d]/20" />
        <div className="pointer-events-none absolute -bottom-40 -right-16 h-96 w-96 rounded-full border border-[#c8a45d]/20" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#d9b96e]">
            Remain In My Love
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Gather. Connect. <span className="text-[#d9b96e]">Grow.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f0e5e8] sm:text-lg">
            Discover events that inspire meaningful relationships, encourage
            personal growth, and bring our community together in love.
          </p>

          <a
            href="#upcoming-events"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c8a45d] px-7 py-3.5 text-sm font-bold text-[#3e2030] transition hover:bg-[#dfc27f]"
          >
            Explore Events
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a47b35]">
            Come Be Part of It
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#4b2035] sm:text-4xl">
            Moments That Bring Us Together
          </h2>

          <p className="mt-5 leading-8 text-[#71666b]">
            At Remain In My Love, our events create opportunities to learn,
            share experiences, build relationships, and grow together. Whether
            you are joining a conversation, a conference, or a community
            gathering, there is room for you here.
          </p>
        </div>
      </section>

      {/* Featured event */}
      {featuredEvent && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c8a45d]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47b35]">
                Featured Event
              </p>
            </div>

            <article className="grid overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-sm lg:grid-cols-2">
              <div className="relative min-h-[280px] bg-[#e9dfd2] sm:min-h-[420px]">
                {/* Replace this sample photograph with your event flyer when ready. */}
                <img
                  src={featuredEvent.image}
                  alt={`Image for ${featuredEvent.title}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321827]/65 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a47b35]">
                  Remain In My Love Events
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#4b2035] sm:text-4xl">
                  {featuredEvent.title}
                </h2>

                <p className="mt-4 text-lg font-semibold leading-7 text-[#87652e]">
                  {featuredEvent.subtitle}
                </p>

                <p className="mt-5 leading-8 text-[#71666b]">
                  {featuredEvent.description}
                </p>

                {featuredEvent.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 leading-8 text-[#71666b]"
                  >
                    {paragraph}
                  </p>
                ))}

                <EventDetails
                  date={featuredEvent.date}
                  time={featuredEvent.time}
                  venue={featuredEvent.venue}
                />

                {featuredEvent.registrationUrl ? (
                  <a
                    href={featuredEvent.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex rounded-full bg-[#4b2035] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#65334a]"
                  >
                    Register for Event
                  </a>
                ) : (
                  <p className="mt-6 text-sm italic text-[#8a7a7f]">
                    Event registration details will be shared soon.
                  </p>
                )}
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Upcoming events */}
      <section id="upcoming-events" className="bg-[#f2ece3] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a47b35]">
              Save Your Place
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#4b2035] sm:text-4xl">
              Upcoming Events
            </h2>

            <p className="mt-4 leading-8 text-[#71666b]">
              Find opportunities to connect, learn, and be part of something
              meaningful. Event details will be updated as they are confirmed.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-2xl border border-[#e6d9c8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden bg-[#e9dfd2]">
                  {/* Replace this sample photograph with the actual event flyer. */}
                  <img
                    src={event.image}
                    alt={`Image for ${event.title}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#321827]/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#faf7f1] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4b2035]">
                    Upcoming Event
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-[#4b2035]">
                    {event.title}
                  </h3>

                  <p className="mt-3 font-semibold leading-7 text-[#9a7537]">
                    {event.subtitle}
                  </p>

                  <p className="mt-4 leading-7 text-[#71666b]">
                    {event.description}
                  </p>

                  {event.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 leading-7 text-[#71666b]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  <EventDetails
                    date={event.date}
                    time={event.time}
                    venue={event.venue}
                  />

                  {event.registrationUrl ? (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex rounded-full bg-[#4b2035] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#65334a]"
                    >
                      Register Now
                    </a>
                  ) : (
                    <p className="mt-5 text-sm italic text-[#8a7a7f]">
                      More information coming soon.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-[#4b2035] px-6 py-16 text-center text-[#fffaf2] sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d9b96e]">
            Stay Connected
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            There Is a Place for You Here
          </h2>

          <p className="mt-5 leading-8 text-[#f0e5e8]">
            Keep checking this page for upcoming gatherings, new announcements,
            and opportunities to grow with the Remain In My Love community.
          </p>

          <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-[#d9b96e] px-7 py-3.5 text-sm font-bold text-[#f4d99a] transition hover:bg-[#d9b96e] hover:text-[#3e2030]"
      >
        Back to Home
      </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
