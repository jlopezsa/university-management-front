import styled from 'styled-components';
import { colors } from '../styles/globalStyles'

export const Input = styled.input`
  background-color: ${colors.backgroundLigth};
  border: 2px solid ${colors.backgroundDark};
  border-radius: 10px;
  box-shadow: none;
  height: 5px;
  margin-bottom: 30px;
  padding: 15px;
  padding-right: 0px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 95%;
  font-size: 18px;
`;

export const Button = styled.button`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  color: ${colors.mainText};
  background-color: ${colors.backgroundLigth};
  border-radius: 6px;
  color: ${colors.mainTextLight};
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 15px;
  padding: 15px 24px;
  width: auto;
  border: 1px solid transparent;
  &:hover {
    background-color: ${colors.backgroundDark};
    transition: all 700ms ease 0s;
    text-decoration: none;
    outline: none;
  }
`;
