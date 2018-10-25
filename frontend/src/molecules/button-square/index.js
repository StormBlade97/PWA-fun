import React from 'react';
import PropTypes from 'prop-types';
import { Grouper, Button, StyledMainButton } from './styled';
import { pointFromVector } from '@popmotion/popcorn';

export default class ButtonGroup extends React.Component {
  state = {
    selected: null,
    mainButtonHeld: false,
  };
  distance = 100;

  getAngleStep = numberOfElem => 360 / numberOfElem;
  getCoordinateSteps = elemArr => {
    const angleStep = this.getAngleStep(elemArr.length);
    return elemArr.map((el, i) => {
      return pointFromVector({ x: 0, y: 0 }, angleStep * i, this.distance);
    });
  };

  handleSnapIn = index => {
    this.setState({ selected: index });
    if (window.navigator.vibrate) window.navigator.vibrate(500);
  };
  handleSnapOut = index => {
    this.setState({ selected: false });
    if (window.navigator.vibrate) window.navigator.vibrate(100);
  };
  handleSubmission = () => {
    if (this.state.selected !== false) this.props.onSelect(this.state.selected);
    else this.setState({ mainButtonHeld: false });
  };
  render() {
    const childArr = React.Children.toArray(this.props.children);
    const coordinates = this.getCoordinateSteps(childArr);
    return (
      <Grouper>
        {childArr.map((elem, i, arr) => (
          <Button
            pose={this.state.mainButtonHeld ? 'shrunk' : 'normal'}
            key={i}
            i={i}
            style={{
              left: `calc(${coordinates[i].x + 8}px)`,
              top: `calc(${coordinates[i].y + 8}px)`,
            }}
          >
            {this.state.mainButtonHeld || elem}
          </Button>
        ))}
        <StyledMainButton
          hookCoordinates={coordinates}
          onSelect={() => this.setState({ mainButtonHeld: true })}
          onRelease={this.handleSubmission}
          onSnapIn={this.handleSnapIn}
          onSnapOut={this.handleSnapOut}
          trackRange={70}
        >
          {this.state.selected !== false && childArr[this.state.selected]}
        </StyledMainButton>
      </Grouper>
    );
  }
}
ButtonGroup.defaultProps = {
  data: [],
  onSelect: i => console.log('Selected the slide number #', i),
};
ButtonGroup.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
};
