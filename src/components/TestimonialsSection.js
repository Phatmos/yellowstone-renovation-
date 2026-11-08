import React, { useState, useEffect, useMemo } from "react";
import reviewData from "../data/customer-reviews.json";
import "../styles/TestimonialsSection.css";

const allReviews = reviewData.reviews;
const platforms = ["All", ...new Set(allReviews.map(review => review.platform))];
const icons = { BBB: "/icons/bbb-logo.webp", Angi: "/icons/angi.png" };

export default function TestimonialsSection() {
    const [filter, setFilter] = useState("All");
    const [index, setIndex] = useState(0);
    const [expandedTexts, setExpandedTexts] = useState({});
    const [visibleCount, setVisibleCount] = useState(3);
    const filteredReviews = useMemo(() => filter === "All" ? allReviews : allReviews.filter(review => review.platform === filter), [filter]);
    const handlePrev = () => setIndex(previous => previous === 0 ? Math.max(filteredReviews.length - visibleCount, 0) : Math.max(previous - visibleCount, 0));
    const handleNext = () => setIndex(previous => previous + visibleCount >= filteredReviews.length ? 0 : previous + visibleCount);

    useEffect(() => {
        if (visibleCount >= filteredReviews.length) return undefined;
        const timer = setInterval(() => setIndex(previous => previous + visibleCount >= filteredReviews.length ? 0 : previous + visibleCount), 5000);
        return () => clearInterval(timer);
    }, [filteredReviews, visibleCount]);

    const visibleReviews = filteredReviews.slice(index, index + visibleCount);
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <h2 className="testimonials-title"><span className="accent">//</span> Testimonials</h2>
                <div className="filter-bar">
                    {platforms.map(platform => <button type="button" key={platform} className={`filter-btn ${filter === platform ? "active" : ""}`} aria-pressed={filter === platform} onClick={() => { setFilter(platform); setIndex(0); setVisibleCount(3); }}>{platform}</button>)}
                </div>
                <div className="rating-summary"><strong>Collected homeowner reviews</strong> · {filteredReviews.length} reviews</div>
                <div className="slider-wrapper">
                    <button type="button" className="ts-arrow ts-arrow-left" onClick={handlePrev} disabled={filteredReviews.length <= visibleCount} aria-label="Previous reviews">❮</button>
                    <div className="reviews-grid">
                        {visibleReviews.map(review => {
                            const text = review.summary;
                            const needsMore = text.length > 200;
                            const expanded = expandedTexts[review.id];
                            return <div className="review-card" key={review.id}>
                                <div className="review-header"><div><h4>{review.name}</h4><p className="review-date">{review.date}</p></div>{icons[review.platform] ? <img src={icons[review.platform]} alt={review.platform} className="platform-icon" /> : <span className="review-platform">{review.platform}</span>}</div>
                                <div className="review-rating" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                                <p className="review-date">Summary · {review.origin}</p>
                                <p className={`review-text ${expanded ? "expanded" : "collapsed"}`}>{expanded || !needsMore ? text : `${text.slice(0, 200)}…`}</p>
                                {needsMore && <button type="button" className="read-more-single" aria-expanded={Boolean(expanded)} onClick={() => setExpandedTexts(previous => ({ ...previous, [review.id]: !previous[review.id] }))}>{expanded ? "Show less ▲" : "Read more ▼"}</button>}
                                <a href={review.url} target="_blank" rel="noopener noreferrer">Read review source on {review.platform} ↗</a>
                            </div>;
                        })}
                    </div>
                    <button type="button" className="ts-arrow ts-arrow-right" onClick={handleNext} disabled={filteredReviews.length <= visibleCount} aria-label="Next reviews">❯</button>
                </div>
                {visibleCount < filteredReviews.length && <div className="read-more-container"><button type="button" className="read-more-btn" onClick={() => { setIndex(0); setVisibleCount(previous => Math.min(previous + 3, filteredReviews.length)); }}>Show more reviews</button></div>}
            </div>
        </section>
    );
}
