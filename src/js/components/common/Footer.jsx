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
          <div className="col-md-12 col-sm-12 hidden-xs" style={{paddingTop: '5%'}}>
            <h4>RS CLOSET ORGANIZERS</h4>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop: '5%'}}>
            <h4><span className="fa fa-phone"/> Contact Us</h4>
            <small>Ways to get in touch</small>
            <hr/>
            <p><a href="tel:416-272-4854">416-272-4854</a></p>
            <p><a href="mailto:viarbox@yahoo.ca">viarbox@yahoo.ca</a></p>
            <address>
                191 Bowes Road, Unit 3 &amp; 4,<br/>
                Concord ON, L4K 1H9
            </address>
            <Link to="/contact-us">More Contact Details</Link>
          </div>
          <div className="col-md-6 col-sm-6 hidden-xs" style={{paddingTop: '5%'}}>
            <Hours/>
          </div>
        </div>
        <CopyrightInfo/>
      </div>
    );
  }
}
