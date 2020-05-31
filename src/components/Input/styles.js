import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 56px;
  width: 100%;
  background: #414141;
  border: 3px solid #414141;
  border-radius: 5px;
  box-shadow: 5px 10px 8px #414141;
  color: #ccc;

  ${(props) => props.isFocused && css`
    border-color: #c57e14;
  `}

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
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled.span``;
