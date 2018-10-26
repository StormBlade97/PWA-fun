import React from 'react';
import Flicker from 'atoms/flicker-entrance';
import MountAnimation from 'atoms/mount-animation';
import notificationBootstrap from 'notification.js';

export default class Whatelse extends React.Component {
  constructor(props) {
    super(props);
  }
  handlePrompt = e => {
    notificationBootstrap();
  };
  render() {
    return (
      <MountAnimation shouldRender={this.props.show}>
        <Flicker initDelay={1500} i={0} key={0}>
          <h1 className="title" style={{ marginBottom: '2rem' }}>
            "Whatwebcando.today"
          </h1>
        </Flicker>
        <Flicker initDelay={1500} i={1} key={1}>
          <div>
            <p>
              PWA are web apps. Whatever web app can do, PWA can do!
              <br />
              PWA does not have access to native platform API, so no fancy stuff like AR/VR yet!
            </p>
            <ul>
              <li>
                <span>Geolocation</span>
              </li>
              <li>
                <span>Video/Audio capture and playback</span>
              </li>
              <li>
                <span>Sensors access</span>
              </li>
              <li>
                <span>Haptic feedback</span>
              </li>
              <li>
                <span>File access</span>
              </li>
            </ul>
          </div>
        </Flicker>
      </MountAnimation>
    );
  }
}
