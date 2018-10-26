import React from 'react';
import { BubblePositioner, TextPositioner, Centerizer, Bubble, PresentationContentContainer, Warpper } from './styled';
import PropTypes from 'prop-types';
import LogoText from 'atoms/logo-text/LogoText';
import Flicker from 'atoms/flicker-entrance';
import MountAnimation from 'atoms/mount-animation';

export default class PresentationShell extends React.Component {
  render() {
    return (
      <Warpper>
        <MountAnimation shouldRender>
          <Flicker key="bubble" initialDelay={1000} i={1}>
            <BubblePositioner>
              <Bubble
                pose={this.props.expandBubble ? 'expanded' : 'normal'}
                scaleFactor={5}
                delayExit={1200}
                delayEntrance={1200}
              />
            </BubblePositioner>
          </Flicker>
          <Flicker key="text" initialDelay={1000} i={2}>
            <TextPositioner>
              <Centerizer>
                <LogoText secondaryText={this.props.secondaryText} />
              </Centerizer>
            </TextPositioner>
          </Flicker>
        </MountAnimation>
        <PresentationContentContainer>{this.props.children}</PresentationContentContainer>
      </Warpper>
    );
  }
}

PresentationShell.defaultProps = {
  expandBubble: false,
  secondaryText: 'What can thy do',
};

PresentationShell.propTypes = {
  expandBubble: PropTypes.bool,
  secondaryText: PropTypes.string,
};
