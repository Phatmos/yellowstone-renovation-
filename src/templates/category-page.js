import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogHeader from "../components/BlogHeader";
import "../styles/BlogMain.css";
import { Helmet } from "react-helmet";

export default function CategoryPage({ data, pageContext }) {
  const posts = data.allMarkdownRemark.nodes;
  const { category } = pageContext;

  return (
    <Layout>
      <SEO
        title={`${category} Blogs — Yellowstone Renovation`}
        description={`Explore expert ${category.toLowerCase()} tips and inspiration from Yellowstone Renovation.`}
        pathname={`/blog/category/${category.toLowerCase()}`}
      />
      <BlogHeader title={`${category} Blogs`} />

      <main className="blog-main">
        <section className="blog-grid">
          {posts.map((post) => {
            const fm = post.frontmatter;
            return (
              <article className="blog-card" key={fm.slug}>
                <img src={fm.image} alt={fm.title} />
                <div className="blog-info">
                  <span className="category-badge badge-green">{fm.category}</span>
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
  query ($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { frontmatter: { date: DESC } }
    ) {
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
