import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import "../../styles/BlogMain.css";
import BlogHeader from "../../components/BlogHeader";

export default function BlogPage({ data }) {
  const posts = data.allMarkdownRemark.nodes;

  const categories = ["All", "Siding", "Decking", "Windows", "Painting"];
  const [filter, setFilter] = useState("All");
  const [current, setCurrent] = useState(0);

  const heroPosts = posts.slice(0, 5);

  useEffect(() => {
    if (heroPosts.length < 2) return;
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % heroPosts.length);
    }, 5000);
    return () => clearInterval(t);
  }, [heroPosts.length]);

  const filtered =
    filter === "All"
      ? posts
      : posts.filter((p) => p.frontmatter.category === filter);

  return (
    <Layout>


      <SEO
        title="Blog — Yellowstone Renovation"
        description="Explore remodeling tips, siding, decking, painting and windows inspiration from Yellowstone Renovation experts."
        pathname="/blog"
      />
<BlogHeader title="Blog" />

      <main className="blog-main">
        {/* HERO SLIDER */}
        <section className="blog-hero">
          {heroPosts.map((post, i) => {
            const fm = post.frontmatter;
            const category = fm.category || "General";
            return (
              <div
                key={fm.slug}
                className={`blog-slide ${i === current ? "active" : ""}`}
                style={{ backgroundImage: `url(${fm.image})` }}
              >
                <div className="blog-hero-overlay"></div>
                <div className="hero-content">
                  <Link
                    to={`/blog/category/${category.toLowerCase()}/`}
                    className="category-badge badge-green"
                  >
                    {category}
                  </Link>
                  <h2>{fm.title}</h2>
                  <p>{fm.excerpt}</p>
                  <Link
                    to={`/blog/category/${category.toLowerCase()}/`}
                    className="hero-btn"
                  >
                    View {category} Blogs →
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* FILTER BUTTONS */}
        <div className="blog-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <section className="blog-grid">
          {filtered.map((post) => {
            const fm = post.frontmatter;
            const category = fm.category || "General";
            return (
              <article className="blog-card" key={fm.slug}>
                <img src={fm.image} alt={fm.title} />
                <div className="blog-info">
                  <Link
                    to={`/blog/category/${category.toLowerCase()}/`}
                    className="category-badge badge-green"
                  >
                    {category}
                  </Link>
                  <h3>{fm.title}</h3>
                  <p className="meta">
                    By {fm.author || "Yellowstone Team"} • {fm.date}
                  </p>
                  <p>{fm.excerpt}</p>
                  <Link to={`/blog/${fm.slug}/`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "YYYY-MM-DD")
          author
          category
          image
          excerpt
        }
      }
    }
  }
`;
