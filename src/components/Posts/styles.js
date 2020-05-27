import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 15px;
  width: 100%;

  .post {
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: .50rem;
    background-color: #FFFFFF;

    .post-title {
      color: #000000;
      text-decoration: none;
    }

    .post-title h2 {
      margin-bottom: 5px;
      font-size: 22px;
      font-weight: bold;
    }

    .post-date {
      margin-bottom: 5px;
    }
  }
`;
