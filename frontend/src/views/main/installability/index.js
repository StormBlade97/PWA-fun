import React from 'react';
import Flicker from 'atoms/flicker-entrance';
import MountAnimation from 'atoms/mount-animation';
import Button from 'atoms/button';

export default class Installability extends React.Component {
  constructor(props) {
    super(props);
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.state = {
        launchedAsApp: true,
      };
    } else {
      this.state = {
        launchedAsApp: false,
      };
    }
  }
  handlePrompt = () => {
    if (window.MY_DEFERED_PROMPT_EVENT) {
      window.MY_DEFERED_PROMPT_EVENT.prompt();
    } else {
      console.error('There is no prompt event');
    }
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
            <br />
            Note that the prompt only works in Android :P
          </p>
        </Flicker>
        {!this.state.launchedAsApp ? (
          <Flicker initDelay={1500} i={2} key={2}>
            <Button onTouchEnd={this.handlePrompt} onMouseUp={this.handlePrompt}>
              {' '}
              Prompt me!{' '}
            </Button>
          </Flicker>
        ) : (
          <Flicker initDelay={1500} i={2} key={2}>
            <div>You already installed this app</div>
          </Flicker>
        )}
      </MountAnimation>
    );
  }
}
