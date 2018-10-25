import React from 'react';
import { PositionedShrinkableWrapper, StyledBubble, StyledOrbit, StyledDecoration } from './styled';
import PropTypes from 'prop-types';

export default class ShrinkableBubble extends React.Component {
  render() {
    const { shrunk, children } = this.props;
    return (
      <PositionedShrinkableWrapper pose={shrunk ? 'shrunk' : 'initial'}>
        <StyledDecoration />
        <StyledOrbit>
          <div />
        </StyledOrbit>
        <StyledBubble>{children}</StyledBubble>
      </PositionedShrinkableWrapper>
    );
  }
}

ShrinkableBubble.defaultProps = {
  shrunk: false,
};
ShrinkableBubble.propTypes = {
  shrunk: PropTypes.bool,
  children: PropTypes.children,
};
