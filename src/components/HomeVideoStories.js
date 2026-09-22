import * as React from "react";
import { Link } from "gatsby";
import "../styles/HomeVideoStories.css";

const stories = [
  {
    title: "A deck built for everyday living",
    detail: "Deck project · Central Kentucky",
    poster: "/images/deck/deck-lexington23.webp",
    video: "/videos/deck-builder.mp4",
  },
  {
    title: "A closer look at a finished project",
    detail: "Outdoor project · Frankfort, KY",
    poster: "/images/projects/frankfort/frn1.webp",
    video: "/images/projects/frankfort/fr1.MOV",
  },
];

export default function HomeVideoStories() {
  const [active, setActive] = React.useState(null);

  React.useEffect(() => {
    if (active === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section className="home-stories" aria-labelledby="home-stories-title">
      <div className="home-stories__inner">
        <div className="home-stories__heading">
          <h2 id="home-stories-title">See What <span>Our Clients</span> Have Built</h2>
          <p>Watch a closer look at our work across Central Kentucky.</p>
        </div>
        <div className="home-stories__grid">
          {stories.map((story, index) => (
            <article className="home-stories__story" key={story.video}>
              <button className="home-stories__video" type="button" onClick={() => setActive(index)} aria-label={`Play video: ${story.title}`}>
                <img src={story.poster} alt="" loading="lazy" />
                <span className="home-stories__play" aria-hidden="true">▶</span>
              </button>
              <h3>{story.title}</h3>
              <p className="home-stories__detail">{story.detail}</p>
            </article>
          ))}
          <article className="home-stories__more">
            <Link to="/projects/" className="home-stories__more-link" aria-label="See all Yellowstone Renovation projects">
              <img src="/images/deck/deck-lexington105.webp" alt="Completed Yellowstone Renovation deck" loading="lazy" />
              <span className="home-stories__more-shade" />
              <span className="home-stories__more-content"><span className="home-stories__eyebrow">YELLOWSTONE RENOVATION</span><strong>See All Projects</strong><span>Explore our decks, siding and outdoor spaces <span aria-hidden="true">↗</span></span></span>
            </Link>
          </article>
        </div>
      </div>
      {active !== null && (
        <div className="home-stories__modal" role="presentation" onClick={() => setActive(null)}>
          <div className="home-stories__dialog" role="dialog" aria-modal="true" aria-label={stories[active].title} onClick={(event) => event.stopPropagation()}>
            <button className="home-stories__close" type="button" onClick={() => setActive(null)} aria-label="Close video">×</button>
            <video key={stories[active].video} src={stories[active].video} controls autoPlay playsInline poster={stories[active].poster} />
          </div>
        </div>
      )}
    </section>
  );
}
