import React, { useEffect, useMemo, useState } from "react";
import "../styles/ReviewBadges.css";

/**
 * Sources must match exactly:
 * "Google" "Yelp" "Angi" "Houzz" "BBB" "GuildQuality"
 */

// If you have defaultReviews in another file, import it.
// Otherwise keep reviews={defaultReviews} like you had.
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

  reviews = defaultReviews, // keep your existing defaultReviews
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
const defaultReviews = [
  {
    source: "Website",
    author: "Art K.",
    time: "2 weeks ago",
    stars: 5,
    text:
      "Yellowstone Renovation helped us replace an old wood deck that was starting to feel unsafe. Peter was the first person who came out to look at the project, and he explained what needed to be fixed, what could stay, and what really needed to be rebuilt. The team removed the old decking, corrected framing issues, installed new boards, new railing, fascia, and cleaned everything before leaving. The finished deck looks much better and feels solid.",
  },
  {
    source: "Website",
    author: "John F.",
    time: "1 month ago",
    stars: 5,
    text:
      "We had our old fence taken down and replaced with a new wood privacy fence. The crew showed up on time, removed the damaged sections, set new posts, installed the panels, and built a new gate that opens much smoother than the old one. The job site was cleaned up well. Very professional experience.",
  },
  {
    source: "Website",
    author: "Michelle B.",
    time: "2 months ago",
    stars: 5,
    text:
      "William helped us during the estimate and was very patient with all of our questions. We were not sure if we wanted a wood deck or composite, and he explained the difference in maintenance, cost, and long-term value. We ended up going with composite decking, picture frame border, fascia, and aluminum railing. The final result looks clean and modern, and the process was much easier than we expected.",
  },
  {
    source: "Website",
    author: "Jeremiah K.",
    time: "3 months ago",
    stars: 5,
    text:
      "Great work from start to finish. They rebuilt our deck stairs, replaced loose railing, and fixed a few areas where the old framing was weak. Everything feels much safer now.",
  },
  {
    source: "Website",
    author: "Karen B.",
    time: "4 months ago",
    stars: 5,
    text:
      "Dominic was the project manager on our job and communication was very good. We had siding repairs, trim work, and a few exterior boards that needed to be replaced because of water damage. He kept us updated, answered quickly, and made sure the crew finished everything the right way. The house looks cleaner and much better from the street.",
  },
  {
    source: "Website",
    author: "Verified Customer",
    time: "recently",
    stars: 5,
    text:
      "They replaced our old back deck with a new pressure-treated wood deck. The crew removed the old structure, installed new posts, beams, joists, decking, stairs, and railing. The work was done clean and the deck feels strong.",
  },
  {
    source: "Website",
    author: "Daniel R.",
    time: "3 months ago",
    stars: 5,
    text:
      "We hired Yellowstone Renovation for a composite deck project. Our old deck had loose boards, old railing, and stairs that were not comfortable to use. The team built a new frame, installed composite decking, added a picture frame border, wrapped the fascia, and installed new rails. The details made a big difference. It looks like a completely different backyard now.",
  },
  {
    source: "Website",
    author: "Ashley P.",
    time: "5 months ago",
    stars: 5,
    text:
      "Andrew was managing the crew on our project and kept everything organized. They replaced our deck boards, repaired the steps, and installed new railing. The crew worked hard and cleaned up every day.",
  },
  {
    source: "Website",
    author: "Robert S.",
    time: "6 months ago",
    stars: 5,
    text:
      "Very good company to work with. They fixed our exterior trim, replaced damaged wood, and painted the repaired areas so everything matched. The work was clean and professional.",
  },
  {
    source: "Website",
    author: "Stephanie L.",
    time: "7 months ago",
    stars: 5,
    text:
      "Peter came out for the first appointment and gave us a very clear estimate. We had an older deck with bad boards, weak stairs, and railing that needed to be replaced. He explained the options without pushing us. The crew later removed the old material, reinforced the structure, installed new decking and railing, and made everything look finished with fascia. We are very happy with how it turned out.",
  },
  {
    source: "Website",
    author: "Kevin T.",
    time: "2 months ago",
    stars: 5,
    text:
      "The crew replaced two old wood gates for us. They removed the sagging gates, rebuilt the frames, installed new hinges and hardware, and adjusted everything so the gates close properly. Simple job, but done right.",
  },
  {
    source: "Website",
    author: "Laura M.",
    time: "1 month ago",
    stars: 5,
    text:
      "We had a new privacy fence installed around our backyard. The old fence was leaning and some posts were rotted. Yellowstone Renovation removed the old fence, hauled everything away, installed new posts, new pickets, and a clean gate. The fence looks straight and solid. Good communication and clean work.",
  },
  {
    source: "Website",
    author: "Mark D.",
    time: "8 months ago",
    stars: 5,
    text:
      "Valery and his crew did excellent work on our deck. They replaced old boards, fixed the stairs, added fascia, and made the railing feel much stronger. They paid attention to small details and left the area clean.",
  },
  {
    source: "Website",
    author: "Natalie W.",
    time: "4 months ago",
    stars: 5,
    text:
      "We needed exterior repairs before things got worse. The team replaced damaged siding pieces, repaired trim around the windows, and sealed areas where water was getting behind the boards. They explained what they were doing and made the finished repair blend in nicely with the rest of the house.",
  },
  {
    source: "Website",
    author: "Chris L.",
    time: "6 months ago",
    stars: 5,
    text:
      "No surprises. The estimate was clear, the crew came when scheduled, and the deck repair was finished clean.",
  },
  {
    source: "Website",
    author: "Brian T.",
    time: "9 months ago",
    stars: 5,
    text:
      "Dominic kept us updated through the whole project. We had a deck replacement with new composite boards, new stairs, railing, and fascia. He answered questions fast and made sure the crew knew exactly what needed to be done. The finished deck looks excellent.",
  },
  {
    source: "Website",
    author: "Paul W.",
    time: "3 months ago",
    stars: 5,
    text:
      "The crew replaced our old deck railing and rebuilt the stairs. The old steps were uneven and not very safe. Now everything feels solid, straight, and much more comfortable to use.",
  },
  {
    source: "Website",
    author: "Anthony G.",
    time: "5 months ago",
    stars: 5,
    text:
      "William helped us understand the different options for our backyard project. We were looking at a fence and a small deck repair at the same time. He explained what made sense to do now and what could wait. The work was done professionally and we appreciated the honest advice.",
  },
  {
    source: "Website",
    author: "Verified Customer",
    time: "recently",
    stars: 5,
    text:
      "They repaired our deck and replaced the damaged boards. Good work, good cleanup, and fair communication.",
  },
  {
    source: "Website",
    author: "Sandra H.",
    time: "7 months ago",
    stars: 5,
    text:
      "Vasyl and the crew worked on our wood fence. They removed old leaning sections, set new posts, replaced the boards, and built a new gate. The fence looks much better and feels strong.",
  },
  {
    source: "Website",
    author: "Olivia S.",
    time: "2 months ago",
    stars: 5,
    text:
      "We had a large deck project completed by Yellowstone Renovation. The old deck had water damage and the layout was not very useful. The team rebuilt the structure, added a better stair layout, installed composite decking, picture frame detail, fascia boards, and new railing. They also helped us think through the design so the space works better for our family. It looks clean, modern, and well built.",
  },
  {
    source: "Website",
    author: "Eric B.",
    time: "8 months ago",
    stars: 5,
    text:
      "Very smooth process. They fixed our exterior door trim, replaced rotted wood, sealed the area, and made it look clean again.",
  },
  {
    source: "Website",
    author: "Jason M.",
    time: "6 months ago",
    stars: 5,
    text:
      "Peter came out for the estimate and looked over everything carefully. We thought we only needed new deck boards, but he showed us where part of the frame also needed attention. The crew replaced the weak areas, installed new decking, corrected the stairs, and finished the edges with fascia. I appreciated that they did not just cover problems. They actually fixed them.",
  },
  {
    source: "Website",
    author: "Karen F.",
    time: "10 months ago",
    stars: 5,
    text:
      "They installed a new aluminum railing on our deck and repaired a few old boards at the same time. The railing looks clean and the deck feels safer.",
  },
  {
    source: "Website",
    author: "Steven R.",
    time: "1 month ago",
    stars: 5,
    text:
      "Andrew kept the crew organized during our fence replacement. They removed the old fence, dug out bad posts, installed new posts, built a new wood privacy fence, and adjusted the gate. Everything was straight and clean when they finished.",
  },
  {
    source: "Website",
    author: "Melissa T.",
    time: "4 months ago",
    stars: 5,
    text:
      "Yellowstone Renovation repaired our siding and replaced several damaged trim boards. The old boards were soft from water damage and looked bad from the front of the house. The crew removed the bad material, installed new pieces, sealed everything, and finished it neatly. The repair looks professional and not like a patch job.",
  },
  {
    source: "Website",
    author: "Henry L.",
    time: "9 months ago",
    stars: 5,
    text:
      "Good communication and strong workmanship. They rebuilt our deck stairs, installed new handrails, and fixed loose areas on the landing. Everything feels much safer now.",
  },
  {
    source: "Website",
    author: "Victoria A.",
    time: "3 months ago",
    stars: 5,
    text:
      "Dominic responded quickly whenever we had a question. Our project included a deck repair, new railing, and replacing old fascia that was falling apart. He kept the schedule moving and made sure the final details were handled.",
  },
  {
    source: "Website",
    author: "Dennis P.",
    time: "5 months ago",
    stars: 5,
    text:
      "The crew was respectful and worked hard. They replaced our old fence gate, fixed several loose posts, and made the fence look much better.",
  },
  {
    source: "Website",
    author: "Rachel S.",
    time: "7 months ago",
    stars: 5,
    text:
      "William was helpful during the planning stage. We wanted a nicer deck but did not know what material to choose. He explained composite decking, wood decking, railing options, and what would fit our budget. The team installed a beautiful deck with clean edges and solid stairs. We are glad we chose them.",
  },
  {
    source: "Website",
    author: "Tom H.",
    time: "2 months ago",
    stars: 5,
    text:
      "They replaced our front porch railing and repaired a few rotten trim areas. The job was done clean and the house looks better.",
  },
  {
    source: "Website",
    author: "Linda K.",
    time: "6 months ago",
    stars: 5,
    text:
      "From start to finish, everything went smoothly. We had an older wood deck removed and replaced with a new pressure-treated deck. The crew installed new posts, beams, joists, decking, stairs, and railing. They also hauled away the old material. The new deck feels solid and looks great.",
  },
  {
    source: "Website",
    author: "Brian O.",
    time: "8 months ago",
    stars: 5,
    text:
      "Very pleased with the result. They repaired the deck frame, installed new boards, and cleaned up the whole area before leaving.",
  },
  {
    source: "Website",
    author: "Amanda C.",
    time: "2 weeks ago",
    stars: 5,
    text:
      "Valery was great on site. Our project had several small repairs that needed attention, including loose deck boards, stair repair, and trim around the side of the house. He explained what the crew was fixing and made sure everything looked clean at the end.",
  },
  {
    source: "Website",
    author: "George M.",
    time: "1 month ago",
    stars: 5,
    text:
      "Honest estimate and clean work. They replaced our damaged deck boards and made the stairs feel solid again.",
  },
  {
    source: "Website",
    author: "Samantha R.",
    time: "3 months ago",
    stars: 5,
    text:
      "Peter made the first appointment easy. He measured the deck, checked the railing, looked at the stairs, and explained what needed to be replaced. The crew later came in, removed the old boards, installed new decking, repaired the weak areas, and cleaned everything up. The whole project felt organized.",
  },
  {
    source: "Website",
    author: "Michael D.",
    time: "4 months ago",
    stars: 5,
    text:
      "The crew did a really nice job on our fence. They removed the old broken sections, installed new posts, replaced the boards, and made the gate close properly. The yard looks much cleaner now.",
  },
  {
    source: "Website",
    author: "Angela W.",
    time: "5 months ago",
    stars: 5,
    text:
      "Dominic managed our project well. We had composite decking installed with fascia and new stairs. He kept us updated on timing, materials, and the crew schedule. The final deck looks beautiful.",
  },
  {
    source: "Website",
    author: "Patrick N.",
    time: "6 months ago",
    stars: 5,
    text:
      "Vasyl and his crew replaced our old porch boards and repaired the railing. They were professional, worked quickly, and left everything clean.",
  },
  {
    source: "Website",
    author: "Emily J.",
    time: "7 months ago",
    stars: 5,
    text:
      "We hired Yellowstone Renovation for a backyard deck and fence update. The old deck boards were worn out and the fence had several leaning sections. The team repaired the deck, replaced damaged boards, installed new railing, fixed fence posts, and rebuilt the gate. It made the backyard look fresh again without feeling like a stressful project.",
  },
  {
    source: "Website",
    author: "Ronald P.",
    time: "8 months ago",
    stars: 5,
    text:
      "William explained everything clearly before we signed. The crew replaced our deck boards, installed new fascia, and repaired the stairs. The job went the way it was explained.",
  },
  {
    source: "Website",
    author: "Heather L.",
    time: "9 months ago",
    stars: 5,
    text:
      "Clean job and professional team. They replaced damaged siding, repaired trim, and sealed the areas that were causing water problems.",
  },
  {
    source: "Website",
    author: "Timothy S.",
    time: "10 months ago",
    stars: 5,
    text:
      "Andrew did a great job keeping the job site organized. The project included removing an old deck surface, installing new boards, replacing railing, and adding a cleaner finish around the edges. The crew worked hard and finished everything professionally.",
  },
  {
    source: "Website",
    author: "Nicole F.",
    time: "11 months ago",
    stars: 5,
    text:
      "The process was simple and professional. They gave us a clear estimate, scheduled the work, repaired the deck, replaced loose boards, and cleaned up after the job.",
  },
  {
    source: "Website",
    author: "Charles B.",
    time: "1 year ago",
    stars: 5,
    text:
      "Peter was straightforward during the estimate. He explained what made sense for our deck and what was not necessary. The crew replaced the bad boards, repaired the steps, and made the railing feel secure again. We appreciated the honest approach.",
  },
  {
    source: "Website",
    author: "Rebecca G.",
    time: "1 year ago",
    stars: 5,
    text:
      "Good company with a hardworking crew. They rebuilt our side fence, replaced the gate, and cleaned up the old material.",
  },
  {
    source: "Website",
    author: "Nathan K.",
    time: "1 year ago",
    stars: 5,
    text:
      "Dominic stayed in touch during the whole project. We had a deck replacement with composite boards, aluminum railing, fascia, and new stairs. He kept the project organized and made sure the details were completed correctly. Communication was one of the best parts of working with them.",
  },
  {
    source: "Website",
    author: "Julie M.",
    time: "1 year ago",
    stars: 5,
    text:
      "Valery’s crew was careful and respectful. They repaired our porch, replaced old boards, fixed the railing, and left everything clean.",
  },
  {
    source: "Website",
    author: "Frank T.",
    time: "1 year ago",
    stars: 5,
    text:
      "Very reliable team. They replaced damaged exterior trim, repaired siding, sealed everything properly, and made the front of the house look clean again.",
  },
  {
    source: "Website",
    author: "Megan A.",
    time: "1 year ago",
    stars: 5,
    text:
      "We had several things done at once, including deck repair, fence repair, and a few exterior trim fixes. The team handled everything professionally. They removed damaged wood, replaced what needed to be replaced, repaired the loose areas, and cleaned the site when they were done. It was nice working with one company that could take care of the whole outside project.",
  },
];