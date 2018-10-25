import styled from 'styled-components';
import MainButton from './MainButton';
import { PositionedSquareElem } from './animation';

export const Button = styled(PositionedSquareElem)`
  outline: none;
  width: 40px;
  height: 40px;
  display: flex;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  background-color: #ff7250;
  border: none;
  position: absolute;
  justify-content: center;
  align-content: center;
  pointer-events: none;

  & > * {
    width: 16px !important;
    height: 16px;
    color: white;
  }
`;

export const StyledMainButton = styled(MainButton)`
  position: relative;
  background-color: #ff7250;
  width: 56px;
  height: 56px;
  left: 0;
  top: 0;
  outline: none;
  display: flex;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  border: none;
  justify-content: center;
  align-items: center;
  z-index: 100;

  & > * {
    color: #fff;
  }
`;

export const Grouper = styled.div`
  position: relative;
  display: flex;
  z-index: 10;
`;
