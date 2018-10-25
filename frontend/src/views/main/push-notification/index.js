import React from 'react';
import Flicker from 'atoms/flicker-entrance';
import Button from 'atoms/button';
import MountAnimation from 'atoms/mount-animation';
import notificationBootstrap from 'notification.js';

export default class PushNotification extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MountAnimation shouldRender={this.props.show}>
        <Flicker initDelay={1500} i={0} key={0}>
          <h1 className="title" style={{ margin: '2rem' }}>
            "Timely and relevant"
          </h1>
        </Flicker>
        <Flicker initDelay={1500} i={1} key={1}>
          <p>
            <strong>Service worker</strong> running in the background allow PWA to receive Push message and deliver
            timely information to your user even when the app is not open. This is not supported in iOS for now.
          </p>
        </Flicker>
      </MountAnimation>
    );
  }
}
