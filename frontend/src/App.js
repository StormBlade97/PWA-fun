import React, { Component } from 'react';
import './index.css';
import Intro from 'views/intro';
import Main from 'views/main';
import styled from 'styled-components';

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262626;
`;

class App extends Component {
  state = {
    view: 'intro',
  };
  nextHandler = e => {
    this.setState({
      view: 'landing',
    });
  };
  render() {
    return <FullScreen>{this.state.view === 'intro' ? <Intro onNext={this.nextHandler} /> : <Main />}</FullScreen>;
  }
}

export default App;
