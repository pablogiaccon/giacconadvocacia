import React from 'react';
import Img from 'gatsby-image';

import { PostContainer } from './styles';

const PostItem = ({ node }) => (
  <PostContainer to={node.fields.slug} key={node.fields.slug}>
    <div className="content">
      {node.frontmatter.featuredImage
                  && (<Img className="image-post" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                  )}
      <div className="description">
        <p className="title">{node.frontmatter.title}</p>
        <div className="info">
          <span>{node.frontmatter.date}</span>
          <span>
            {node.timeToRead}
            {' '}
            min de leitura
          </span>
        </div>
        <p className="text">{node.frontmatter.description}</p>
      </div>
    </div>
    <button type="button">Saiba mais</button>
  </PostContainer>
);

export default PostItem;
