import React from 'react';
import Flicker from 'atoms/flicker-entrance';
import MountAnimation from 'atoms/mount-animation';

export default class Installability extends React.Component {
  state = {
    isOnline: window.navigator.onLine,
  };

  render() {
    return (
      <MountAnimation shouldRender={this.props.show}>
        <Flicker initDelay={1500} i={0} key={0}>
          <h1 className="title" style={{ margin: '2rem' }}>
            "Is this a website or what?"
          </h1>
        </Flicker>
        <Flicker initDelay={1500} i={1} key={1}>
          <p>
            PWA uses <strong>Web Manifest</strong> to allow it being installed to homescreen.
            <br />
            Would you like to try?
          </p>
        </Flicker>
        <Flicker initDelay={1500} i={2} key={2}>
          <div>
            <span>LOL NVM</span>
          </div>
        </Flicker>
      </MountAnimation>
    );
  }
}
