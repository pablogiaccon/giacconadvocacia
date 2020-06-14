import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 20px 20px;
  margin-bottom: 30px;

  background: #fff;
  box-shadow: 5px 10px 8px #414141;

  width: 80%;
  max-height: max-content;

  cursor: pointer;

  transition: transform 0.4s;

  &:hover {
    transform: translateX(10px);
    box-shadow: 5px 10px 8px #c57e14;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;


    .image-post {
      padding: 0 16px;
      width: 100%;
      max-width: 500px;
      max-height: 300px;
      vertical-align: middle;
    }

    .description {
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      color: #414141;

      .title {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 25px;
        text-align: center;
      }

      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 4px 12px;

        font-size: 14px;
        margin-bottom: 12px;
        span + span {
          margin-left: 12px;
        }
      }

      .text {
        font-size: 20px;
        text-align: center;
        max-width: 80%;
      }
    }
  }

  button {
    align-self: flex-end;
    margin-right: 40px;
    height: 50px;
    width: 180px;

    border: 0;
    background: #414141;
    color: #ccc;

    font-size: 20px;
    font-weight: bold;

    box-shadow: 5px 10px 8px #414141;

    transition: opacity 0.2s;

    &:hover {
      opacity: 70%;
    }
  }

  @media (max-width: 980px) {
    & .content .description {
      margin-bottom: 20px;
      .title {
        font-size: 20px;
      }
      .text {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 860px) {
    & .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .description {
        margin: 20px 0 20px;
      }
    }

    button {
      margin: 0;
    }
  }
`;
