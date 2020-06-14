import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 80%;
  margin: 0 auto;
  box-shadow: 2px 2px 3px #414141;
  background: #fff;
`;

export const Content = styled.div`

  max-width: 700px;
  width: 100%;
  padding: 15px;

  .tags{
    margin: 24px 0 32px;
    display: flex;
    flex-wrap: wrap;
    a {
      display: flex;
      align-items: center;
      color: #414141;
      margin-right: 12px;
      margin-top: 12px;
    }
  }

  h1 {
    color: #414141;
    margin: 8px 0;
    line-height: 1.2;
  }

  .description {
    color: #8D8D8D;
  }

  .info {
    margin-top: 24px;
    display: flex;
    color: #8D8D8D;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
  }

  .image-post {
    margin: 24px 0 32px;

    img {
      width: 100%;
    }
  }

  @media(max-width: 900px){
    padding: 0 24px;
  }

  @media(max-width: 700px){
    h1 {
      font-size: 30px;
      line-height: 1;
    }
  }

  @media(max-width: 500px){
    h1 {
      font-size: 20px;
      line-height: 1;
    }

    .description {
      font-size: 12px;
    }
  }
`;

export const Tag = styled.li`
  float: left;
  list-style: none;
  background: #EEEEEE;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 14px;
  transition: 0.5s;

  &:hover{
    background: ${shade(0.1, '#EEEEEE')};
  }

  @media(max-width: 500px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;


export const Text = styled.div`

  font-size: 20px;
  font-family: Georgia,Times New Roman,Times,serif;
  line-height: 1.6;
  letter-spacing: .1px;
  color: #414141;

  p {
    text-align: justify
  }

  h1, h2, h3, h4, p, blockquote{
    margin-bottom: 32px;
  }

  h1, h2, h3, h4 {
    text-align: start;
  }

  p + p {
    text-indent: 2em;
  }

  blockquote {
    border-left: 3px solid #414141;
    padding-left: 12px;
  }

  a {
    color: #414141;
    text-decoration: initial;
    word-wrap: break-word;
  }

  div {
    p + p {
      text-indent: 0;
    }
  }

  @media(max-width: 600px){

    font-size: 18px;

    h3 {
      font-size: 20px;
    }
  }

  @media(max-width: 500px){

    font-size: 12px;

    h3 {
      font-size: 16px;
    }
  }
`;
