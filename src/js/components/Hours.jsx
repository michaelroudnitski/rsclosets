import React, { Component } from 'react';

export default class Hours extends Component {
  render() {
    return (
      <div>
        <h4><span className="glyphicon glyphicon-time"></span> Working Hours</h4>
        <hr/>
        <ul className="list-unstyled">
          <li>Monday: 9AM - 5PM</li>
          <li>Tuesday: 9AM - 5PM</li>
          <li>Wednesday: 9AM - 5PM</li>
          <li>Thursday: 9AM - 5PM</li>
          <li>Friday: 9AM - 5PM</li>
          <li>Saturday: 10AM - 2PM</li>
          <li>Sunday: CLOSED</li>
          <li><br/></li>
          <li><strong>CLOSED DEC 25 - JAN 3</strong></li>
        </ul>
      </div>
    );
  }
}
