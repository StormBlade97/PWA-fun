import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ShrinkableWrapper } from './animations';

const rotation = keyframes`
  from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
  }
`;
const rotationSkew = keyframes`
  from {
		transform: rotate(0deg) translate(18%, 10%);
	}
	to {
		transform: rotate(359deg) translate(18%, 10%);
  }
`;

export const PositionedShrinkableWrapper = styled(ShrinkableWrapper)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledBubble = styled.div`
  background-color: #ff7250;
  border-radius: 50%;
  width: 70%;
  height: 70%;
`;

export const StyledOrbit = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  border-radius: 50%;
  border: 1px white solid;
  animation: 2s ${rotation} linear infinite;

  & > div {
    border-radius: 50%;
    transform: translateY(-50%);
    margin: auto;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
  }
`;

export const StyledDecoration = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  left: -50%;
  top: -50%;
  z-index: -2;
  border-radius: 50%;
  background-color: #ff7250;
  opacity: 0.27;
  animation: 10s ${rotationSkew} linear infinite;
`;
