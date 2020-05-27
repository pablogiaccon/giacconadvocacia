import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 50px auto;
`;

export const Title = styled.span`
  font-size: 50px;
  color: #414141;
  text-shadow: 5px 10px 8px #414141;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    border-bottom: 3px solid #414141;
    width: 120%;
    box-shadow: 5px 10px 8px #414141;
  }

  @media (max-width: 670px) {
    font-size: 30px;
  }

  @media (max-width: 410px) {
    font-size: 20px;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 20px 20px;
  margin-bottom: 30px;

  background: #fff;
  box-shadow: 5px 10px 8px #414141;

  max-width: 80%;
  max-height: max-content;

  cursor: pointer;

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
    box-shadow: 5px 10px 8px #c57e14;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    img {
      flex: 1;
      width: 90%;
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;

      color: #414141;

      .title {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 25px;
        text-align: center;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .description {
        margin-bottom: 20px;
      }
    }

    button {
      margin: 0;
    }
  }
`;
