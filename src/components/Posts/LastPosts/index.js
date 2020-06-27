import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Container, Title } from './styles';

import PostItem from '../PostItem';

const LastPosts = () => (
  <StaticQuery
    query={graphql`
  query LastPostsQuery {
    allMarkdownRemark(
      limit: 5
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
              featuredimage {
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
    `}
    render={(data) => {
      const { edges } = data.allMarkdownRemark;
      return (
        <Container>
          <Title>
            ÚLTIMAS POSTAGENS
            <div />
          </Title>

          {edges.map(({ node }) => (
            <PostItem to={node.fields.slug} key={node.fields.slug} node={node} />
          ))}

        </Container>
      );
    }}
  />
);

export default LastPosts;
