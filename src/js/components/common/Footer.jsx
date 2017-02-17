import React, { Component } from 'react';
import { Link } from 'react-router';
import Hours from './Hours';
import StaticMap from '../contact/StaticMap';
import CopyrightInfo from './CopyrightInfo';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid padded-container">
          <div className="col-md-8 col-sm-8 col-xs-12" style={{paddingTop: '5%'}}>
            <h3>Contact Us</h3>
            <br/>
            <StaticMap/>
            <br/>
            <address>
              <strong>
                191 Bowes Road, Unit 3 &amp; 4,<br/>
                Concord ON, L4K 1H9
              </strong>
            </address>
            <Link to="/contact-us">More Contact Details</Link>
          </div>
          <div className="col-md-4 col-sm-4 hidden-xs" style={{paddingTop: '12%'}}>
            <Hours/>
          </div>
        </div>
        <CopyrightInfo/>
      </div>
    );
  }
}
