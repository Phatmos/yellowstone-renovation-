import * as React from "react";
import ScrollVideo from "./ScrollVideo";
import { Link } from "gatsby";
import "../styles/HomeVideoStories.css";

const stories = [
  {
    title: "Deck Build in Perryville",
    detail: "Perryville, KY",
    poster: "/local-deck/img/story-perryville-hd.webp",
    video: "/local-deck/video/story-perryville-hd.mp4",
    projectUrl: "/projects-showcase/#august-deck-story",
  },
  {
    title: "Deck Build in Lexington",
    detail: "Lexington, KY",
    poster: "/local-deck/img/story-lexington-hd.webp",
    video: "/local-deck/video/story-lexington-hd.mp4",
    projectUrl: "/projects-showcase/#white-deck-story",
  },
];

export default function HomeVideoStories() {
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

          {stories.map((story) => (
            <article
              className="home-stories__card"
              key={story.video}
            >
              {/* VIDEO */}
              <ScrollVideo className="home-stories__video" src={story.video} poster={story.poster} title={story.title} />

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

    </section>
  );
}
