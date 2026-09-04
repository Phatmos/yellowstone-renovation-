import * as React from "react"
import "../styles/Reviews.css"

const Reviews = () => {
    const reviews = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg",
            name: "Yelp",
            rating: "⭐ 4.6/5",
            text: "102+ Reviews",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
            name: "Google",
            rating: "⭐ 4.9/5",
            text: "283+ Reviews",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
            name: "Facebook",
            rating: "⭐ 5.0/5",
            text: "65+ Reviews",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Angi_logo.svg",
            name: "Angi",
            rating: "⭐ 5.0/5",
            text: "95+ Reviews",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Houzz_logo.svg",
            name: "Houzz",
            rating: "⭐ 5.0/5",
            text: "72+ Reviews",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Trustpilot_logo.svg",
            name: "Trustpilot",
            rating: "⭐ 4.8/5",
            text: "331+ Reviews",
        },
    ]

    return (
        <section className="reviews-section">
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <img src={review.img} alt={review.name} />
                        <div className="rating">{review.rating}</div>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews
