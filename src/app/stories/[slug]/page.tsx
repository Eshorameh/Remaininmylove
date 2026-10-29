
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articles = [
  {
    slug: "building-healthy-relationships",
    title: "Building Healthy Relationships That Last",
    type: "Blog",
    category: "Relationships",
    author: "Remain In My Love",
    date: "20 October 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Healthy relationships are built intentionally through communication, patience, trust, and understanding.",
    sections: [
      {
        heading: "Healthy relationships require intention",
        paragraphs: [
          "Meaningful relationships do not grow strong by accident. They require consistent effort, mutual respect, patience, and a willingness to understand one another.",
          "Whether we are building a friendship, strengthening a marriage, or nurturing family connections, small intentional actions can make a lasting difference."
        ]
      },
      {
        heading: "Make communication a priority",
        paragraphs: [
          "Good communication means more than speaking. It also means listening without rushing to judge, asking questions when something is unclear, and expressing feelings with honesty and kindness.",
          "When difficult conversations arise, aim to understand the other person's perspective instead of focusing only on proving your own point."
        ]
      },
      {
        heading: "Build trust through consistent actions",
        paragraphs: [
          "Trust grows when our actions align with our words. Keeping promises, respecting boundaries, admitting mistakes, and taking responsibility all help create a stronger foundation.",
          "Healthy relationships are not perfect relationships. They are relationships in which people can learn, repair harm, and grow together."
        ]
      },
      {
        heading: "Choose love in everyday moments",
        paragraphs: [
          "Love is often expressed through ordinary choices: showing up, offering encouragement, giving someone your attention, and treating them with dignity even when you disagree.",
          "At Remain In My Love, we believe that nurturing healthy relationships begins with intentional care, understanding, and a commitment to growth."
        ]
      }
    ]
  },
  {
    slug: "a-story-of-hope",
    title: "A Story of Hope and New Beginnings",
    type: "Story",
    category: "Stories",
    author: "Remain In My Love",
    date: "14 October 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "A reflection on finding courage, embracing change, and discovering hope again.",
    sections: [
      {
        heading: "Every new beginning starts somewhere",
        paragraphs: [
          "Life can bring seasons when the way forward feels uncertain. During those moments, hope can remind us that our present circumstances do not have to define our entire journey.",
          "Beginning again does not mean that the past never happened. It means we can learn from our experiences and take the next step with renewed courage."
        ]
      },
      {
        heading: "Give yourself room to grow",
        paragraphs: [
          "Change takes time. Small steps, supportive relationships, and the courage to ask for help can make difficult seasons easier to navigate.",
          "This sample reflection is a starting point for sharing real stories of resilience and new beginnings from the Remain In My Love community."
        ]
      }
    ]
  },
  {
    slug: "growing-through-faith",
    title: "Growing Through Faith, One Day at a Time",
    type: "Blog",
    category: "Faith",
    author: "Remain In My Love",
    date: "9 October 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Growth can be found in small choices, quiet reflection, and the lessons of everyday life.",
    sections: [
      {
        heading: "Growth is a journey",
        paragraphs: [
          "Personal and spiritual growth rarely happens all at once. Often, it develops through daily decisions, honest reflection, and a willingness to keep learning.",
          "Making room for prayer, reflection, gratitude, and meaningful conversations can help us become more intentional about how we live."
        ]
      },
      {
        heading: "Practise your values every day",
        paragraphs: [
          "Faith can influence how we treat others, respond to challenges, and serve our communities. Small acts of patience, kindness, and forgiveness can put our values into practice.",
          "Give yourself grace as you grow, and remain open to the lessons each season brings."
        ]
      }
    ]
  },
  {
    slug: "love-in-action",
    title: "Love in Action: The Power of Showing Up",
    type: "Story",
    category: "Community",
    author: "Remain In My Love",
    date: "2 October 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Explore the role of compassion, service, and community in making a difference.",
    sections: [
      {
        heading: "Compassion becomes meaningful through action",
        paragraphs: [
          "Care is powerful when people can experience it. Offering practical help, listening without judgment, and making time for someone can communicate that they matter.",
          "We do not always need grand gestures to make a difference. Small acts of kindness can help people feel seen, valued, and supported."
        ]
      },
      {
        heading: "Build a community that cares",
        paragraphs: [
          "Strong communities grow when people work together, recognise needs, and treat each person with dignity.",
          "This sample article reflects the spirit of service at Remain In My Love. It can later be replaced with a verified account of a real community project."
        ]
      }
    ]
  },
  {
    slug: "becoming-your-better-self",
    title: "Becoming the Person You Want to Be",
    type: "Blog",
    category: "Personal Growth",
    author: "Remain In My Love",
    date: "24 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Discover how honest reflection, consistent habits, and accountability can support personal growth.",
    sections: [
      {
        heading: "Start with honest reflection",
        paragraphs: [
          "Personal growth begins when we take an honest look at our habits, choices, strengths, and areas where we want to improve.",
          "Reflection is not about criticising yourself. It is about understanding where you are today and identifying the next step you can take."
        ]
      },
      {
        heading: "Make progress through small habits",
        paragraphs: [
          "Choose realistic actions that support the person you want to become. Practise them consistently, review your progress, and adjust when necessary.",
          "Accountability and encouragement from trusted people can help you stay committed without expecting perfection."
        ]
      }
    ]
  },
  {
    slug: "listening-as-an-expression-of-love",
    title: "Listening Is Also an Expression of Love",
    type: "Blog",
    category: "Relationships",
    author: "Remain In My Love",
    date: "16 September 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Intentional listening helps people feel heard and builds deeper connections.",
    sections: [
      {
        heading: "Give people your attention",
        paragraphs: [
          "Listening is one way to communicate respect and care. When we put distractions aside and give someone our attention, we create room for honest conversation.",
          "Try not to interrupt or prepare your response while the other person is still speaking. Give yourself time to understand what they are saying."
        ]
      },
      {
        heading: "Listen to understand",
        paragraphs: [
          "People do not always need immediate advice. Sometimes they need someone who can listen patiently and acknowledge what they are experiencing.",
          "Asking thoughtful questions and checking that you have understood correctly can make everyday conversations more meaningful."
        ]
      }
    ]
  },
  {
    slug: "the-courage-to-start-again",
    title: "The Courage to Start Again",
    type: "Story",
    category: "Stories",
    author: "Remain In My Love",
    date: "8 September 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "A reflection on resilience, the lessons we carry, and the possibilities ahead.",
    sections: [
      {
        heading: "Starting again takes courage",
        paragraphs: [
          "A fresh start can feel uncomfortable because it asks us to step into the unknown. Past disappointments may make the next step difficult, but they do not remove every possibility for the future.",
          "You can acknowledge what was difficult while still giving yourself permission to move forward."
        ]
      },
      {
        heading: "Carry the lessons, not just the pain",
        paragraphs: [
          "Experiences can teach us about our needs, boundaries, strengths, and the support we need from others.",
          "This sample reflection can serve as a placeholder until a real, approved story is ready to share."
        ]
      }
    ]
  },
  {
    slug: "meaningful-conversations",
    title: "Creating Space for Meaningful Conversations",
    type: "Blog",
    category: "Community",
    author: "Remain In My Love",
    date: "29 August 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Learn how to make homes and communities places where people feel heard.",
    sections: [
      {
        heading: "Create a welcoming space",
        paragraphs: [
          "Meaningful conversations are easier when people feel safe enough to speak honestly. Respectful language, patience, and a willingness to listen help build that trust.",
          "Make room for different experiences and perspectives without rushing to dismiss or judge them."
        ]
      },
      {
        heading: "Let conversations lead to understanding",
        paragraphs: [
          "Ask questions with genuine curiosity. Give others time to express themselves, and be willing to clarify your own thoughts when needed.",
          "When we communicate with care, conversations can strengthen relationships and help communities become more supportive."
        ]
      }
    ]
  }
];



export const instant = false;
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  return {
    title: article
      ? `${article.title} | Remain In My Love`
      : "Story Not Found | Remain In My Love",
    description: article?.excerpt ?? "Stories and articles from Remain In My Love.",
  };
}

export default async function StoryArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#39232e]">
      <Header />

      <section className="bg-[#4b2035] px-6 py-14 text-[#fffaf2] sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/stories"
            className="text-sm font-semibold text-[#e4c981] hover:text-white"
          >
            ← Back to Stories & Blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#e4c981]">
            <span>{article.type}</span>
            <span>•</span>
            <span>{article.category}</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#f0e5e8] sm:text-lg">
            {article.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#eadde1]">
            <span>By {article.author}</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <article className="px-6 py-10 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-[#e9dfd2]">
            <img
              src={article.image}
              alt={article.title}
              className="max-h-[560px] w-full object-cover"
            />
          </div>

          <div className="mx-auto max-w-3xl py-10 sm:py-14">
            {article.sections.map((section, index) => (
              <section key={section.heading} className={index ? "mt-10" : ""}>
                <h2 className="text-2xl font-bold leading-snug text-[#4b2035] sm:text-3xl">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-base leading-8 text-[#71666b]"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-12 rounded-2xl border border-[#e6d9c8] bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a47b35]">
                Remain In My Love
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#4b2035]">
                Let&apos;s grow together
              </h2>
              <p className="mt-3 leading-7 text-[#71666b]">
                Explore more stories and reflections about faith, relationships,
                family, personal growth, and community.
              </p>
              <Link
                href="/stories"
                className="mt-5 inline-flex rounded-full bg-[#4b2035] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#65334a]"
              >
                Explore More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
