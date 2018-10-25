import posed from 'react-pose';

const root = { x: 0, y: 0 };

export const PositionedSquareElem = posed.button({
  shrunk: {
    scale: 0.2,
    opacity: 0.3,
    delay: props => props.i * 100,
  },
  normal: {
    scale: 1,
    opacity: 1,
    delay: props => props.i * 50,
  },
});

export const MainElem = posed.div({
  normal: {
    scale: 0.5,
    backgroundColor: '#FFF',
  },
  snapped: {
    scale: 1,
    delay: 100,
    backgroundColor: '#FF7250',
  },
});
