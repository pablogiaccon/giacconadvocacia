import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
`;
export const WhereWeAre = styled.div`
  background: #414141;
  padding: 25px;
  font-size: 25px;
  color: #ccc;
  border-radius: 10px;
  box-shadow: 8px 8px 8px #414141;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 15px;
  }
  > div {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 70%;
    margin-bottom: 25px;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FindUs = styled.div`
  background: #414141;
  margin-left: 70px;
  padding: 30px 70px;
  color: #ccc;
  border-radius: 10px;
  box-shadow: 8px 8px 8px #414141;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;

    margin-top: 25px;

    cursor: pointer;

    h3 {
      margin-left: 15px;
      color: #ccc;
    }

    svg {
      margin: 0 10px;
      padding: 2px;
      width: 45px;
      border-radius: 7px;
      transition: box-shadow transform 0.3s;
    }

    &:hover {
      svg {
        box-shadow: 0 0 5px #c57e14;
        transform: translateY(2px);
      }
    }
  }

  @media (max-width: 900px) {
    margin: 0;
  }

  @media (max-width: 600px) {
    padding: 10px;
    h1{
      font-size: 20px;
    }
  }
`;

export const MapContainer = styled.div`
  width: 300px;
  height: 300px;
`;
