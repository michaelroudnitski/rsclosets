import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    const { pathname } = window.location;
    return (
      <nav className='nav'>
        <Link className={pathname === '/' ? 'nav-brand active' : 'nav-brand'} to='/'><strong>RS</strong></Link>
        <div className='nav-right'>
          <Link className={pathname === '/gallery' ? 'active' : ''} to='/gallery'>Gallery</Link>
          <Link className={pathname === '/quote' ? 'active' : ''} to='/quote'>Quote</Link>
          <Link className={pathname === '/contact-us' ? 'active' : ''} to='/contact-us'>Contact Us</Link>
        </div>
      </nav>
    );
  }
}
