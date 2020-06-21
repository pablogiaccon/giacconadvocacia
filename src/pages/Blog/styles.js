import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const SectionThemePost = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  margin: 0 auto 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid #414141;
`;

export const ThemePost = styled.div`
  width: 200px;
  height: 100px;
  background: #fff;
  cursor: pointer;

  box-shadow: 3px 3px 5px #414141;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  color: #414141;
  text-align: center;

  transition: 0.4s;

  &:hover {
    background: ${transparentize(0.9, '#414141')};
  }
`;

export const Title = styled.span`
  font-size: 50px;
  color: #414141;
  text-shadow: 5px 10px 8px #414141;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 670px) {
    font-size: 30px;
  }

  @media (max-width: 410px) {
    font-size: 20px;
  }
`;
