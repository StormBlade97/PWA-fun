import React from 'react';
import 'index.css';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs, text, boolean, number, knob } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Index from './index';
import { StyledMainButton } from './styled';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faMap, faStar, faHome, faAngry } from '@fortawesome/free-solid-svg-icons';

library.add(faGhost);
library.add(faMap);
library.add(faStar);
library.add(faAngry);
library.add(faHome);

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('Button square', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([{ name: 'dark', value: '#262626', default: true }, { name: 'bright', value: '#fff' }]))
  .add('draggable main button', () => (
    <FullScreen>
      <StyledMainButton>
        <FontAwesomeIcon key="1" icon="star" size="lg" />
      </StyledMainButton>
    </FullScreen>
  ))
  .add('snap to nearby button', () => (
    <FullScreen>
      <StyledMainButton
        hookCoordinates={[{ x: 0, y: -200 }, { x: 0, y: 200 }, { x: -200, y: 0 }, { x: 200, y: 0 }]}
        onSelect={action('button-tapped')}
        onSnapIn={action('button-snap-in')}
        onSnapOut={action('button-snap-out')}
        trackRange={number('trackRange', 70)}
      >
        <FontAwesomeIcon key="1" icon="star" size="lg" />
      </StyledMainButton>
    </FullScreen>
  ))
  .add('default', () => (
    <FullScreen>
      <Index>
        <FontAwesomeIcon key="1" icon="ghost" size="lg" />
        <FontAwesomeIcon key="2" icon="star" size="lg" />
        <FontAwesomeIcon key="3" icon="map" size="lg" />
        <FontAwesomeIcon key="4" icon="angry" size="lg" />
      </Index>
    </FullScreen>
  ));
