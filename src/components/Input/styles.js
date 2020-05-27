import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
  width: 100%;
  background: #414141;
  border: 3px solid #414141;
  border-radius: 5px;
  box-shadow: 5px 10px 8px #414141;
  color: #ccc;
  transition: transform 0.2s;
  transition: box-shadow 0.5s;

  &:hover {
    transform: translateX(5px);
    box-shadow: 5px 10px 8px #c57e14;
  }

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 0;
    padding: 0 15px;
    color: #ccc;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const Error = styled.span``;
