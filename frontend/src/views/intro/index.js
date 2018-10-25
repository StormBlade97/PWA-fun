import React from 'react';
import PropTypes from 'prop-types';
import ShrinkableBubble from 'molecules/shrinkable-bubble/ShrinkableBubble.jsx';
import LogoText from 'atoms/logo-text/LogoText.jsx';
import { FullScreenCenterizer, HintTextContainer } from './styled';
import { DelayAnimationChildren, ImpressiveEntrance } from './animation';
import { PoseGroup } from 'react-pose';

export default class IntroView extends React.Component {
  state = {
    shrunk: false,
  };
  componentDidMount() {
    this.timeoutRef = window.setTimeout(() => {
      this.setState({ shrunk: true });
    }, this.props.waitDuration);
  }
  handleNextRequest = e => {
    e.preventDefault();
    this.props.onNext();
  };
  render() {
    return (
      <FullScreenCenterizer onMouseDown={this.handleNextRequest} onTouchEnd={this.handleNextRequest}>
        <ShrinkableBubble shrunk={this.state.shrunk}>
          <FullScreenCenterizer>
            <DelayAnimationChildren value={300}>
              <PoseGroup animateOnMount>
                {this.state.shrunk && (
                  <ImpressiveEntrance key="logo-text">
                    <LogoText secondaryText="What can thy do" />
                  </ImpressiveEntrance>
                )}
              </PoseGroup>
            </DelayAnimationChildren>
          </FullScreenCenterizer>
        </ShrinkableBubble>
        <HintTextContainer pose={this.state.shrunk ? 'pulsate' : 'init'}>
          <span className="secondary-body">Touch to interact</span>
        </HintTextContainer>
      </FullScreenCenterizer>
    );
  }
}

IntroView.defaultProps = {
  waitDuration: 1000,
  onNext: () => console.log('Request on next in component <Intro/>'),
};

IntroView.propTypes = {
  waitDuration: PropTypes.number,
  onNext: PropTypes.func,
};
