import React, { Component } from 'react';
import { GOOGLE_MAPS_KEY } from '../secret.js';

export default class StaticMap extends Component {
  render() {
    const url = `https://maps.googleapis.com/maps/api/staticmap?zoom=17&size=400x250&maptype=roadmap&markers=color:red%7C191+Bowes+Road+Unit+3+Concord+ON&key=${GOOGLE_MAPS_KEY}`;
    return (
      <div>
        <a href="https://maps.google.com/maps?ll=43.807414,-79.492109&z=17&t=m&hl=en-US&gl=US&mapclient=embed&q=191%20Bowes%20Rd%20%233%20Concord%2C%20ON%20L4K%201H8%20Canada">
          <img src={url} role="presentation" style={{maxWidth: '100%'}}/>
        </a>
      </div>
    );
  }
}
