import React, { Component } from 'react';
import Header from '../common/Header';
import Map from './Map';
import IconText from '../common/IconText';
import Hours from '../common/Hours';
import CopyrightInfo from '../common/CopyrightInfo';
import '../../../css/location.css';

export default class Location extends Component {
  render() {
    const email = "viarbox@yahoo.ca",
          phone = "416-272-4854";
    return (
      <div className="container">
        <Header/>
        <div className="padded-container location-info hidden-xs fadeIn-long">
          <h1>Contact Us - RS Closet Organizers</h1>
          <hr/>
          <div className="col-md-6 col-sm-6">
            <IconText icon="facebook">
              <a href="https://www.facebook.com/rsclosets/">Visit us on Facebook</a>
            </IconText>
            <IconText icon="envelope">
              <a href={`mailto:${email}`}>{email}</a>
            </IconText>
            <IconText icon="phone">
              <a href={`tel:${phone}`}>{phone}</a>
            </IconText>
            <IconText icon="map-marker">
              <address>
                191 Bowes Road,<br/>
                Unit 3 &amp; 4,<br/>
                Concord ON,<br/>
                L4K 1H9
              </address>
            </IconText>
          </div>
          <div className="col-md-6 col-sm-6" style={{paddingTop: '10%'}}>
            <Hours showDivider={false}/>
          </div>
        </div>
        <div className="location-info text-center visible-xs">
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
          <IconText icon="facebook">
            <a href="https://www.facebook.com/rsclosets/">Visit us on Facebook</a>
          </IconText>
          <IconText icon="envelope">
            <a href={`mailto:${email}`}>{email}</a>
          </IconText>
          <IconText icon="phone">
            <a href={`tel:${phone}`}>{phone}</a>
          </IconText>
        </div>
        <div className="location-map">
          <Map location="191 Bowes Road Concord ON L4K 1H9"/>
        </div>
        <CopyrightInfo/>
      </div>
    );
  }
}
