import React from 'react';
import 'index.css';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import Index from './index';
import { withKnobs, text, boolean, number, knob } from '@storybook/addon-knobs';

import styled from 'styled-components';
import { PoseGroup } from 'react-pose';

const FullScreenCenter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Demo extends React.Component {
  render() {
    return (
      <PoseGroup animateOnMount>
        {this.props.display && (
          <Index key="k" i={5}>
            <div style={{ backgroundColor: '#FF7250', width: '20rem', height: '20rem' }} />
          </Index>
        )}
      </PoseGroup>
    );
  }
}

storiesOf('Flicker entrance', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([{ name: 'dark', value: '#262626', default: true }, { name: 'bright', value: '#fff' }]))
  .add('default', () => (
    <FullScreenCenter>
      <Demo display={boolean('Show', true)} />
    </FullScreenCenter>
  ));
