import React from 'react';
import 'index.css';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs, text, boolean, number, knob } from '@storybook/addon-knobs';

import Index from './LogoText';

storiesOf('LogoText', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([{ name: 'dark', value: '#262626', default: true }, { name: 'bright', value: '#fff' }]))
  .add('default', () => <Index secondaryText={text('Subtitle', 'Secondary')} />);
