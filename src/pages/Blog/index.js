import React, { useState, useMemo } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import PostItem from '../../components/Posts/PostItem';


import {
  Container, ThemePost, SectionThemePost, Title,
} from './styles';

function blog({ data, tag }) {
  const [typePost, setTypePost] = useState('');
  const { edges } = data.allMarkdownRemark;

  const posts = useMemo(() => (
    typePost === '' ? (
      edges.map(({ node }) => (
        <PostItem to={node.fields.slug} key={node.fields.slug} node={node} />
      ))
    ) : (
      edges.map(({ node }) => (
        node.frontmatter.category === typePost && (
          <PostItem to={node.fields.slug} key={node.fields.slug} node={node} />
        )
      ))
    )), [typePost]);

  // console.log(edges);

  return (
    <>
      <SEO />
      <Layout>
        <Container>

          <SectionThemePost>
            <ThemePost onClick={() => setTypePost('Contratos')}>Contratos</ThemePost>
            <ThemePost onClick={() => setTypePost('Incorporações Imobiliárias')}>Incorporações Imobiliárias</ThemePost>
            <ThemePost onClick={() => setTypePost('Contruções')}>Construções</ThemePost>
            <ThemePost onClick={() => setTypePost('Condomínios')}>Condomínios</ThemePost>
            <ThemePost onClick={() => setTypePost('Outros')}>Outros</ThemePost>
            <ThemePost onClick={() => setTypePost('')}>Todos</ThemePost>
          </SectionThemePost>

          <Title>
            ÚLTIMAS POSTAGENS {tag && `COM A TAG ${tag.toUpperCase()}`}
          </Title>
          {console.log(posts)}
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
            category
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
`;
