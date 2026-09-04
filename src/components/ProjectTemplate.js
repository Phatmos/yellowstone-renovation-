import React, { useMemo, useState, useEffect } from "react"
import { Link } from "gatsby"

const Icon = ({ type }) => {
  const icons = {
    Location: (
      <>
        <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
    "Year Built": (
      <>
        <path d="M7 3v3M17 3v3M4 8h16" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
      </>
    ),
    Area: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1.5" />
        <path d="M8 4v16M4 8h16" />
      </>
    ),
    Style: (
      <>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    Rails: (
      <>
        <path d="M5 20V4M19 20V4M5 8h14M5 14h14" />
        <path d="M9 20V8M15 20V8" />
      </>
    ),
    Cover: (
      <>
        <path d="M4 12a8 8 0 0 1 16 0" />
        <path d="M4 12h16M12 12v8" />
      </>
    ),
    Bedrooms: (
      <>
        <path d="M4 11h16v8M4 19V7h8v4" />
        <path d="M12 11h8v8" />
      </>
    ),
    Bathrooms: (
      <>
        <path d="M6 10h14v4a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-4Z" />
        <path d="M8 10V5a2 2 0 0 1 4 0v1" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="overview-svg">
      {icons[type] || icons.Style}
    </svg>
  )
}

const ProjectTemplate = ({
  title,
  location,
  yearBuilt,
  area,
  style,
  rails,
  cover,
  bedrooms,
  bathrooms,
  description,
  detailsText,
  highlights = [],
  heroImage,
  sideImages = [],
  ctaTitle = "Ready to Build Your Own Project?",
  ctaText = "Let us bring your vision to life with custom design, transparent pricing, and expert project management from start to finish.",
}) => {
  const galleryImages = useMemo(() => {
    return [heroImage, ...sideImages].filter(Boolean)
  }, [heroImage, sideImages])

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const mobileStartIndex = Math.max(
    0,
    Math.min(activeIndex - 1, galleryImages.length - 4)
  )

  const mobileThumbs = galleryImages.slice(mobileStartIndex, mobileStartIndex + 4)

  const showPrev = e => {
    if (e) e.stopPropagation()
    setActiveIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const showNext = e => {
    if (e) e.stopPropagation()
    setActiveIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const onKeyDown = e => {
      if (!lightboxOpen) return
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [lightboxOpen, galleryImages.length])

  const overviewItems = [
    ["Location", location],
    ["Year Built", yearBuilt],
    ["Area", area],
    ["Style", style],
    ["Rails", rails],
    ["Cover", cover],
    ["Bedrooms", bedrooms],
    ["Bathrooms", bathrooms],
  ].filter(([, value]) => value && value !== "-")

  return (
    <>
      <style>{`
                html {
                    scroll-behavior: smooth;
                }

               .project-page {
    color: #000;
    background: #fff;
}

               .project-wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 22px 18px 10px;
}
                .project-breadcrumb {
                    font-size: 13px;
                    margin-bottom: 18px;
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    align-items: center;
                    color: #555;
                }

                .project-breadcrumb a {
                    color: #000;
                    text-decoration: none;
                }

                .gallery-top {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 12px;
                    margin-bottom: 34px;
                }

                .gallery-left {
                    position: relative;
                }

                .gallery-hero-btn,
                .gallery-thumb-btn {
                    border: 0;
                    background: transparent;
                    padding: 0;
                    cursor: pointer;
                    display: block;
                    width: 100%;
                }

                .gallery-hero-img {
                    width: 100%;
                    height: 430px;
                    object-fit: cover;
                    border-radius: 18px;
                    display: block;
                }

                .view-all-photos-btn {
                    position: absolute;
                    right: 18px;
                    bottom: 18px;
                    z-index: 5;
                    background: #fff;
                    color: #000;
                    border: 1px solid #000;
                    border-radius: 999px;
                    padding: 12px 18px;
                    font-size: 14px;
                    font-weight: 800;
                    text-decoration: none;
                    line-height: 1;
                    box-shadow: none !important;
                    transition: none !important;
                }

                .view-all-photos-btn:hover,
                .view-all-photos-btn:focus,
                .view-all-photos-btn:active {
                    background: #fff !important;
                    color: #000 !important;
                    border-color: #000 !important;
                    transform: none !important;
                    box-shadow: none !important;
                    outline: none !important;
                }

                .gallery-side-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }

                .gallery-thumb-img {
                    width: 100%;
                    height: 209px;
                    object-fit: cover;
                    border-radius: 16px;
                    display: block;
                }

                .mobile-gallery-controls {
                    display: none;
                }

                .project-content {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 360px;
                    gap: 34px;
                    align-items: start;
                }

                .project-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #000;
                    color: #fff;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: .8px;
                    text-transform: uppercase;
                    border-radius: 999px;
                    padding: 8px 14px;
                    margin-bottom: 16px;
                }

                .project-title {
                    font-size: clamp(34px, 3.2vw, 46px);
                    line-height: 1.08;
                    margin: 0 0 26px;
                    color: #000;
                    letter-spacing: -1px;
                    max-width: 820px;
                }

                .project-overview-box {
                    border-top: 1px solid #ddd6cc;
                    border-bottom: 1px solid #ddd6cc;
                    padding: 26px 0;
                    margin-bottom: 30px;
                }

                .project-section-title-wrap {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 24px;
                }

                .project-section-title-wrap::before,
                .project-section-title-wrap::after {
                    content: "";
                    height: 1px;
                    background: #ded8cf;
                    flex: 1;
                }

                .project-section-title {
                    font-size: 13px;
                    text-align: center;
                    margin: 0;
                    font-weight: 900;
                    letter-spacing: 1.4px;
                    text-transform: uppercase;
                    color: #000;
                    white-space: nowrap;
                }

                .project-overview-grid.fancy {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px 22px;
                }

                .overview-item {
                    display: grid;
                    grid-template-columns: 44px 1fr;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 14px;
                    border: 1px solid #e5e0d8;
                    border-radius: 14px;
                    background: #fff;
                }

                .overview-icon {
                    width: 44px;
                    height: 44px;
                    border: 1px solid #000;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #fff;
                }

                .overview-svg {
                    width: 20px;
                    height: 20px;
                    fill: none;
                    stroke: #000;
                    stroke-width: 1.8;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                .overview-label {
                    font-size: 11px;
                    color: #777;
                    margin-bottom: 4px;
                    text-transform: uppercase;
                    letter-spacing: .5px;
                    font-weight: 700;
                }

                .overview-value {
                    font-size: 15px;
                    font-weight: 800;
                    color: #000;
                    line-height: 1.35;
                }

                .project-detail-card {
                    background: #f6f4f1;
                    border: 1px solid #ebe5dc;
                    border-radius: 18px;
                    padding: 24px;
                    margin-bottom: 24px;
                }

                .project-description-box {
                    background: #fff;
                    padding: 22px 24px;
                    border-radius: 14px;
                    border-left: 4px solid #000;
                    font-size: 16px;
                    line-height: 1.75;
                    color: #111;
                    margin-bottom: 18px;
                }

                .project-copy {
                    font-size: 15px;
                    line-height: 1.85;
                    color: #111;
                    margin: 0;
                }

                .project-highlights-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .project-highlight-item {
                    border: 1px solid #e5e0d8;
                    border-radius: 999px;
                    padding: 11px 14px;
                    font-size: 14px;
                    font-weight: 650;
                    line-height: 1.35;
                    background: #fff;
                    color: #000;
                }

                .project-aside {
                    background: #fff;
                    padding: 30px;
                    border-radius: 18px;
                    border: 1px solid #111;
                    position: sticky;
                    top: 22px;
                }

                .project-aside h2 {
                    font-size: 33px;
                    line-height: 1.08;
                    margin: 0 0 16px;
                    letter-spacing: -0.8px;
                    color: #000;
                }

                .project-aside p {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #111;
                    margin: 0 0 22px;
                }

                .project-btn-primary,
                .project-btn-secondary {
                    display: block;
                    text-align: center;
                    text-decoration: none;
                    padding: 15px 20px;
                    border-radius: 999px;
                    font-size: 15px;
                    font-weight: 800;
                    transition: none !important;
                    box-shadow: none !important;
                }

                .project-btn-primary {
                    background: #ff7a00;
                    color: #fff;
                    border: 1px solid #ff7a00;
                    margin-bottom: 12px;
                }

                .project-btn-secondary {
                    background: #fff;
                    color: #000;
                    border: 1px solid #000;
                }

                .project-btn-primary:hover,
                .project-btn-primary:focus,
                .project-btn-primary:active {
                    background: #ff7a00 !important;
                    color: #fff !important;
                    border-color: #ff7a00 !important;
                    transform: none !important;
                    box-shadow: none !important;
                }

                .project-btn-secondary:hover,
                .project-btn-secondary:focus,
                .project-btn-secondary:active {
                    background: #fff !important;
                    color: #000 !important;
                    border-color: #000 !important;
                    transform: none !important;
                    box-shadow: none !important;
                }

                .lightbox-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,.88);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .lightbox-inner {
                    position: relative;
                    width: 100%;
                    max-width: 1200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .lightbox-image {
                    width: 100%;
                    max-height: 86vh;
                    object-fit: contain;
                    border-radius: 12px;
                    display: block;
                }

                .lightbox-counter {
                    position: fixed;
                    top: 22px;
                    left: 22px;
                    z-index: 10002;
                    color: #fff;
                    background: rgba(0,0,0,.55);
                    border: 1px solid rgba(255,255,255,.35);
                    border-radius: 999px;
                    padding: 8px 14px;
                    font-size: 14px;
                    font-weight: 800;
                    line-height: 1;
                }

                .lightbox-close,
                .lightbox-nav,
                .mobile-arrow {
                    background: #fff !important;
                    color: #000 !important;
                    border: 1px solid #000 !important;
                    border-radius: 999px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 0;
                    margin: 0;
                    line-height: 1;
                    transition: none !important;
                    box-shadow: none !important;
                    outline: none !important;
                }

                .lightbox-close:hover,
                .lightbox-close:focus,
                .lightbox-close:active,
                .lightbox-nav:hover,
                .lightbox-nav:focus,
                .lightbox-nav:active,
                .mobile-arrow:hover,
                .mobile-arrow:focus,
                .mobile-arrow:active {
                    background: #fff !important;
                    color: #000 !important;
                    border: 1px solid #000 !important;
                    box-shadow: none !important;
                    outline: none !important;
                }

                .lightbox-close {
                    position: fixed;
                    top: 22px;
                    right: 22px;
                    z-index: 10002;
                    width: 44px;
                    height: 44px;
                    font-size: 24px;
                    font-weight: 800;
                }

                .lightbox-nav {
                    position: fixed;
                    top: 50%;
                    z-index: 10002;
                    width: 48px;
                    height: 48px;
                    font-size: 30px;
                    font-weight: 800;
                    transform: translateY(-50%) !important;
                }

                .lightbox-nav:hover,
                .lightbox-nav:focus,
                .lightbox-nav:active {
                    transform: translateY(-50%) !important;
                }

                .lightbox-prev {
                    left: 28px;
                }

                .lightbox-next {
                    right: 28px;
                }

                @media (max-width: 900px) {
                    .gallery-top {
                        grid-template-columns: 1fr;
                    }

                    .project-content {
                        grid-template-columns: 1fr;
                    }

                    .project-aside {
                        position: static;
                    }
                }

                @media (max-width: 768px) {
                    .project-wrap {
                        padding: 10px 10px 44px;
                    }

                    .project-breadcrumb {
                        font-size: 11px;
                        margin-bottom: 10px;
                    }

                    .gallery-top {
                        gap: 8px;
                        margin-bottom: 24px;
                    }

                    .gallery-hero-img {
                        height: 225px;
                        border-radius: 14px;
                    }

                    .view-all-photos-btn {
                        right: 10px;
                        bottom: 10px;
                        padding: 9px 12px;
                        font-size: 12px;
                    }

                    .gallery-side-grid {
                        display: none;
                    }

                    .mobile-gallery-controls {
                        display: grid;
                        grid-template-columns: 36px 1fr 36px;
                        gap: 6px;
                        align-items: center;
                        margin-top: 8px;
                    }

                    .mobile-arrow {
                        width: 36px;
                        height: 36px;
                        font-size: 24px;
                        font-weight: 800;
                    }

                    .mobile-thumbs {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 5px;
                    }

                    .mobile-thumb {
                        border: 1px solid #ddd;
                        padding: 0;
                        background: #fff;
                        border-radius: 8px;
                        overflow: hidden;
                        aspect-ratio: 1 / 1;
                        transition: none !important;
                    }

                    .mobile-thumb.active {
                        border: 2px solid #000;
                    }

                    .mobile-thumb:hover,
                    .mobile-thumb:focus,
                    .mobile-thumb:active {
                        border-color: #000;
                        transform: none !important;
                        box-shadow: none !important;
                        outline: none !important;
                    }

                    .mobile-thumb img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    .project-title {
                        font-size: 28px;
                        line-height: 1.08;
                        margin-bottom: 18px;
                        letter-spacing: -0.6px;
                    }

                    .project-overview-box {
                        padding: 22px 0;
                        margin-bottom: 24px;
                    }

                    .project-section-title-wrap {
                        margin-bottom: 18px;
                    }

                    .project-overview-grid.fancy {
                        grid-template-columns: 1fr;
                        gap: 10px;
                    }

                    .overview-item {
                        grid-template-columns: 40px 1fr;
                        padding: 12px;
                    }

                    .overview-icon {
                        width: 40px;
                        height: 40px;
                    }

                    .overview-value {
                        font-size: 14px;
                    }

                    .project-detail-card {
                        padding: 18px;
                        border-radius: 16px;
                    }

                    .project-description-box {
                        padding: 18px 16px;
                        font-size: 14px;
                        line-height: 1.65;
                    }

                    .project-copy {
                        font-size: 14px;
                        line-height: 1.7;
                    }

                    .project-highlights-grid {
                        grid-template-columns: 1fr;
                    }

                    .project-highlight-item {
                        border-radius: 14px;
                        font-size: 14px;
                    }

                    .project-aside {
                        padding: 22px 16px;
                        border-radius: 16px;
                    }

                    .project-aside h2 {
                        font-size: 27px;
                    }

                    .project-aside p {
                        font-size: 14px;
                    }

                    .project-btn-primary,
                    .project-btn-secondary {
                        font-size: 14px;
                        padding: 14px 18px;
                    }

                    .lightbox-overlay {
                        padding: 0;
                    }

                    .lightbox-inner {
                        width: 100%;
                        height: 100vh;
                        max-width: none;
                    }

                    .lightbox-image {
                        width: 100%;
                        max-height: 80vh;
                        border-radius: 0;
                    }

                    .lightbox-counter {
                        top: 14px;
                        left: 14px;
                        font-size: 13px;
                        padding: 7px 12px;
                    }

                    .lightbox-close {
                        top: 14px;
                        right: 14px;
                        width: 40px;
                        height: 40px;
                        font-size: 22px;
                    }

                    .lightbox-nav {
                        width: 40px;
                        height: 40px;
                        font-size: 28px;
                    }

                    .lightbox-prev {
                        left: 10px;
                    }

                    .lightbox-next {
                        right: 10px;
                    }
                }
            `}</style>

      <main className="project-page">
        <div className="project-wrap">
          <div className="project-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/projects-showcase/">Projects</Link>
            <span>›</span>
            <strong>{title}</strong>
          </div>

          <section className="gallery-top">
            <div className="gallery-left">
              <button
                type="button"
                className="gallery-hero-btn"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={galleryImages[activeIndex]}
                  alt={title}
                  className="gallery-hero-img"
                />
              </button>

              <a
                href="#project-gallery"
                className="view-all-photos-btn"
                onClick={e => e.stopPropagation()}
              >
                View All Photos
              </a>
            </div>

            <div className="gallery-side-grid">
              {galleryImages.slice(1, 5).map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className="gallery-thumb-btn"
                  onClick={() => {
                    setActiveIndex(index + 1)
                    setLightboxOpen(true)
                  }}
                >
                  <img
                    src={img}
                    alt={`${title} ${index + 2}`}
                    className="gallery-thumb-img"
                  />
                </button>
              ))}
            </div>

            {galleryImages.length > 1 && (
              <div className="mobile-gallery-controls">
                <button
                  type="button"
                  className="mobile-arrow"
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <div className="mobile-thumbs">
                  {mobileThumbs.map((img, index) => {
                    const realIndex = mobileStartIndex + index

                    return (
                      <button
                        key={realIndex}
                        type="button"
                        className={`mobile-thumb ${activeIndex === realIndex ? "active" : ""
                          }`}
                        onClick={() => setActiveIndex(realIndex)}
                      >
                        <img
                          src={img}
                          alt={`${title} thumbnail ${realIndex + 1}`}
                        />
                      </button>
                    )
                  })}
                </div>

                <button
                  type="button"
                  className="mobile-arrow"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            )}
          </section>

          <section className="project-content">
            <div>
              <span className="project-label">Completed Project</span>

              <h1 className="project-title">{title}</h1>

              <div className="project-overview-box">
                <div className="project-section-title-wrap">
                  <h2 className="project-section-title">Project Overview</h2>
                </div>

                <div className="project-overview-grid fancy">
                  {overviewItems.map(([label, value]) => (
                    <div key={label} className="overview-item">
                      <span className="overview-icon">
                        <Icon type={label} />
                      </span>

                      <div>
                        <div className="overview-label">{label}</div>
                        <div className="overview-value">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-detail-card">
                <div className="project-section-title-wrap">
                  <h3 className="project-section-title">Project Details</h3>
                </div>

                <div className="project-description-box">
                  {description}
                </div>

                {detailsText && <p className="project-copy">{detailsText}</p>}
              </div>

              {highlights.length > 0 && (
                <div>
                  <span className="project-label">Project Highlights</span>

                  <div className="project-highlights-grid">
                    {highlights.map((item, index) => (
                      <div className="project-highlight-item" key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="project-aside">
              <h2>{ctaTitle}</h2>
              <p>{ctaText}</p>

              <Link to="/contact/" className="project-btn-primary">
                Start Your Project Today
              </Link>

              <Link to="/projects-showcase/" className="project-btn-secondary">
                View More Projects
              </Link>
            </aside>
          </section>
        </div>

        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
            <div className="lightbox-counter">
              {activeIndex + 1} / {galleryImages.length}
            </div>

            <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav lightbox-prev"
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              <img
                src={galleryImages[activeIndex]}
                alt={`${title} large`}
                className="lightbox-image"
              />

              {galleryImages.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav lightbox-next"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              )}

              <button
                type="button"
                className="lightbox-close"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close gallery"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default ProjectTemplate