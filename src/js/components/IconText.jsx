import React, { Component } from 'react';

export default class IconText extends Component {
  render() {
    const { icon, children } = this.props;
    return (
      <div className="row" style={{marginTop: '24px'}}>
          <span style={{fontWeight: 'bold', fontSize: '20px'}} className={`fa fa-${icon}`}></span>
          <div style={{fontWeight: 'bold', marginTop: '6px', fontSize: '16px'}}>{children}</div>
      </div>
    );
  }
}
