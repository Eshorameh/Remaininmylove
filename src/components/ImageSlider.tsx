
"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "LOVE BEGINS WITH US",
    title: "A world where love changes everything.",
    description:
      "We believe that stronger relationships, healthier families and caring communities can transform lives for generations.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=85",
    alt: "Parents sharing a joyful moment with their children",
    primary: "Discover Our Mission",
    primaryLink: "/about",
    secondary: "Support Our Work",
    secondaryLink: "/donate",
  },
  {
    eyebrow: "STRONGER TOGETHER",
    title: "Building relationships that stand the test of time.",
    description:
      "Creating opportunities for people to learn, grow and build healthier relationships rooted in understanding and care.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=85",
    alt: "A group of people spending meaningful time together",
    primary: "Explore Our Programmes",
    primaryLink: "/programmes",
    secondary: "Get Involved",
    secondaryLink: "/contact",
  },
  {
    eyebrow: "A LEGACY OF LOVE",
    title: "Every family deserves the chance to thrive.",
    description:
      "Join us in nurturing a culture of compassion, supporting families and making a meaningful difference in our communities.",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=2000&q=85",
    alt: "A family sharing a special moment outdoors",
    primary: "Be Part of the Mission",
    primaryLink: "/contact",
    secondary: "Make a Donation",
    secondaryLink: "/donate",
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const previous = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const slide = slides[activeIndex];

  return (
    <section className="hero" aria-label="Featured stories">
      <div
        className="hero-image"
        style={{ backgroundImage: `url("${slide.image}")` }}
        role="img"
        aria-label={slide.alt}
        key={slide.image}
      />

      <div className="hero-shade" />

      <div className="hero-content" key={slide.title}>
        <p className="hero-eyebrow">
          <span className="eyebrow-line" />
          {slide.eyebrow}
        </p>

        <h1>{slide.title}</h1>

        <p className="hero-description">{slide.description}</p>

        <div className="hero-actions">
          <a className="button button-gold" href={slide.primaryLink}>
            {slide.primary} <span>↗</span>
          </a>
          <a className="button button-outline" href={slide.secondaryLink}>
            {slide.secondary}
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="slide-counter">
          <span className="counter-current">0{activeIndex + 1}</span>
          <span className="counter-divider" />
          <span>0{slides.length}</span>
        </div>

        <div className="slider-dots" aria-label="Choose a slide">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`slider-dot ${index === activeIndex ? "active" : ""}`}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="slider-controls">
          <button type="button" onClick={previous} aria-label="Previous slide">
            ←
          </button>
          <button type="button" onClick={next} aria-label="Next slide">
            →
          </button>
        </div>
      </div>

      <div className="hero-side-label">FAITH · FAMILY · COMMUNITY</div>
    </section>
  );
}
