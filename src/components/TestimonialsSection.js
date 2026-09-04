import React, { useState, useEffect } from "react";
import "../styles/TestimonialsSection.css";

export default function TestimonialsSection() {
    const icons = {
        Google: "/icons/google-reviews.webp",
        Yelp: "/icons/yelp.webp",
        Houzz: "/icons/houzz-.png",
        Angi: "/icons/angi.png",
    };

    const allReviews = [
        { name: "Peter L.", date: "3 November 2024", platform: "Google", text: "Our old cedar deck in Lexington felt unsafe and worn out. Peter and Andrew came out personally, walked us through options, and gave a fair quote. The crew rebuilt the frame, corrected hidden issues, and made every board line up perfectly. Cleanup was done every evening, and the result is stunning." },
        { name: "Melissa H.", date: "18 May 2024", platform: "Google", text: "Yellowstone replaced our vinyl siding and soffits in Georgetown. William helped with color samples and kept us updated daily. The team worked carefully around our garden and finished early. The new look completely refreshed our home." },
        { name: "Dmitri S.", date: "5 March 2024", platform: "Google", text: "After storm damage in Frankfort, Andrew inspected the same day and Oksana scheduled the job fast. The repair matched perfectly, you can’t tell new from old. They even fixed a loose gutter bracket at no cost. Great crew, polite and efficient." },
        { name: "Oksana V.", date: "21 September 2024", platform: "Houzz", text: "Hardie siding project in Nicholasville went flawlessly. Peter explained details, William checked every corner, and the crew worked neatly. They found hidden wood rot and repaired it right away. Excellent service and craftsmanship." },
        { name: "Andrew K.", date: "7 July 2024", platform: "Yelp", text: "Deck extension in Richmond tied seamlessly into our old one. Permits and inspections were handled for us. The new stairs and railing look amazing. The whole process was easy and organized." },
        { name: "John P.", date: "12 April 2024", platform: "Angi", text: "We replaced old siding near Versailles. William was honest about costs and materials, and the crew was careful around windows. Every seam was sealed and painted perfectly. Professional from start to finish." },
        { name: "Natalie D.", date: "20 November 2023", platform: "Houzz", text: "Porch rebuild in Lexington exceeded expectations. Oksana coordinated all materials and timing, while Peter ensured the structure was solid. The trim match is perfect and it’s now our favorite morning spot." },
        { name: "Michael B.", date: "16 August 2023", platform: "Google", text: "Property manager in Richmond here. Yellowstone’s Hardie panel install was smooth, on time, and tenant-friendly. Andrew sent photo updates and cleaned up completely. Will definitely hire again." },
        { name: "Rachel M.", date: "26 March 2023", platform: "Yelp", text: "Full siding and window replacement in Georgetown. William explained every line item clearly. The team stayed on schedule and cleaned daily. Our utility bills dropped immediately." },
        { name: "Grace F.", date: "27 July 2024", platform: "Google", text: "Complete exterior remodel in Lexington. Oksana kept us informed through the rain delays and made sure each board was straight. The attention to detail shows everywhere. We highly recommend them." },
        { name: "Henry G.", date: "23 July 2024", platform: "Angi", text: "New deck installation in Georgetown was done exactly as planned. William’s team worked through the weekend to beat the storm. The finish is smooth and solid. Great experience from start to end." },
        { name: "Mark T.", date: "1 August 2024", platform: "Houzz", text: "Front steps rebuild by Peter’s team looks better than before. They reinforced the base and used anti-slip treads. Every edge is painted cleanly and the look fits perfectly with our porch." },
        { name: "Nina V.", date: "5 August 2024", platform: "Yelp", text: "Old siding and trim replaced after years of damage. Crew was respectful and worked efficiently. Ventilation is better and the caulking lines are clean. We love the new color!" },
        { name: "Laura B.", date: "30 August 2024", platform: "Google", text: "We were away during an exterior renovation. Oksana sent daily updates with photos. We came home to a spotless property and flawless work. Reliable and professional team." },
        { name: "Ethan H.", date: "20 October 2024", platform: "Google", text: "Deck rebuild in Nicholasville came out incredible. William offered good design tips that improved drainage. The framing is solid, and every detail feels premium." },
        { name: "Isabella K.", date: "6 October 2024", platform: "Houzz", text: "Our Hardie siding job in Versailles was done with precision. Oksana managed scheduling and cleanup, while the team stayed polite and professional. Couldn’t ask for better service." },
        { name: "Tara N.", date: "22 December 2024", platform: "Angi", text: "Trim rot repairs were completed fast and clean. William inspected the moisture source first and sealed it properly. The fresh paint blend is perfect. Great long-term solution." },
        { name: "Daria F.", date: "9 January 2025", platform: "Houzz", text: "We upgraded to pearl gray Hardie siding with white trim, and it transformed our home. William guided us on colors and Peter double-checked every seam. Looks like new construction." },
        { name: "Caleb J.", date: "25 January 2025", platform: "Google", text: "Window wraps and new trim during cold weather were handled flawlessly. Crew worked steady and left no mess. Communication from Oksana was excellent. Quality finish all around." },
        { name: "Nora E.", date: "3 February 2025", platform: "Google", text: "Deck inspection found hidden flashing issues. Peter suggested a permanent fix instead of a patch. The result looks neat and will last years. True professionals." },
        { name: "Ben C.", date: "15 December 2024", platform: "Yelp", text: "Fascia wrap and soffit ventilation fixes. William’s crew worked carefully and explained the airflow changes. Everything now looks clean and functions perfectly." },
        { name: "Emma D.", date: "8 July 2024", platform: "Houzz", text: "Deck stairs and rail redesign for better safety. William helped with layout ideas and color matching. Kids love it, and it looks amazing at night with the lights on." },
        { name: "James F.", date: "27 September 2024", platform: "Google", text: "Storm-damaged fascia fixed the same week. Peter’s team even tightened our downspout. The house looks cleaner and well cared for again." },
        { name: "Eva M.", date: "8 September 2024", platform: "Yelp", text: "Deck extension blends perfectly with our original. Hidden fasteners make it look seamless. The crew was organized and friendly." },
        { name: "Luke E.", date: "4 September 2024", platform: "Houzz", text: "Siding repair after mower damage. Andrew matched the panels exactly and made sure seams were invisible. Super fast and affordable fix." },
        { name: "Robert L.", date: "10 August 2024", platform: "Google", text: "William was patient while we decided on materials. His advice saved money and gave us a better finish. The new siding is flawless." },
        { name: "Sophia W.", date: "13 August 2024", platform: "Google", text: "Full deck rebuild in Lexington. Crew focused on strong framing and perfect spacing. The new railing feels solid and looks modern." },
        { name: "Victor D.", date: "18 September 2024", platform: "Houzz", text: "Color consultation with Oksana saved us from a bad siding shade. The final combination looks beautiful in sunlight. Very knowledgeable team." },
        { name: "Caroline S.", date: "23 September 2024", platform: "Yelp", text: "Small kitchen refresh managed by William. The trim and caulking were perfect. Fast, professional, and no mess." },
        { name: "Andrew G.", date: "9 June 2024", platform: "Google", text: "Small bathroom remodel plus trim repairs. Peter’s team worked quickly and left it spotless. Great precision and attention to detail." },
        { name: "Sarah M.", date: "25 June 2024", platform: "Yelp", text: "Porch rebuild in Lexington matched our color perfectly. Crew was polite, cleaned daily, and finished earlier than promised." },
        { name: "David C.", date: "20 June 2024", platform: "Houzz", text: "Exterior siding plan by Oksana and William turned out flawless. The caulking and flashing work are textbook quality." },
        { name: "Tom N.", date: "3 July 2024", platform: "Google", text: "Bathroom tile refresh done perfectly. Andrew’s precision with cuts and grout lines was impressive. Feels brand new." },
        { name: "Paul K.", date: "22 May 2024", platform: "Houzz", text: "Fascia and soffit replacement in two days. Oksana kept us updated and Peter inspected before sign-off. Smooth experience all around." },
        { name: "Maria J.", date: "2 June 2024", platform: "Yelp", text: "William walked us through siding replacement options by budget and design. Crew was respectful and efficient. Perfect match to our old color." },
        { name: "Susan L.", date: "14 May 2024", platform: "Google", text: "Backyard deck rebuild was handled with care. Andrew’s crew left everything spotless. The deck feels strong and looks amazing." },
        { name: "Daniel B.", date: "15 February 2024", platform: "Google", text: "Peter’s team replaced our siding and handled HOA paperwork. Clear communication, clean site, great finish. Highly recommended." },
        { name: "Michael D.", date: "31 October 2024", platform: "Angi", text: "New deck layout was perfect for our yard. Andrew and William delivered sharp cuts and tight joints. Truly pro-level work." },
        { name: "Clara G.", date: "3 November 2024", platform: "Google", text: "Siding and window replacement completed fast. Peter oversaw every step. The house is quieter and looks fantastic." },
        { name: "Adam R.", date: "6 November 2024", platform: "Houzz", text: "Scheduling by Oksana was well organized and flexible. The crew worked efficiently and respected our property. We’re very satisfied." },
        { name: "Naomi B.", date: "9 November 2024", platform: "Yelp", text: "Front porch rebuild exceeded expectations. Andrew recommended better stair proportions that feel safer. Great eye for detail." },
        { name: "Evelyn L.", date: "12 November 2024", platform: "Google", text: "William checked every inch of our siding project. Trim corners are neat and paint lines straight. Excellent experience overall." },
        { name: "Ryan P.", date: "14 November 2024", platform: "Google", text: "Deck rebuild in Richmond done in under a week. Peter and Andrew’s crew worked clean and fast. The framing is rock solid." },
        { name: "Olivia D.", date: "16 November 2024", platform: "Houzz", text: "New deck in Lexington looks perfect. Oksana kept the schedule tight and coordinated inspections smoothly." },
        { name: "Jack T.", date: "18 November 2024", platform: "Yelp", text: "Bathroom refresh done right. William and Peter were clean, careful, and detail-oriented. Highly recommend their team." },
        { name: "Mason F.", date: "20 November 2024", platform: "Google", text: "Replaced old porch boards. Andrew’s crew matched everything perfectly and improved drainage. Great craftsmanship." },
        { name: "Ava S.", date: "22 November 2024", platform: "Google", text: "Siding replacement in Nicholasville done fast. Oksana and William communicated well, and there were no surprises. Perfect finish." },
        { name: "Ethan B.", date: "25 November 2024", platform: "Houzz", text: "Deck stair rebuild looks beautiful. Crew was polite, fast, and careful around landscaping. Very happy with the result." },
        { name: "Chloe M.", date: "27 November 2024", platform: "Yelp", text: "Full exterior renovation managed perfectly. Andrew coordinated all trades and the results are outstanding." },
        { name: "Liam R.", date: "29 November 2024", platform: "Google", text: "William explained everything clearly and followed through. The new siding job looks incredible. Honest and professional company." },
        { name: "Ella J.", date: "1 December 2024", platform: "Houzz", text: "New trim and exterior paint by Peter’s crew. Sharp lines, clean edges, and a perfect finish." },
        { name: "Noah W.", date: "3 December 2024", platform: "Yelp", text: "Deck rebuild finished earlier than planned. Andrew kept noise low and area tidy. Great work ethic." },
        { name: "Emily T.", date: "5 December 2024", platform: "Google", text: "Kitchen refresh with new trim and casing. Oksana managed everything perfectly. Smooth and high-quality work." },
        { name: "Harper Q.", date: "8 December 2024", platform: "Google", text: "Quick siding repair after storm damage. Peter’s attention to matching the panels was excellent. Looks untouched." },
        { name: "Gabe R.", date: "10 December 2024", platform: "Google", text: "Small deck landing addition in Lexington. Andrew improved our design and made it safer. The steps look great now." },
        { name: "Kara S.", date: "12 December 2024", platform: "Houzz", text: "Oksana answered every question and kept the crew on schedule. We felt taken care of the entire time." },
        { name: "Iris L.", date: "18 December 2024", platform: "Google", text: "New railing and post upgrade on our deck. Peter’s team built everything solid and true to the plan. Excellent quality." },
        { name: "Zane P.", date: "20 December 2024", platform: "Google", text: "Insurance claim siding repair went smoothly. Andrew met the adjuster and handled documentation. No stress at all." },
        { name: "Quinn D.", date: "27 December 2024", platform: "Google", text: "Holiday deck step repair finished before guests arrived. Oksana squeezed us in last minute — life saver!" },
        { name: "Miles K.", date: "4 January 2025", platform: "Google", text: "Board-and-batten accent done with precision. Peter’s crew measured everything perfectly. The result is beautiful." },
        { name: "Rosa V.", date: "18 January 2025", platform: "Yelp", text: "Handrail replacement and code-height guard installation. Andrew explained everything clearly. Perfect execution." },
        { name: "Tara N.", date: "22 December 2024", platform: "Angi", text: "Trim rot repair with primer and paint included. William checked the moisture and solved it for good. Looks brand new." },
        { name: "Nora E.", date: "3 February 2025", platform: "Google", text: "Ledger flashing fix and full deck inspection. Peter found issues early and prevented future damage. Highly trustworthy team." }
    ];
    const [filter, setFilter] = useState("All");
    const [index, setIndex] = useState(0);
    const [expandedTexts, setExpandedTexts] = useState({});
    const [visibleCount, setVisibleCount] = useState(3);

    // ✅ Fix filtering for Angie / Angi
    const filteredReviews =
        filter === "All"
            ? allReviews
            : allReviews.filter((r) => {
                const pf = r.platform.toLowerCase();
                const fl = filter.toLowerCase();
                return (
                    pf === fl ||
                    (pf === "angi" && fl === "angie") ||
                    (pf === "angie" && fl === "angi")
                );
            });

    const handlePrev = () => {
        setIndex((prev) =>
            prev === 0 ? Math.max(filteredReviews.length - 3, 0) : prev - 3
        );
    };

    const handleNext = () => {
        setIndex((prev) =>
            prev + 3 >= filteredReviews.length ? 0 : prev + 3
        );
    };

    // ✅ Auto-slide every 5s
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [filteredReviews]);

    const handleReadMoreReviews = () => {
        setVisibleCount((prev) => Math.min(prev + 3, filteredReviews.length));
    };

    const toggleTextExpand = (i) => {
        setExpandedTexts((prev) => ({
            ...prev,
            [i]: !prev[i],
        }));
    };

    const visibleReviews = filteredReviews.slice(index, index + visibleCount);

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <h2 className="testimonials-title">
                    <span className="accent">//</span> Testimonials
                </h2>

                <div className="filter-bar">
                    {["All", "Google", "Yelp", "Angie", "Houzz"].map((f) => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? "active" : ""}`}
                            onClick={() => {
                                setFilter(f);
                                setIndex(0);
                                setVisibleCount(3);
                            }}
                        >
                            {f}
                        </button>
                    ))}
                    <button className="write-review-btn">Write a review</button>
                </div>

                <div className="rating-summary">
                    <span className="stars">⭐⭐⭐⭐⭐</span> <strong>5.0</strong> |{" "}
                    {filteredReviews.length} reviews
                </div>

                <div className="slider-wrapper">
                    <button className="ts-arrow ts-arrow-left" onClick={handlePrev}>
                        ❮
                    </button>

                    <div className="reviews-grid">
                        {visibleReviews.map((r, i) => {
                            const fullIndex = index + i;
                            const shortText = r.text.slice(0, 200);
                            const needsMore = r.text.length > 200;
                            const isExpanded = expandedTexts[fullIndex];

                            return (
                                <div className="review-card" key={fullIndex}>
                                    <div className="review-header">
                                        <div>
                                            <h4>{r.name}</h4>
                                            <p className="review-date">{r.date}</p>
                                        </div>
                                        <img
                                            src={icons[r.platform]}
                                            alt={r.platform}
                                            className="platform-icon"
                                        />
                                    </div>
                                    <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                    <p
                                        className={`review-text ${isExpanded ? "expanded" : "collapsed"
                                            }`}
                                    >
                                        {isExpanded
                                            ? r.text
                                            : shortText + (needsMore ? "..." : "")}
                                    </p>
                                    {needsMore && (
                                        <button
                                            className="read-more-single"
                                            onClick={() => toggleTextExpand(fullIndex)}
                                        >
                                            {isExpanded ? "Show less ▲" : "Read more ▼"}
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <button className="ts-arrow ts-arrow-right" onClick={handleNext}>
                        ❯
                    </button>
                </div>

                {visibleCount < filteredReviews.length && (
                    <div className="read-more-container">
                        <button className="read-more-btn" onClick={handleReadMoreReviews}>
                            Show more reviews
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
