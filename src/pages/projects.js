import * as React from "react";
import Layout from "../components/Layout";
import "../styles/ProjectsPage.css";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import { MapPin } from "lucide-react"; // ✅ nice icon for location

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Siding", "Decking", "Windows", "Painting"];

  const projects = [
    // --- SIDING PROJECTS ---
    {
      title: "James Hardie® Fiber Cement Siding Upgrade",
      category: "Siding",
      image: "/images/remodler22.webp",
      location: "Lexington, KY 40509",
    },
    {
      title: "Vinyl Siding Replacement — Two-Story Home",
      category: "Siding",
      image: "/images/remodler4.webp",
      location: "Richmond, KY 40475",
    },
    {
      title: "HardiePlank® Lap Siding with Trim Accents",
      category: "Siding",
      image: "/images/remodler5.webp",
      location: "Versailles, KY 40383",
    },
    {
      title: "Hardie® Siding & Energy-Efficient Window Upgrade — Frankfort, KY",
      category: "Siding",
      image: "/images/remodler13.webp",
      location: "Frankfort, KY 40601",
    },
    {
      title: "Modern Vertical Siding Installation",
      category: "Siding",
      image: "/images/remodler18.webp",
      location: "Nicholasville, KY 40356",
    },

    // --- DECKING PROJECTS ---
    {
      title: "Composite Deck Build with Lighting Package",
      category: "Decking",
      image: "/images/deck-builder.webp",
      location: "Georgetown, KY 40324",
    },
    {
      title: "Custom Wood Deck & Stair Expansion",
      category: "Decking",
      image: "/images/deck/deck-lexington1.webp",
      location: "Lexington, KY 40515",
    },
    {
      title: "Covered Deck with Cedar Ceiling & Fans",
      category: "Decking",
      image: "/images/deck/deck-lexington8.webp",
      location: "Nicholasville, KY 40356",
    },
    {
      title: "Trex Composite Deck with Black Railings",
      category: "Decking",
      image: "/images/deck/deck-lexington14.webp",
      location: "Winchester, KY 40391",
    },
    {
      title: "Elevated Multi-Level Deck with Pergola",
      category: "Decking",
      image: "/images/deck/deck-lexington22.webp",
      location: "Berea, KY 40403",
    },

    // --- WINDOWS ---
    {
      title: "Energy-Efficient Window Replacement",
      category: "Windows",
      image: "/images/windows1.webp",
      location: "Lexington, KY 40505",
    },
    {
      title: "New Windows & Trim Wrap Upgrade",
      category: "Windows",
      image: "/images/remodler11.webp",
      location: "Richmond, KY 40475",
    },

    // --- PAINTING ---
    {
      title: "Exterior Repaint + Trim Protection",
      category: "Painting",
      image: "/images/remodler9.webp",
      location: "Nicholasville, KY 40356",
    },
    {
      title: "Full Exterior Painting & Caulking Restoration",
      category: "Painting",
      image: "/images/remodler15.webp",
      location: "Georgetown, KY 40324",
    },
  ];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <Helmet>
        <meta
          name="keywords"
          content="Deck builder Lexington KY, Siding contractor Lexington KY, Composite decks, James Hardie siding, Home remodeling Kentucky projects"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deck & Siding Project Gallery | Yellowstone Renovation"
        />
        <meta
          property="og:description"
          content="Browse our real siding replacement and custom deck construction projects across Central Kentucky. Quality craftsmanship in every detail."
        />
        <meta
          property="og:image"
          content="https://yellowstonerenovation.com/images/deck-builder.webp"
        />
      </Helmet>

      <SEO
        title="Deck & Siding Projects | Yellowstone Renovation | Lexington, KY"
        description="Explore real before & after photos of decks, siding, and windows installed by Yellowstone Renovation across Central Kentucky."
        pathname="/projects/"
        image="https://yellowstonerenovation.com/images/deck-builder.webp"
      />

      <section className="portfolio-section">
        <div className="portfolio-container">
          <h2>Our Deck & Siding Projects</h2>
          <p className="portfolio-subtitle">
            Discover how Yellowstone Renovation brings lasting value and beauty
            to Kentucky homes — from custom decks to durable James Hardie®
            siding installations.
          </p>

          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="portfolio-count">
            Showing {filtered.length} of {projects.length} projects
          </p>

          <div className="portfolio-grid">
            {filtered.map((project, i) => (
              <div key={i} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>
                    <MapPin size={18} color="#0a923d" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
