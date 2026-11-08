import React, { useEffect, useMemo, useState } from "react";
import "../styles/ReviewBadges.css";
import defaultReviews from "../data/website-reviews";

/**
 * Sources must match exactly:
 * "Google" "Yelp" "Angi" "Houzz" "BBB" "GuildQuality"
 */

export default function ReviewBadges({
  logoSrc = "/icons/logo.png",
  brandName = "Yellowstone Renovation",
  totalRating = "4.9/5",
  totalCount = 65,

  badges = [
    { key: "Yelp", logo: "/icons/Yelp.webp", stars: 5, rating: "4.6/5", count: "10+ Reviews" },
    { key: "Google", logo: "/icons/google-reviews.webp", stars: 5, rating: "4.9/5", count: "8+ Reviews" },
    { key: "Facebook", logo: "/icons/fb.png", stars: 5, rating: "5/5", count: "9+ Reviews" },
    { key: "Angi", logo: "/icons/angi.png", stars: 5, rating: "5/5", count: "13+ Reviews" },
    { key: "Houzz", logo: "/icons/houzz.png", stars: 5, rating: "5/5", count: "8+ Reviews" },
    { key: "GuildQuality", logo: "", stars: 5, rating: "4.8/5", count: "11+ Reviews" },
  ],

  reviews = defaultReviews,
}) {
  const tabs = useMemo(
    () => ["All", "Google", "Yelp", "Angi", "Houzz", "BBB", "GuildQuality"],
    []
  );

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("All");

  const openPopup = () => {
    setTab("All");
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const filtered = useMemo(() => {
    if (tab === "All") return reviews;
    return reviews.filter((r) => r.source === tab);
  }, [reviews, tab]);

  const stars = (n) => "★★★★★".slice(0, Math.max(1, Math.min(5, n || 5)));

  return (
    <>
      {/* BADGES */}
      <section className="rb">
        <div className="rb-trustTop">
          <div className="rb-trustChip">
            <span className="rb-chipIcon">☆</span>
            <span>64+ 5-Star Reviews</span>
          </div>

          <div className="rb-trustChip">
            <span className="rb-chipIcon">♢</span>
            <span>Fully Insured</span>
          </div>
        </div>

        <div className="rb-wrap">
          {badges.map((b) => (
            <button
              key={b.key}
              className="rb-card"
              type="button"
              onClick={openPopup}
              aria-label="Open reviews"
            >
              <div className="rb-logoRow">
                {b.logo ? (
                  <img className="rb-logoImg" src={b.logo} alt={b.key} loading="lazy" />
                ) : (
                  <div className="rb-logoText">{b.key}</div>
                )}
              </div>

              <div className="rb-stars">{stars(b.stars)}</div>
              <div className="rb-rating">{b.rating}</div>
              <div className="rb-count">{b.count}</div>
            </button>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {open && (
        <div className="rb-overlay" onClick={() => setOpen(false)}>
          <div className="rb-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rb-header">
              <div className="rb-headLeft">
                <img className="rb-brandLogo" src={logoSrc} alt={brandName} />
                <div className="rb-headText">
                  <div className="rb-brandName">{brandName}</div>
                  <div className="rb-brandSub">Deck & Siding</div>
                </div>
              </div>

              <div className="rb-headRight">
                <div className="rb-headStars">★★★★★</div>
                <div className="rb-headRating">{totalRating}</div>
                <div className="rb-headBased">Based on {totalCount} reviews</div>
              </div>

              <button className="rb-close" type="button" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>

            <div className="rb-tabs">
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`rb-tab ${tab === t ? "is-active" : ""}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="rb-body">
              {filtered.length === 0 ? (
                <div className="rb-empty">No reviews in this tab.</div>
              ) : (
                filtered.map((r, i) => (
                  <div className="rb-review" key={i}>
                    <div className="rb-avatar" aria-hidden="true">
                      {(r.author || "User").trim().charAt(0).toUpperCase()}
                    </div>

                    <div className="rb-reviewContent">
                      <div className="rb-reviewTop">
                        <div className="rb-who">
                          <span className="rb-author">{r.author}</span>
                          <span className="rb-dot">•</span>
                          <span className="rb-source">{r.source}</span>
                          <span className="rb-dot">•</span>
                          <span className="rb-time">{r.time}</span>
                        </div>
                        <div className="rb-reviewStars">{stars(r.stars)}</div>
                      </div>

                      <div className="rb-text">{r.text}</div>

                      {r.photos?.length ? (
                        <div className="rb-photos">
                          {r.photos.map((p, pi) => (
                            <img key={pi} src={p} alt="review" loading="lazy" />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}


/* High-quality starter reviews (add more later) */
