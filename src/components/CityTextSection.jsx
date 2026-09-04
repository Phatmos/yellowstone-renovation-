import React, { useState } from "react";
import "../styles/CityTextSection.css";
import {
    FaCheckCircle,
    FaChevronDown,
    FaPhoneAlt,
    FaStar,
} from "react-icons/fa";

/**
 * CityTextSection — James Hardie promo section (modular, reorderable)
 * CTA style: two-column box + review stars (B + C)
 * Color: Hardie Green (#0A923D)
 */
export default function CityTextSection({
    topTitle,
    mainTitle,
    introText,

    benefitsTitle,
    benefits = [],
    logos = [],

    whyTitle,
    whyList = [],
    whyImage = "/images/remodler13.webp",

    compareTitle,
    compareImage = "/images/remodler15.webp",
    compareText,

    ctaHeading = "Have Questions? Free In-Home Consultation & Estimate",
    phone = "916-599-6185",
    ctaPrimaryLabel = "Call Now",
    ctaPrimaryLink = "tel:9165996185",
    ctaSecondaryLabel = "Request Free Quote",
    ctaSecondaryLink = "/contact",
    ctaPersonImage = "/images/remodler14.webp",
    reviewText = "4.9/5 rating — 80+ homeowner reviews",

    contractorTitle,
    contractorText,
    contractorImage = "/images/remodler17.webp",
    awardLogos = [],

    // ✅ UPDATED: Installer sections now use an ARRAY
    installers = [],

    exploreTitle = "Explore More Siding Options",
    exploreLinks = [],

    location = "Richmond, KY",
    neighborhoods = [],

    // Optional FAQ
    faq = [],
}) {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <section className="cityV2">
            <div className="container">

                {/* HEADER */}
                <div className="header">
                    {topTitle && <div className="tag">{topTitle}</div>}
                    <h1 className="h1">{mainTitle}</h1>
                    {introText && <p className="intro">{introText}</p>}
                </div>

                {/* BENEFITS */}
                <div className="divider" />
                <section className="block">
                    <h2 className="h2"> {benefitsTitle} </h2>

                    <ul className="benefitGrid">
                        {benefits.map((b, i) => (
                            <li key={i} className="benefitItem">
                                <FaCheckCircle className="check" aria-hidden />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>

                    {logos?.length > 0 && (
                        <div className="logoRow">
                            {logos.map((src, i) => (
                                <img key={i} src={src} alt="Brand" loading="lazy" />
                            ))}
                        </div>
                    )}
                </section>

                {/* WHY HARDIE */}
                <div className="divider" />
                <section className="block alt">
                    <div className="col text">
                        <h2 className="h2">{whyTitle}</h2>
                        <ul className="whyList">
                            {whyList.map((w, i) => (
                                <li key={i}>
                                    <FaCheckCircle className="check" aria-hidden />
                                    <span>{w}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col media">
                        <img src={whyImage} alt="Why James Hardie" loading="lazy" />
                    </div>
                </section>

                {/* COMPARE */}
                <div className="divider" />
                <section className="block compare">
                    <h2 className="h2">{compareTitle}</h2>
                    <div className="compareRow">
                        <img src={compareImage} alt="James Hardie" loading="lazy" />
                        <p>{compareText}</p>
                    </div>
                </section>

                {/* CTA 2-COLUMN + REVIEWS */}
                <section className="ctaBox">
                    <div className="ctaContent">
                        <div className="ctaLeft">
                            <h3 className="ctaHeading">{ctaHeading}</h3>

                            <div className="stars" aria-label={reviewText}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="star" />
                                ))}
                                <span className="reviewText">{reviewText}</span>
                            </div>

                            <div className="ctaButtons">
                                <a href={ctaPrimaryLink} className="btn primary">
                                    <FaPhoneAlt /> {ctaPrimaryLabel}
                                </a>
                                <a href={ctaSecondaryLink} className="btn secondary">
                                    {ctaSecondaryLabel}
                                </a>
                            </div>

                            <div className="phoneLine">
                                <FaPhoneAlt /> <a href={`tel:${phone.replace(/\D/g, "")}`}>{phone}</a>
                            </div>
                        </div>

                        <div className="ctaRight">
                            <img src={ctaPersonImage} alt="Speak with a specialist" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* CONTRACTOR + IMAGE */}
                <div className="divider" />
                <section className="block alt">
                    <div className="col text">
                        <h2 className="h2">{contractorTitle}</h2>
                        <p>{contractorText}</p>

                        {awardLogos?.length > 0 && (
                            <div className="logoRow">
                                {awardLogos.map((src, i) => (
                                    <img key={i} src={src} alt="Award / Credential" loading="lazy" />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="col media">
                        <img src={contractorImage} alt="Professional installation" loading="lazy" />
                    </div>
                </section>

                {/* ✅ INSTALLERS — MULTIPLE SECTIONS */}
                {Array.isArray(installers) && installers.length > 0 && (
                    <>
                        <div className="divider" />
                        {installers.map((section, i) => (
                            <section key={i} className="block">
                                <h2 className="h2">{section.title}</h2>
                                <p>{section.text}</p>
                            </section>
                        ))}
                    </>
                )}

                {/* EXPLORE OPTIONS */}
                {exploreLinks?.length > 0 && (
                    <>
                        <div className="divider" />
                        <section className="block">
                            <h3 className="h3">{exploreTitle}</h3>
                            <div className="pillRow">
                                {exploreLinks.map((l, i) => (
                                    <a key={i} href={l.link} className="pill">{l.label}</a>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {/* SERVICE AREAS */}
                {neighborhoods?.length > 0 && (
                    <>
                        <div className="divider" />
                        <section className="block">
                            <div className="tag small">Serving Homes Across {location}</div>
                            <div className="pillRow">
                                {neighborhoods.map((n, i) => (
                                    <a key={i} href={n.link} className="pill ghost">{n.label}</a>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {/* FAQ */}
                {faq?.length > 0 && (
                    <>
                        <div className="divider" />
                        <section className="block">
                            <h3 className="h3">Frequently Asked Questions</h3>

                            <div className="faqList">
                                {faq.map((f, i) => (
                                    <div
                                        key={i}
                                        className={`faqItem ${openFaq === i ? "open" : ""}`}
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === "Enter" && setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <div className="q">
                                            <span>{f.q}</span>
                                            <FaChevronDown className="caret" />
                                        </div>
                                        <div className="a">{f.a}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {/* FINAL CTA BAR */}
                <section className="finalCTA">
                    <a href={ctaPrimaryLink} className="btn final"><FaPhoneAlt /> {ctaPrimaryLabel}</a>
                </section>
            </div>
        </section>
    );
}
