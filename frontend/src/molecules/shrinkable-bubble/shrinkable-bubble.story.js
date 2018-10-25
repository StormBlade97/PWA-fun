import React from 'react';
import 'index.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Index from './ShrinkableBubble';

storiesOf('ShrinkableBubbleWithOrbit', module)
  .addDecorator(backgrounds([{ name: 'dark', value: '#262626', default: true }, { name: 'bright', value: '#fff' }]))
  .addDecorator(withKnobs)
  .add('default', () => <Index shrunk={boolean('Shrunk', false)} />);
