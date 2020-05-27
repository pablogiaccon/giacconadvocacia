import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg {
    margin: 0 10px;
    border-radius: 7px;
    transition: box-shadow transform 0.3s;

    &:hover {
      box-shadow: 6px 4px 5px #ffa500;
      transform: translateY(2px);
    }
  }
`;
