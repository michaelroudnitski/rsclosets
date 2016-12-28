import React, { Component } from 'react';

export default class CopyrightInfo extends Component {
  render() {
    return (
      <div className="container-white">
        <small>
          &copy; {new Date().getFullYear()} RS Closets. Toronto, ON. All rights reserved.
          <a className="pull-right hidden-xs" onClick={e => window.scrollTo(0,0)}>back to top</a>
        </small>
      </div>
    );
  }
}
