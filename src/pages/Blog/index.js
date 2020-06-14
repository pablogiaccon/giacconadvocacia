import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import PostItem from '../../components/Posts/PostItem';


import { Container } from './styles';

function blog({ data }) {
  const { edges } = data.allMarkdownRemark;

  const posts = (
    edges.map(({ node }) => (
      <PostItem to={node.fields.slug} key={node.fields.slug} node={node} />
    ))
  );

  return (
    <>
      <SEO />
      <Layout>
        <Container>
          {posts}
        </Container>
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
