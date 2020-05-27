import styled from 'styled-components';

export const Container = styled.div`
  color: #414141;
`;

export const AboutOffice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;

  img {
    width: 50%;
    opacity: 70%;
    border-radius: 10px;
    box-shadow: 5px 5px 8px #414141;
  }

  p {
    font-size: 18px;
    line-height: 25px;
    font-weight: bold;
    text-align: center;
    padding: 0 25px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    img {
      width: 70%;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 90%;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const OccupationText = styled.div`
  margin: 100px 0 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    height: 3px;
    background: #414141;
    width: 80%;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    max-width: 70%;
    text-align: center;
  }

  .secundLine {
    display: none;
  }

  @media (max-width: 1000px) {
    margin: 50px 0 25px 0;

    .secundLine {
      display: block;
      margin-top: 20px;
    }
  }
`;

export const OccupationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px;
  margin: 0 50px;

  img {
    width: 90%;
    padding: 15px;
  }

  p {
    line-height: 25px;
    max-width: 70%;
    text-align: center;
    padding: 15px;

    @media (max-width: 1200px) {
      line-height: 20px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin: 0 10px;
    img {
      width: 95%;
      padding: 5px;
    }

    p {
      padding: 15px 5px;
    }
  }

  @media (max-width: 450px) {
    /* width: 90%; */
  }
`;
