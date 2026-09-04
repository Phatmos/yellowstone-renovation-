import React from "react";
import {
    ShieldCheck,
    Hammer,
    CheckCircle,
    ArrowRight,
    Sparkles,
    BadgeDollarSign,
} from "lucide-react";

import "../styles/SidingPageSection.css";

export default function SidingPageSection({
    city,
    layoutOrder = [],

    heroTitle,
    heroText1,
    heroText2,
    heroImage,
    heroBottomText,

    deckHeroTitle,
    deckHeroText1,
    deckHeroText2,
    deckHeroImage,
    deckServicesTitle,
    deckServices = [],
    deckCostTitle,
    deckCostText,
    deckImages = [],

    stylesTitle,
    stylesIntro,
    styles = [],

    sidingTypesTitle,
    sidingTypesIntro,
    sidingTypes = [],

    costTitle,
    costIntro,
    costTable = [],

    extraSectionTitle,
    extraSectionText,
    extraPoints = [],

    ctaTitle,
    ctaText,
    ctaImage,
}) {
    const sections = {
        hero: (
            <section className="sps-hero" key="hero">
                <div className="sps-container sps-hero-grid">
                    <div className="sps-hero-content">
                        <span className="sps-eyebrow">
                            <Sparkles size={16} />
                            Premium Exterior Remodeling in {city}
                        </span>

                        <h2>{heroTitle}</h2>

                        <p>{heroText1}</p>
                        <p>{heroText2}</p>

                        <div className="sps-trust-row">
                            <div>
                                <ShieldCheck size={22} />
                                Licensed & Insured
                            </div>

                            <div>
                                <Hammer size={22} />
                                Decks & Siding Experts
                            </div>

                            <div>
                                <BadgeDollarSign size={22} />
                                Free Estimates
                            </div>
                        </div>

                        <div className="sps-highlight">{heroBottomText}</div>
                    </div>

                    <div className="sps-image-wrap">
                        <img
                            src={heroImage}
                            alt={`${city} deck and siding contractor`}
                        />
                    </div>
                </div>
            </section>
        ),

        deck: (
            <section className="sps-section sps-dark" key="deck">
                <div className="sps-container">
                    <div className="sps-center">
                        <span className="sps-eyebrow light">Custom Outdoor Living</span>
                        <h2>{deckHeroTitle}</h2>
                        <p>{deckHeroText1}</p>
                        <p>{deckHeroText2}</p>
                    </div>

                    <div className="sps-feature-grid">
                        <div className="sps-main-image">
                            <img
                                src={deckHeroImage}
                                alt={`${city} custom deck builder`}
                            />
                        </div>

                        <div className="sps-service-card">
                            <h3>{deckServicesTitle}</h3>

                            <ul>
                                {deckServices.map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle size={18} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="sps-cost-box">
                        <h3>{deckCostTitle}</h3>
                        <p>{deckCostText}</p>
                    </div>

                    <div className="sps-gallery">
                        {deckImages.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`${city} deck project ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        ),

        styles: (
            <section className="sps-section" key="styles">
                <div className="sps-container">
                    <div className="sps-center">
                        <span className="sps-eyebrow">Design Options</span>
                        <h2>{stylesTitle}</h2>
                        <p>{stylesIntro}</p>
                    </div>

                    <div className="sps-card-grid">
                        {styles.map((item, i) => (
                            <div className="sps-card" key={i}>
                                <img src={item.image} alt={item.name} />

                                <div className="sps-card-content">
                                    <h3>{item.name}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        ),

        types: (
            <section className="sps-section sps-soft" key="types">
                <div className="sps-container">
                    <div className="sps-center">
                        <span className="sps-eyebrow">Premium Materials</span>
                        <h2>{sidingTypesTitle}</h2>
                        <p>{sidingTypesIntro}</p>
                    </div>

                    <div className="sps-material-grid">
                        {sidingTypes.map((item, i) => (
                            <div className="sps-material" key={i}>
                                <img src={item.image} alt={item.name} />
                                <h3>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        ),

        cost: (
            <section className="sps-section" key="cost">
                <div className="sps-container">
                    <div className="sps-center">
                        <span className="sps-eyebrow">Transparent Pricing</span>
                        <h2>{costTitle}</h2>
                        <p>{costIntro}</p>
                    </div>

                    <div className="sps-table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>Typical Installed Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {costTable.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.material}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        ),

        extra: (
            <section className="sps-section sps-dark" key="extra">
                <div className="sps-container">
                    <div className="sps-center">
                        <span className="sps-eyebrow light">
                            Why Homeowners Choose Us
                        </span>

                        <h2>{extraSectionTitle}</h2>
                        <p>{extraSectionText}</p>
                    </div>

                    <div className="sps-points-grid">
                        {extraPoints.map((point, i) => (
                            <div className="sps-point" key={i}>
                                <CheckCircle size={22} />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        ),

        cta: (
            <section className="sps-cta" key="cta">
                <div className="sps-container sps-cta-grid">
                    <div>
                        <span className="sps-eyebrow light">Start Your Project</span>

                        <h2>{ctaTitle}</h2>
                        <p>{ctaText}</p>

                        <a href="/contact" className="sps-btn">
                            Get Free Quote
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <img
                        src={ctaImage}
                        alt={`${city} exterior remodeling quote`}
                    />
                </div>
            </section>
        ),
    };

    return <>{layoutOrder.map((section) => sections[section])}</>;
}