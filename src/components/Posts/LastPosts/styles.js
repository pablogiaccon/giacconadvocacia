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
