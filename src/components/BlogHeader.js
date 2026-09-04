import React from "react";
import { Link } from "gatsby";
import "../styles/BlogHeader.css";

export default function BlogHeader({ title = "Blog" }) {
  return (
    <section className="blog-header">
      <div className="blog-header-container">
        <div className="blog-breadcrumbs">
          <Link to="/" className="breadcrumb-home">
            Home
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{title}</span>
        </div>

        <h1 className="blog-header-title">{title}</h1>
        <div className="blog-header-line"></div>
      </div>
    </section>
  );
}
