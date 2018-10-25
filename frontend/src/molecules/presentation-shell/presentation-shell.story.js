import React from 'react';
import 'index.css';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs, text, boolean, number, knob } from '@storybook/addon-knobs';
import Index from './index';
import styled from 'styled-components';
import Flicker from 'atoms/flicker-entrance';

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
`;

storiesOf('Presentation Shell', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([{ name: 'dark', value: '#262626', default: true }, { name: 'bright', value: '#fff' }]))
  .add('default', () => (
    <FullScreen>
      <Index expandBubble={boolean('Expand bubble', false)}>
        <Flicker initDelay={300} i={0} key={0}>
          <h1 className="title" style={{ margin: '2rem' }}>
            "The network never bother me anymore"
          </h1>
        </Flicker>
        <Flicker initDelay={300} i={1} key={1}>
          <span>
            PWA uses Service Worker to cache static assets such as scripts, image, and markups When you navigate to PWA,
            browser don’t have to access network to fetch the app, it’s already there in the cache. Try turning your
            network off, and then access this page.
          </span>
        </Flicker>
        <Flicker initDelay={300} i={2} key={2}>
          <span className="secondary-body">You are...</span>
        </Flicker>
        <Flicker initDelay={300} i={3} key={3}>
          <span className="button-text">OFFLINE</span>
        </Flicker>
      </Index>
    </FullScreen>
  ));
