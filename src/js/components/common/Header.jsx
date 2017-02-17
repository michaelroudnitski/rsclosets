import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <img className="banner" src="/images/banner.png" role="presentation"/>
      </div>
    );
  }
}
