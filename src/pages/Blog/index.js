import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Posts from '../../components/Posts';
import SEO from '../../components/SEO';

// import { Container } from './styles';

function blog({ data }) {
  return (
    <>
      <SEO />
      <Layout>
        <Posts data={data} />
      </Layout>
    </>
  );
}

export default blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
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
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
