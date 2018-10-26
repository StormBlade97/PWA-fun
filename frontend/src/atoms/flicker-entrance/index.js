import posed from 'react-pose';
import styled from 'styled-components';

const FlickerFadeIn = posed.div({
  enter: {
    opacity: 1,
    y: -20,
    delay: ({ i, initDelay }) => initDelay + i * 150,

    transition: {
      opacity: {
        type: 'tween',
        ease: 'easeIn',
        yoyo: 4,
        duration: 100,
      },
      y: {
        duration: 1000,
      },
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    delay: ({ i }) => i * 100,

    transition: {
      opacity: {
        type: 'tween',
        ease: 'easeOut',
        yoyo: 6,
        duration: 100,
      },
      y: {
        duration: 1000,
      },
    },
  },
});

export default styled(FlickerFadeIn)`
  display: flex;
`;
