import * as React from "react";
import { Link } from "gatsby";
import "../styles/HomeVideoStories.css";

const stories = [
  {
    title: "A Deck Built for Everyday Living",
    detail: "Deck Project · Lexington, KY",
    poster: "/images/deck/deck-lexington23.webp",
    video: "/videos/deck-builder.mp4",
    projectUrl: "/projects-showcase/",
  },
  {
    title: "A Closer Look at a Finished Project",
    detail: "Outdoor Project · Frankfort, KY",
    poster: "/images/projects/frankfort/frn1.webp",
    video: "/images/projects/frankfort/fr1.MOV",
    projectUrl: "/projects-showcase/",
  },
];

export default function HomeVideoStories() {
  const [active, setActive] = React.useState(null);

  React.useEffect(() => {
    if (active === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.classList.add("video-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("video-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <section
      className="home-stories"
      aria-labelledby="home-stories-title"
    >
      <div className="home-stories__inner">

        {/* HEADING */}
        <header className="home-stories__heading">
          <span className="home-stories__heading-label">
            REAL PROJECTS. REAL HOMEOWNERS.
          </span>

          <h2 id="home-stories-title">
            Watch What Some of{" "}
            <span className="home-stories__green-text">
              Our Clients
            </span>{" "}
            Have to Say
          </h2>

          <p>
            Real projects completed by Yellowstone Renovation across
            Lexington and Central Kentucky.
          </p>
        </header>

        {/* GRID */}
        <div className="home-stories__grid">

          {stories.map((story, index) => (
            <article
              className="home-stories__card"
              key={story.video}
            >
              {/* VIDEO IMAGE */}
              <button
                className="home-stories__video"
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Play video: ${story.title}`}
              >
                <img
                  src={story.poster}
                  alt={story.title}
                  loading="lazy"
                />

                <span className="home-stories__image-overlay" />

                <span
                  className="home-stories__play"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                <span className="home-stories__watch-label">
                  Watch Story
                </span>
              </button>

              {/* CARD INFO */}
              <div className="home-stories__card-body">
                <div
                  className="home-stories__stars"
                  aria-label="5 out of 5 stars"
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <h3>{story.title}</h3>

                <p className="home-stories__detail">
                  {story.detail}
                </p>

                <Link
                  to={story.projectUrl}
                  className="home-stories__project-button"
                >
                  View Project

                  <svg
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}

          {/* PROJECT SHOWCASE CARD */}
          <article className="home-stories__showcase-card">
            <Link
              to="/projects-showcase/"
              className="home-stories__showcase-link"
              aria-label="Explore Yellowstone Renovation Project Showcase"
            >
              <img
                src="/images/deck/deck-lexington105.webp"
                alt="Yellowstone Renovation completed outdoor project"
                loading="lazy"
              />

              <span className="home-stories__showcase-overlay" />

              <span className="home-stories__showcase-top">
                <span className="home-stories__showcase-brand">
                  YELLOWSTONE RENOVATION
                </span>

                <span className="home-stories__showcase-icon">
                  ↗
                </span>
              </span>

              <span className="home-stories__showcase-content">
                <span className="home-stories__showcase-label">
                  EXPLORE OUR WORK
                </span>

                <strong>Project Showcase</strong>

                <span className="home-stories__showcase-description">
                  See completed decks, siding, fencing and exterior
                  renovations across Central Kentucky.
                </span>

                <span className="home-stories__showcase-button">
                  View All Projects
                  <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </article>

        </div>
      </div>

      {/* VIDEO MODAL */}
      {active !== null && (
        <div
          className="home-stories__modal"
          role="presentation"
          onClick={() => setActive(null)}
        >
          <div
            className="home-stories__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={stories[active].title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="home-stories__close"
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              key={stories[active].video}
              src={stories[active].video}
              poster={stories[active].poster}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}