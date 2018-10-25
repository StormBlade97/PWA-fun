import React from 'react';
import PresentationShell from 'molecules/presentation-shell';
import ButtonPanel from 'molecules/button-square';
import OfflineSlide from './offline-slide';
import Installability from './installability';
import Flicker from 'atoms/flicker-entrance';
import MountAnimation from 'atoms/mount-animation';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWifi, faBell, faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faWifi);
library.add(faStar);
library.add(faBell);
library.add(faDownload);

const SLIDE_ARR = ['installable', 'offline', 'notification', 'star'];

export default class Main extends React.Component {
  state = {
    slide: false,
  };
  handleSelectSlide = slideNumber => {
    console.log('Handle select slide', slideNumber);
    this.setState({
      slide: SLIDE_ARR[slideNumber],
    });
  };
  render() {
    console.log(this.state.slide);
    return (
      <React.Fragment>
        <PresentationShell expandBubble={this.state.slide !== false}>
          <OfflineSlide show={this.state.slide === 'offline'} />
          <Installability show={this.state.slide === 'installable'} />
        </PresentationShell>
        <MountAnimation shouldRender={this.state.slide === false}>
          <Flicker key={'panel'} initDelay={500}>
            <ButtonPanel onSelect={this.handleSelectSlide}>
              <FontAwesomeIcon key="1" icon="download" size="lg" />
              <FontAwesomeIcon key="2" icon="wifi" size="lg" />
              <FontAwesomeIcon key="3" icon="bell" size="lg" />
              <FontAwesomeIcon key="4" icon="star" size="lg" />
            </ButtonPanel>
          </Flicker>
        </MountAnimation>
      </React.Fragment>
    );
  }
}
