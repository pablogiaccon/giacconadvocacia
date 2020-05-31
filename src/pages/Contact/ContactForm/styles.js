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
