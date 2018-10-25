import posed from 'react-pose';

export const AnimatableLandingBubble = posed.div({
  normal: {
    scale: 1,
    delay: ({ delayExit }) => delayExit,
  },
  expanded: {
    scale: props => props.scaleFactor || 3,
    delay: ({ delayEntrance }) => delayEntrance,

    transition: {
      type: 'tween',
      easing: 'easeOut',
      duration: 500,
    },
  },
});
