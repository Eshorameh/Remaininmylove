
import Header from "@/components/Header";

const teamGroups = [
  {
    title: "Leadership Team",
    subtitle: "Guiding the vision and mission",
    description:
      "Meet the people providing leadership, direction, and support for the work of Remain In My Love in Nigeria.",
    members: [
      {
        name: "Amara Okafor",
        role: "Country Coordinator",
        bio: "Amara supports the organisation's local direction, coordinates initiatives, and helps build partnerships that advance its mission.",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Daniel Adeyemi",
        role: "Director",
        bio: "Daniel provides strategic guidance and helps ensure that the team's activities remain focused on its values and objectives.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Ngozi Eze",
        role: "Team Adviser",
        bio: "Ngozi offers guidance and encouragement to team members, supporting thoughtful decisions and effective collaboration.",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=85",
      },
    ],
  },
  {
    title: "Programmes & Community Team",
    subtitle: "Connecting people and communities",
    description:
      "This team supports programmes, community engagement, outreach activities, and opportunities for people to learn and grow together.",
    members: [
      {
        name: "Chidinma Eze",
        role: "Programme Lead",
        bio: "Chidinma helps plan and coordinate programmes designed to encourage healthy relationships, stronger families, and personal growth.",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Emeka Nwosu",
        role: "Community Engagement Officer",
        bio: "Emeka helps connect community members with events, resources, and conversations that support the organisation's mission.",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Tomi Adebayo",
        role: "Volunteer Coordinator",
        bio: "Tomi supports volunteers, helps coordinate participation, and encourages people to contribute their time and talents.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
      },
    ],
  },
  {
    title: "Media & Communications Team",
    subtitle: "Sharing the message of love",
    description:
      "From storytelling to digital content, this team helps communicate the organisation's message and keep the community informed.",
    members: [
      {
        name: "David Okoro",
        role: "Media Lead",
        bio: "David coordinates media activities and helps communicate the organisation's work through clear, engaging content.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Esther Bello",
        role: "Content Creator",
        bio: "Esther develops engaging content and stories that help audiences connect with the organisation's values and programmes.",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Michael James",
        role: "Communications Officer",
        bio: "Michael supports communications, event announcements, and digital updates that help people stay connected.",
        image:
          "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=800&q=85",
      },
    ],
  },
];

export default function NigerianTeamPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f8f5ef] text-[#351626]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#45172f] px-6 py-20 text-white sm:py-28">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#c9a45c]/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e0c27f]">
              Remain In My Love · Nigeria
            </p>

            <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Meet Our Nigerian Team
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Meet the people behind our mission to encourage love, strengthen
              families, and inspire healthier relationships in our communities.
            </p>

            <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#c9a45c]" />
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 pb-8 pt-16 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9c7739]">
              The People Behind the Mission
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              United by Love. Driven by Purpose.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6b5b63]">
              Our team brings together people with a shared passion for
              meaningful relationships, family wellbeing, and positive
              community impact. Together, we work to make our message of love
              accessible to more people.
            </p>
          </div>
        </section>

        {/* Team categories */}
        <section className="px-6 pb-20 pt-8 sm:pb-24">
          <div className="mx-auto max-w-7xl space-y-20">
            {teamGroups.map((group, index) => (
              <section
                key={group.title}
                id={`team-${index + 1}`}
                aria-labelledby={`heading-${index + 1}`}
              >
                <div className="mb-9 text-center">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#a27c3d]">
                    Team {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2
                    id={`heading-${index + 1}`}
                    className="text-3xl font-semibold text-[#45172f] sm:text-4xl"
                  >
                    {group.title}
                  </h2>

                  <p className="mt-3 text-base font-medium text-[#9c7739]">
                    {group.subtitle}
                  </p>

                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b5b63] sm:text-base">
                    {group.description}
                  </p>

                  <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#c9a45c]" />
                </div>

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member) => (
                    <article
                      key={member.name}
                      className="group overflow-hidden rounded-2xl border border-[#e9dfd6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#eee4dc]">
                        <img
                          src={member.image}
                          alt={`Placeholder portrait for ${member.name}`}
                          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />

                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      <div className="p-6">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#a27c3d]">
                          {member.role}
                        </p>

                        <h3 className="text-xl font-semibold text-[#45172f]">
                          {member.name}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#6b5b63]">
                          {member.bio}
                        </p>

                        <div className="mt-5 h-px w-full bg-[#eee4dc]" />

                        <p className="mt-4 text-xs font-medium text-[#8b737e]">
                          Illustrative profile · Sample content
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9c7739]">
              Our Commitment
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-[#45172f] sm:text-4xl">
              Building a Community Where Love Can Grow
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6b5b63]">
              Through education, engagement, and shared experiences, we want to
              encourage people and families to build relationships rooted in
              understanding, care, and commitment.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#45172f] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#612443]"
            >
              Explore Remain In My Love
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#351326] px-6 py-8 text-center text-sm text-white/70">
    
            <p>© 2026 Remain In My Love. All rights reserved.</p>
          
        </footer>
      </main>
    </>
  );
}
