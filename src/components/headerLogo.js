import React, { Component } from 'react';

export default class HeaderLogo extends Component {
  render() {
    return (
      <div className="header-logo">
        <img src={require('./../images/mk_logo.png')} alt="logo"/>
      </div>
    );
  }
}