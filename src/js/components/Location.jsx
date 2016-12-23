import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';
import IconText from './IconText';
import Hours from './Hours';
import '../../css/location.css';

export default class Location extends Component {
  render() {
    const email = "test@test.com",
          phone = "416-777-777";
    return (
      <div className="container">
        <Header/>
        <div className="location-info text-center">
          <Hours/>
          <hr/>
          <h4>Other Ways</h4>
          <IconText icon="map-marker">
            <address>
            17600 Yonge St,<br/>
            Newmarket ON,<br/>
            L3Y 4Z1<br/>
            Canada
            </address>
          </IconText>
          <IconText icon="envelope">
            <a href={`mailto:${email}`}>{email}</a>
          </IconText>
          <IconText icon="phone-alt">
            <a href={`tel:${phone}`}>{phone}</a>
          </IconText>
        </div>
        <div className="location-map">
          <Map location="17600 Yonge St, Newmarket ON, L3Y 4Z1"/>
        </div>
      </div>
    );
  }
}
