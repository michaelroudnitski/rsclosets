import React, { Component } from 'react';

export default class IconText extends Component {
  render() {
    const { icon, children } = this.props;
    return (
      <div className="row" style={{marginTop: '24px'}}>
        <div className="col-md-2 col-sm-2 col-xs-2 text-right" style={{fontSize: '24px', color: '#212121'}}>
          <span className={`glyphicon glyphicon-${icon}`}></span>
        </div>
        <div className="col-md-10 col-sm-10 col-xs-10 text-left" style={{fontWeight: 'bold', marginTop: '4px'}}>
          <div>{children}</div>
        </div>
      </div>
    );
  }
}
