import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';
import IconText from './IconText';
import Hours from './Hours';
import '../../css/location.css';

export default class Location extends Component {
  render() {
    const email = "viarbox@yahoo.ca",
          phone = "416-272-4854";
    return (
      <div className="container">
        <Header/>
        <div className="location-info text-center">
          <Hours/>
          <hr/>
          <h4>Other Ways</h4>
          <IconText icon="map-marker">
            <address>
            191 Bowes Road,<br/>
            Unit 3 &amp; 4,<br/>
            Concord ON,<br/>
            L4K 1H9
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
          <Map location="191 Bowes Road Unit 3 and 4 Concord ON L4K 1H9"/>
        </div>
      </div>
    );
  }
}
