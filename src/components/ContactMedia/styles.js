import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg {
    margin: 0 10px;
    padding: 2px;
    border-radius: 7px;
    transition: box-shadow transform 0.3s;

    &:hover {
      box-shadow: 0 0 5px #c57e14;
      transform: translateY(2px);
    }
  }
`;
