import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 15px;

  img {
    width: 50%;
    box-shadow: 5px 10px 5px #414141;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;

    img {
      width: 70%;
      margin-bottom: 15px;
    }
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #414141;

  padding: 15px;
`;
export const Title = styled.h2`
  margin-bottom: 10px;
`;
export const Text = styled.p`
  line-height: 25px;
  padding: 0 15px;
`;
