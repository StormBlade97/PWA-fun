import React from 'react';
import { PoseGroup } from 'react-pose';
import PropTypes from 'prop-types';

export default class MountAnimation extends React.Component {
  render() {
    return <PoseGroup animateOnMount>{this.props.shouldRender && this.props.children}</PoseGroup>;
  }
}

MountAnimation.defaultProps = {
  shouldRender: false,
};

MountAnimation.propTypes = {
  shouldRender: PropTypes.bool,
};
