import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import {
  Container, Tag, Content, Text,
} from './post-styles';

export default (props) => {
  const { data } = props;
  const { fields, timeToRead, html } = data.markdownRemark;
  const { slug } = fields;
  const {
    title, tags, date, description, featuredImage,
  } = data.markdownRemark.frontmatter;

  console.log(slug);
  return (
    <Layout>
      <Container>
        <SEO title={title} url={slug} description={description} article />


        <Content>
          <ul className="tags">
            {tags.map((tag) => (
              <Link key={tag} to={`/tag/${_.kebabCase(tag)}`}>
                <Tag>
                  {tag}
                </Tag>
              </Link>
            ))}
          </ul>

          <h1>{title}</h1>

          <p className="description">
            {description}
          </p>

          <div className="info">
            <span>Publicado em: {date}</span>
            <span>
              {timeToRead} min de leitura
            </span>
          </div>

          {featuredImage && (
            <Img
              className="image-post"
              fluid={featuredImage.childImageSharp.fluid}
            />
          )}

          <Text>
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </Text>
        </Content>

      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
