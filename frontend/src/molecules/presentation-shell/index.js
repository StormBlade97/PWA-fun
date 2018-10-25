import React from 'react';
import { BubblePositioner, TextPositioner, Centerizer, Bubble, PresentationContentContainer, Warpper } from './styled';
import PropTypes from 'prop-types';
import LogoText from 'atoms/logo-text/LogoText';

export default class PresentationShell extends React.Component {
  render() {
    return (
      <Warpper>
        <BubblePositioner>
          <Bubble
            pose={this.props.expandBubble ? 'expanded' : 'normal'}
            scaleFactor={4}
            delayExit={1200}
            delayEntrance={1200}
          />
        </BubblePositioner>
        <TextPositioner>
          <Centerizer>
            <LogoText secondaryText="What can thy do" />
          </Centerizer>
        </TextPositioner>
        <PresentationContentContainer>{this.props.children}</PresentationContentContainer>
      </Warpper>
    );
  }
}

PresentationShell.defaultProps = {
  expandBubble: false,
};

PresentationShell.propTypes = {
  expandBubble: PropTypes.bool,
};
