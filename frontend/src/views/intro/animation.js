import posed from 'react-pose';

export const DelayAnimationChildren = posed.div({
  enter: {
    staggerChildren: 500,
  },
  exit: {
    // nothing
    staggerChildren: 500,
  },
});

export const ImpressiveEntrance = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    transition: {
      duration: 1500,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
  },
});

export const Pulsate = posed.div({
  init: {
    opacity: 0,
  },
  pulsate: {
    delay: 2000,
    opacity: 0.5,
    transition: {
      type: 'spring',
      stiffness: 10,
      damping: 0,
    },
  },
});
