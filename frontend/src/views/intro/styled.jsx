import styled from 'styled-components';
import { Pulsate } from './animation';

export const FullScreenCenterizer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  & *  {
    flex-shrink: 0;
  }
`;

export const HintTextContainer = styled(Pulsate)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`;
