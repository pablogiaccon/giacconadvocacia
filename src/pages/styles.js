import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .imageFirst {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 10px 5px #414141;
  }

  .aboutMe {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
    width: 100%;

    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-color: #fff;
      border-radius: 10px;
      border: 6px solid #414141;
      margin: 20px;
      width: 40%;
      height: max-content;
      box-shadow: 5px 10px 5px #414141;

      .title {
        font-size: 25px;
        color: #414141;
        margin: 40px 0 30px 0;
      }

      .text {
        text-align: center;
        margin: 0 50px;
        font-size: 17px;
        width: 90%;
        height: max-content;
        line-height: 20px;
        text-shadow: 3px 5px 9px #414141;
      }

      button {
        background-color: #414141;
        height: 40px;
        width: 180px;
        margin: 20px 0;
        color: #ccc;
        border: 0;
        font-weight: bold;
        font-size: 20px;
        box-shadow: 5px 10px 5px #414141;
        transition: transform 0.2s;
        transition: background-color 0.8s;

        &:hover {
          transform: translateX(5px);
          background: #c57e14;
          color: #414141;
        }
      }
    }

    .imgDescription {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border: 3px solid #fff;
        border-radius: 6px;
        max-width: 800px;
        max-height: 800px;
        box-shadow: 5px 10px 5px #414141;
      }
    }
  }

  .imageSecond {
    margin-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;

    .backgroudImage {
      background-color: #414141;
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 80%;
        border-radius: 15px;
        border: 4px solid #c7c7c7;
        box-shadow: 5px 10px 5px #414141;
      }
    }
  }

  .mission {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 70px;
    align-items: center;
    justify-content: space-around;

    .two {
      transform: translateY(-50px);

      transition: transform 0.4s;

      &:hover {
        transform: translate(5px, -50px);
        box-shadow: 5px 10px 8px #c57e14;
      }
    }
    .one,
    .three {
      transition: transform 0.4s;

      &:hover {
        transform: translateX(5px);
        box-shadow: 5px 10px 8px #c57e14;
      }
    }

    span {
      background-color: #414141;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 5px 10px 8px #414141;
      width: 280px;
      height: 408px;

      .icons {
        margin-top: 10px;
        max-height: 40px;
      }

      .title {
        font-size: 32px;
        color: #ccc;
        margin-top: 10px;
      }

      p + p {
        text-align: center;
        color: #ccc;
        font-size: 15px;
        width: 200px;
        height: 209px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 20px;
      }
    }
    .line {
      box-shadow: 0px 0px;
      height: 75px;
    }
    .linee {
      height: 5px;
      width: 80px;
      background-color: #ccc;
    }
  }

  @media (max-width: 1290px) {
    & .aboutMe .description {
      .title {
        font-size: 17px;
      }
      .home-container .aboutMe .description .text {
        font-size: 14px;
      }
      button {
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 1023px) {
    & {
      .aboutMe {
        flex-direction: column-reverse;

        .description {
          width: 90%;

          .description button {
            /* margin-top: 30px; */
          }
          .imgDescription img {
            width: 90%;
          }
        }
      }
      .imageSecond {
        max-height: 350px;
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 900px) {
    & .mission {
      flex-direction: column;

      .two {
        transform: translateY(0);
      }

      span {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 425px) {
    & .imageSecond {
      max-height: 190px;
      margin-top: 0;
    }
  }
`;
