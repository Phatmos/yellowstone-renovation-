const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            category
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const posts = result.data.allMarkdownRemark.nodes;

  // ✅ Create blog post pages
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        slug: post.frontmatter.slug,
        category: post.frontmatter.category,
      },
    });
  });

  // ✅ Create category pages
  const categories = Array.from(
    new Set(posts.map((p) => p.frontmatter.category))
  );

  categories.forEach((category) => {
    createPage({
      path: `/blog/category/${category.toLowerCase()}/`,
      component: path.resolve(`./src/templates/category-page.js`),
      context: { category },
    });
  });
};
