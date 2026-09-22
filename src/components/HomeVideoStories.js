import * as React from "react";
import { Link } from "gatsby";
import "../styles/HomeVideoStories.css";

const stories = [
  {
    title: "Deck Build in Perryville",
    detail: "Perryville, KY",
    poster: "/videos/testimonials/august-deck-poster.jpg",
    video: "/videos/testimonials/august-deck-desktop.mp4",
    mobileVideo: "/videos/testimonials/august-deck-mobile.mp4",
    projectUrl: "/projects-showcase/#august-deck-story",
  },
  {
    title: "Deck Build in Lexington",
    detail: "Lexington, KY",
    poster: "/videos/testimonials/white-deck-poster.jpg",
    video: "/videos/testimonials/white-deck-story.mp4",
    projectUrl: "/projects-showcase/#white-deck-story",
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
            CUSTOMER STORIES
          </span>

          <h2 id="home-stories-title">
            See the Work.{" "}
            <span className="home-stories__green-text">
              Hear From the Homeowners.
            </span>
          </h2>

          <p>
            A closer look at completed Yellowstone Renovation projects
            and the homeowners behind them.
          </p>
        </header>

        {/* GRID */}
        <div className="home-stories__grid">

          {stories.map((story, index) => (
            <article
              className="home-stories__card"
              key={story.video}
            >
              {/* VIDEO */}
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
                    width="21"
                    height="21"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                <span className="home-stories__watch-label">
                  Watch Story
                </span>
              </button>

              {/* CARD CONTENT */}
              <div className="home-stories__card-body">

                <div
                  className="home-stories__stars"
                  aria-label="5 star customer review"
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
                </Link>
              </div>
            </article>
          ))}

          {/* PROJECT SHOWCASE */}
          <article className="home-stories__showcase-card">
            <Link
              to="/projects-showcase/"
              className="home-stories__showcase-link"
              aria-label="View Yellowstone Renovation Project Showcase"
            >
              <img
                src="/images/yr1.jpeg"
                alt="Completed Yellowstone Renovation deck project"
                loading="lazy"
              />

              <span className="home-stories__showcase-overlay" />

              <span className="home-stories__showcase-brand">
                YELLOWSTONE RENOVATION
              </span>

              <span className="home-stories__showcase-content">

                <span className="home-stories__showcase-label">
                  PROJECT GALLERY
                </span>

                <strong>
                  See More of Our Work
                </strong>

                <span className="home-stories__showcase-description">
                  Browse completed decks, siding, fencing and exterior
                  projects across Central Kentucky.
                </span>

                <span className="home-stories__showcase-button">
                  Project Showcase
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
              poster={stories[active].poster}
              controls
              autoPlay
              playsInline
            >
              {stories[active].mobileVideo && (
                <source
                  src={stories[active].mobileVideo}
                  type="video/mp4"
                  media="(max-width: 700px)"
                />
              )}

              <source
                src={stories[active].video}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}