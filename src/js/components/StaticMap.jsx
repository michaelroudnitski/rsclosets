import React, { Component } from 'react';

export default class StaticMap extends Component {
  render() {
    return (
      <div>
        <a href="https://maps.google.com/maps?ll=43.807414,-79.492109&z=17&t=m&hl=en-US&gl=US&mapclient=embed&q=191%20Bowes%20Rd%20%233%20Concord%2C%20ON%20L4K%201H8%20Canada">
          <img src="/images/staticmap.png" role="presentation" style={{maxWidth: '100%'}}/>
        </a>
      </div>
    );
  }
}
