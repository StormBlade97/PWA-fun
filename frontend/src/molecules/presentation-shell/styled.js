import styled from 'styled-components';
import { AnimatableLandingBubble } from './animation';

export const BubblePositioner = styled.div`
  position: fixed;
  z-index: -1;
  left: -15%;
  top: -70px;
`;

export const TextPositioner = styled.div`
  position: absolute;
  z-index: 0;
  left: 24px;
  top: 24px;
`;
export const Centerizer = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  & *  {
    flex-shrink: 0;
  }
`;

export const Bubble = styled(AnimatableLandingBubble)`
  background-color: #ff7250;
  border-radius: 50%;
  width: 18rem;
  height: 18rem;
`;

export const PresentationContentContainer = styled.div`
  margin-top: 7rem;
  padding: 2rem;
`;

export const Warpper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
