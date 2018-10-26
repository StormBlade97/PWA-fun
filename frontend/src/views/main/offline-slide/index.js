import React from 'react';
import Flicker from 'atoms/flicker-entrance';
import MountAnimation from 'atoms/mount-animation';

export default class OfflineSlide extends React.Component {
  state = {
    isOnline: window.navigator.onLine,
  };
  componentDidMount() {
    window.addEventListener('online', () => {
      this.setState({ isOnline: true });
    });
    window.addEventListener('offline', () => {
      this.setState({ isOnline: false });
      console.log('Offline');
    });
  }
  render() {
    return (
      <MountAnimation shouldRender={this.props.show}>
        <Flicker initDelay={1500} i={0} key={0}>
          <h1 className="title" style={{ marginBottom: '2rem' }}>
            "The network never bother me anymore"
          </h1>
        </Flicker>
        <Flicker initDelay={1500} i={1} key={1}>
          <p>
            PWA uses <strong>Service Worker</strong> to cache static assets such as scripts, image, and markups When you
            navigate to PWA, browser don’t have to access network to fetch the app, it’s already there in the cache.{' '}
            <br style={{ marginTop: '1rem' }} />
            Try turning your network off, and then access this page.
          </p>
        </Flicker>
        <Flicker initDelay={1500} i={2} key={2}>
          <div>
            <span>Network status: </span>
            <span className="button-text" style={{ color: 'white', marginRight: '1rem' }}>
              {this.state.isOnline ? 'ONLINE' : 'OFFLINE'}
            </span>
          </div>
        </Flicker>
      </MountAnimation>
    );
  }
}
