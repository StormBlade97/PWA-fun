import React from 'react';
import posed from 'react-pose';

export const ShrinkableWrapper = posed.div({
  initial: {
    width: '200vh',
    height: '200vh',
    flip: true,
  },
  shrunk: {
    width: '25rem',
    height: '25rem',
    flip: true,
    transition: {
      duration: 1000,
    },
  },
});
