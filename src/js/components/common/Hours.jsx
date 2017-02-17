import React, { Component } from 'react';

export default class Hours extends Component {
  render() {
    const { showDivider } = this.props;
    let show = true;
    if(showDivider === false) {
      show = showDivider;
    }
    return (
      <div>
        <h4><span className="fa fa-clock-o"></span> Working Hours</h4>
        <small>Please call and arrange an appointment before visiting.</small>
        <br/>
        {show ? <hr/> : <br/>}
        <ul className="list-unstyled">
          <li>Monday: 9AM - 5PM</li>
          <li>Tuesday: 9AM - 5PM</li>
          <li>Wednesday: 9AM - 5PM</li>
          <li>Thursday: 9AM - 5PM</li>
          <li>Friday: 9AM - 5PM</li>
          <li>Saturday: 10AM - 2PM</li>
          <li>Sunday: CLOSED</li>
        </ul>
      </div>
    );
  }
}
