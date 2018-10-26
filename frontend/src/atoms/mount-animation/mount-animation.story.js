import React from 'react';
import 'index.css';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import Index from './index';
import Flicker from 'atoms/flicker-entrance';
import { withKnobs, text, boolean, number, knob } from '@storybook/addon-knobs';
import styled from 'styled-components';

const FullScreenCenter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const fakeData = ['hello', 'this', 'is', 'a', 'message'];

storiesOf('Mounting animation', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([{ name: 'dark', value: '#262626', default: true }, { name: 'bright', value: '#fff' }]))
  .add('default', () => (
    <FullScreenCenter>
      <Index shouldRender={boolean('Should render', false)}>
        {fakeData.map((elem, i) => (
          <Flicker initDelay={number('Delay', 1000)} key={i + 'a-s'} i={i}>
            <h1 className="title" style={{ color: 'orange' }}>
              {elem}
            </h1>
          </Flicker>
        ))}
      </Index>
    </FullScreenCenter>
  ));
