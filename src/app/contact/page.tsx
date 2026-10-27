
import Header from "@/components/Header";

const contactDetails = [
  {
    icon: "✉",
    title: "Email Us",
    description: "Send us a message and our team will get back to you.",
    value: "Add your official email address",
    href: "",
  },
  {
    icon: "◎",
    title: "Follow Our Journey",
    description: "Connect with us and keep up with our community.",
    value: "@remaininmyloveinc",
    href: "https://www.tiktok.com/@remaininmyloveinc",
  },
];

export default function ContactPage() {
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
            We Would Love to <span className="text-[#d9b96e]">Hear From You</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f0e5e8] sm:text-lg">
            Have a question, a story to share, or an interest in working with
            us? Reach out. We would be happy to connect with you.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-10 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a47b35]">
            Let&apos;s Connect
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#4b2035] sm:text-4xl">
            Every Connection Matters
          </h2>

          <p className="mt-5 leading-8 text-[#71666b]">
            At Remain In My Love, we believe meaningful change begins with
            connection. Whether you want to learn more about our work, ask
            about an event, explore a partnership, or simply say hello, this is
            a good place to start.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="px-6 pb-20 pt-8 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <aside className="rounded-3xl bg-[#4b2035] p-7 text-[#fffaf2] sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b96e]">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              We&apos;re Here to Connect
            </h2>

            <p className="mt-5 leading-8 text-[#f0e5e8]">
              We welcome your questions, feedback, ideas, and opportunities to
              work together. Send us a message or connect with us online.
            </p>

            <div className="mt-9 space-y-7">
              {contactDetails.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#d9b96e]">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#e4d5dc]">
                      {item.description}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block break-words text-sm font-semibold text-[#e6c67b] underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 break-words text-sm font-semibold text-[#e6c67b]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-sm leading-7 text-[#e4d5dc]">
                We look forward to hearing from you and exploring how we can
                make a positive difference together.
              </p>
            </div>
          </aside>

          {/* Contact form */}
          <div className="rounded-3xl border border-[#eadfce] bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47b35]">
              Send a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#4b2035]">
              How Can We Help?
            </h2>

            <p className="mt-4 leading-7 text-[#71666b]">
              Fill in the details below. We&apos;ll use your message to
              understand how best to assist you.
            </p>

            <form
              action="mailto:"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#4b2035]"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3.5 text-sm text-[#39232e] outline-none transition placeholder:text-[#a79ba0] focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#4b2035]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3.5 text-sm text-[#39232e] outline-none transition placeholder:text-[#a79ba0] focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#4b2035]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3.5 text-sm text-[#39232e] outline-none transition placeholder:text-[#a79ba0] focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="mb-2 block text-sm font-semibold text-[#4b2035]"
                >
                  What Is Your Message About?
                </label>
                <select
                  id="reason"
                  name="reason"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3.5 text-sm text-[#39232e] outline-none transition focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="General enquiry">General enquiry</option>
                  <option value="Events">Events and programmes</option>
                  <option value="Partnership">Partnership opportunity</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#4b2035]"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about how we can help..."
                  required
                  className="w-full resize-y rounded-xl border border-[#e5d9ce] bg-[#fdfbf8] px-4 py-3.5 text-sm leading-7 text-[#39232e] outline-none transition placeholder:text-[#a79ba0] focus:border-[#b68a3a] focus:ring-2 focus:ring-[#c8a45d]/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#4b2035] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#65334a] sm:w-auto"
              >
                Send Your Message <span className="ml-2">→</span>
              </button>

              <p className="text-xs leading-6 text-[#8a7a7f]">
                Please note: this is a frontend form. Message delivery needs to
                be connected to an email service or backend before the form can
                reliably send messages.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="bg-[#f2ece3] px-6 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a47b35]">
            Remain In My Love
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#4b2035] sm:text-4xl">
            Let&apos;s Make a Difference Together
          </h2>

          <p className="mt-5 leading-8 text-[#71666b]">
            Every message is an opportunity to connect, encourage, and grow.
            Thank you for being part of our journey.
          </p>

          <a
            href="/events"
            className="mt-7 inline-flex rounded-full border border-[#4b2035] px-7 py-3.5 text-sm font-bold text-[#4b2035] transition hover:bg-[#4b2035] hover:text-white"
          >
            Explore Our Events
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#321827] px-6 py-6 text-center text-sm text-[#d8c8ce]">
        
        <p>© 2026 Remain In My Love. All rights reserved.</p>
      </footer>
    </main>
  );
}
