import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  width: max-content;
  background: #414141;
  border: 3px solid #414141;
  border-radius: 5px;
  box-shadow: 5px 10px 8px #414141;
  color: #ccc;

  ${(props) => props.isFocused && css`
  border-color: #c57e14;
  `}

  textarea {
    height: 200px;
    width: 100%;
    max-width: 450px;
    min-width: 450px;
    max-height: 200px;
    min-height: 50px;
    background: #414141;
    border: 3px solid #414141;
    border-radius: 5px;
    box-shadow: 5px 10px 8px #414141;
    padding-top: 15px;
    padding-left: 15px;
    color: #ccc;

    &::placeholder {
      color: #ccc;
    }
  }

  @media(max-width: 500px){
    textarea {
      max-width: 300px;
      min-width: 300px;
    }
  }

`;

export const Error = styled.span``;
