import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const PressableButton = posed.div({
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '3px 3px 12px rgba(0,0,0, .3)',
  },
  press: {
    scale: 0.95,
    boxShadow: '0px 0px 0px rgba(0,0,0, 0)',
  },
});

const StyledPressableButton = styled(PressableButton)`
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: white;
  color: #ff7250;
`;

const Button = ({ children, ...rest }) => (
  <StyledPressableButton pose="init" {...rest}>
    <span className="button-text">{children}</span>
  </StyledPressableButton>
);

export default Button;

export const RoundedButton = styled(Button)`
  outline: none;
  width: 42px;
  height: 42px;
  display: flex;
  border-radius: 50%;
  background-color: #ff7250;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;

  & > * {
    width: 20px !important;
    height: 20px;
    color: white;
  }
`;
