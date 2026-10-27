
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";

const programmes = [
  {
    number: "01",
    title: "Relationships",
    description:
      "Encouraging healthier connections through understanding, communication and intentional care.",
  },
  {
    number: "02",
    title: "Marriage & Family",
    description:
      "Supporting stronger marriages and families through learning, guidance and meaningful conversations.",
  },
  {
    number: "03",
    title: "Children",
    description:
      "Championing environments where children can feel supported, valued and given room to thrive.",
  },
  {
    number: "04",
    title: "Community",
    description:
      "Inspiring people to show compassion, serve others and build a culture of love in their communities.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <ImageSlider />

        <section className="intro-section">
          <div>
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="intro-heading">
              Love is more than a feeling. It is a way of life.
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Remain In My Love is built on the belief that love can shape
              relationships, strengthen families and bring communities closer
              together. Inspired by the values of faith, compassion and service,
              we seek to encourage meaningful connections and lasting positive
              change.
            </p>
            <p>
              Through our programmes, conversations and community initiatives,
              we want to help people discover practical ways to live out love
              every day.
            </p>
            <a href="/about" className="text-link">
              Get to know us <span>↗</span>
            </a>
          </div>
        </section>

        <section className="programmes-section">
          <div className="section-header">
            <p className="section-eyebrow">What We Care About</p>
            <h2 className="section-heading">
              Love that reaches every part of life.
            </h2>
            <p>
              We believe meaningful change begins with people and grows through
              the relationships and communities they build.
            </p>
          </div>

          <div className="programme-grid">
            {programmes.map((programme) => (
              <article className="programme-card" key={programme.number}>
                <span className="programme-number">{programme.number}</span>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="involve-section">
          <div>
            <p className="section-eyebrow" style={{ color: "#D1AD69" }}>
              Make A Difference
            </p>
            <h2 className="section-heading">
              There is a place for you in this story.
            </h2>
            <p>
              Whether you choose to volunteer, take part in an event, share our
              message or support our work, you can help love make a difference.
            </p>
          </div>

          <a href="/contact" className="button button-gold">
            Get Involved <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
       <p>© 2026 Remain In My Love. All rights reserved.</p>
        <a href="/donate">Support the mission ↗</a>
      </footer>
    </>
  );
}
