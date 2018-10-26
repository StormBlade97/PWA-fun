import React from 'react';
import 'index.css';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs, text, boolean, number, knob } from '@storybook/addon-knobs';
import Index from './index';
import styled from 'styled-components';

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
`;

storiesOf('intro', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([{ name: 'dark', value: '#262626', default: true }, { name: 'bright', value: '#fff' }]))
  .add('default', () => (
    <FullScreen>
      <Index waitDuration={number('Wait duration', 1000)} />
    </FullScreen>
  ));
