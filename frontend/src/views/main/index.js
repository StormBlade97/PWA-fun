import React from 'react';
import PresentationShell from 'molecules/presentation-shell';
import ButtonPanel from 'molecules/button-square';
import OfflineSlide from './offline-slide';
import Installability from './installability';
import PushNotification from './push-notification';
import Whatelse from './what-else';
import Flicker from 'atoms/flicker-entrance';
import MountAnimation from 'atoms/mount-animation';
import { RoundedButton } from 'atoms/button';
import { HomeButtonAligner } from './styled';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWifi, faBell, faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faWifi);
library.add(faStar);
library.add(faBell);
library.add(faDownload);
library.add(faArrowLeft);

const SLIDE_ARR = ['installable', 'offline', 'notification', 'star'];

export default class Main extends React.Component {
  state = {
    slide: false,
  };
  handleSelectSlide = slideNumber => {
    this.setState({
      slide: SLIDE_ARR[slideNumber],
    });
  };
  handleBack = e => {
    this.setState({ slide: false });
    console.log('Going back');
  };
  render() {
    return (
      <React.Fragment>
        <PresentationShell expandBubble={this.state.slide}>
          <OfflineSlide show={this.state.slide === 'offline'} />
          <Installability show={this.state.slide === 'installable'} />
          <PushNotification show={this.state.slide === 'notification'} />
          <Whatelse show={this.state.slide === 'star'} />
        </PresentationShell>
        <MountAnimation shouldRender={this.state.slide === false}>
          <Flicker key={'panel'} i={2} initDelay={1000}>
            <ButtonPanel onSelect={this.handleSelectSlide}>
              <FontAwesomeIcon key="1" icon="download" size="lg" />
              <FontAwesomeIcon key="2" icon="wifi" size="lg" />
              <FontAwesomeIcon key="3" icon="bell" size="lg" />
              <FontAwesomeIcon key="4" icon="star" size="lg" />
            </ButtonPanel>
          </Flicker>
        </MountAnimation>
        <HomeButtonAligner>
          <MountAnimation shouldRender={this.state.slide !== false}>
            <Flicker key={'home button'} i={0} initDelay={1000}>
              <RoundedButton onTouchEnd={this.handleBack}>
                <FontAwesomeIcon key="5" icon="arrow-left" size="lg" />
              </RoundedButton>
            </Flicker>
          </MountAnimation>
        </HomeButtonAligner>
      </React.Fragment>
    );
  }
}
