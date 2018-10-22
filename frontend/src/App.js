import React, { Component } from 'react';
import './index.css';
import './typography.css';
import { displayNotification } from './notification';

class App extends Component {
  state = {
    body: '',
    title: '',
  };

  showNotification = () => {
    displayNotification(this.state);
  };

  setTitle = e => {
    this.setState({ title: e.target.value });
  };
  setBody = e => {
    this.setState({ body: e.target.value });
  };
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <header>
              <h1 className="title is-1">Progressive Web App is cool</h1>
              <p>
                This is a demo to show the capabilities of <code>PWA</code>
              </p>
            </header>
          </div>
        </section>

        <section class="section">
          <div className="container">
            <div class="box">
              <h5 className="title is-5">Notification</h5>
              <div class="field">
                <div class="control">
                  <label htmlFor="title">Title</label>
                  <input class="input" type="text" name="message" value={this.state.title} onChange={this.setTitle} />
                </div>
                <div class="control">
                  <label htmlFor="message">Body</label>
                  <input class="input" type="text" name="message" value={this.state.body} onChange={this.setBody} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button class="button is-info" onClick={this.showNotification}>
                    Send notification
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
