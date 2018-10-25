import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

export default class LogoText extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="header marginless">PWA</h1>
        <span style={{ color: 'white' }}>{this.props.secondaryText}</span>
      </Container>
    );
  }
}

LogoText.defaultProps = {
  secondaryText: 'S',
};
LogoText.propTypes = {
  secondaryText: PropTypes.string,
};
