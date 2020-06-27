import React from 'react';
import { graphql } from 'gatsby';

import Blog from '../pages/Blog';

export default ({ data, pathContext }) => {
  const { tag } = pathContext;
  return (
    <Blog data={data} tag={tag} />
  );
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            category
            date(formatString: "DD/MM/YYYY")
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
