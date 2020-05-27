import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #fff;
  margin: 30px 0;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    background-color: #414141;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 150px;

    box-shadow: 5px 10px 8px #414141;

    .address {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-left: 5px;
      padding-right: 35px;
      flex: 1;

      .title {
        color: #ccc;
        font-size: 25px;
        margin-bottom: 10px;
        font-weight: bold;
      }

      .addressOffice {
        color: #ccc;
        flex-wrap: wrap;
        max-width: 300px;
        text-align: center;
        font-size: 14px;
      }
    }

    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-right: 70px;

      .contactMedia {
        margin-bottom: 20px;
      }
      span {
        color: #ccc;
        font-size: 15px;
      }
    }
  }

  @media (max-width: 800px) {
    & {
      height: 250px;

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: max-content;
        padding: 20px;

        .address {
          margin: 0;
          padding: 0;
          .title {
            font-size: 17px;
          }
          .addressOffice {
            font-size: 12px;
          }
        }

        .contact {
          margin: 0;
          padding: 0;
          margin-top: 20px;
        }
      }
    }

    footer .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: max-content;
      padding: 20px;
    }

    footer .content .address .title {
      font-size: 17px;
    }

    footer .content .address .addressOffice {
      font-size: 12px;
    }

    footer .content .address {
      margin: 0;
      padding: 0;
    }
    footer .content .contact {
      margin: 0;
      padding: 0;
      margin-top: 20px;
    }
  }

  @media (max-width: 375px) {
    & .content .address {
      .title {
        font-size: 15px;
      }

      .addressOffice {
        font-size: 10px;
        padding: 5px 5px;
      }
    }
  }
`;
