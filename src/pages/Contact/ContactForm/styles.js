import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .inputgroup {
      display: flex;
      div + div {
        margin-left: 15px;
      }

      & + .inputgroup {
        margin-top: 20px;
      }
    }

    textarea {
      height: 200px;
      width: 650px;
      max-width: 650px;
      max-height: 200px;
      background: #414141;
      border: 3px solid #414141;
      border-radius: 5px;
      box-shadow: 5px 10px 8px #414141;
      margin: 20px auto;
      padding-top: 15px;
      padding-left: 15px;
      color: #ccc;
      transition: transform 0.2s;
      transition: box-shadow 0.5s;

      &:hover {
        transform: translateX(5px);
        box-shadow: 5px 10px 8px #c57e14;
      }

      &::placeholder {
        color: #ccc;
      }
    }

    button {
      width: 70%;
      height: 56px;
      background: #414141;
      box-shadow: 5px 10px 8px #414141;
      border: 0;
      margin-top: 25px;

      color: #ccc;
      font-size: 25px;
      font-weight: bold;
      transition: transform 0.8s;
      transition: background-color 0.8s;

      &:hover {
        transform: translateX(5px);
        background: #c57e14;
        color: #414141;
      }
    }

    @media (max-width: 730px) {
      & .inputgroup {
        display: flex;
        flex-direction: column;
        div + div {
          margin: 0;
          margin-top: 15px;
        }
      }
      textarea {
        max-width: 300px;
      }

      button {
        width: 90%;
      }
    }
  }
`;

export const Title = styled.span`
  font-size: 50px;
  color: #414141;
  text-shadow: 5px 10px 8px #414141;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;

  div {
    border-bottom: 3px solid #414141;
    width: 120%;
    box-shadow: 5px 10px 8px #414141;
  }

  @media (max-width: 490px) {
    font-size: 30px;
  }
`;
