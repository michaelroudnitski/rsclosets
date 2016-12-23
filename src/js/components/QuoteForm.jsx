import React, { Component } from 'react'
import QuoteStore from '../QuoteStore';

export default class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      submitted: false
    };
  }

  componentWillMount() {
    this.setState({ loading: QuoteStore.loading, submitted: QuoteStore.submitted });
  }

  submit(event) {
    event.preventDefault();
    const { email, fullName, phoneNumber, _gotcha } = event.target;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/nuzugenode@fulvie.com', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        this.setState({ loading: false, submitted: true });
        QuoteStore.loading = false;
        QuoteStore.submitted = true;
      } else if(xhr.readyState === 4) {
        this.setState({ loading: false, submitted: false });
        QuoteStore.loading = false;
        QuoteStore.submitted = false;
      }
    }
    xhr.send(
      `email=${email.value}&fullName=${fullName.value}&phoneNumber=${phoneNumber.value}&_subject='Quote Request - ${fullName.value} - ${new Date().toLocaleDateString()}'&_format=plain`
    );
    this.height = document.querySelector('.quote-form').clientHeight;
    this.setState({ loading: true, submitted: false });
    QuoteStore.loading = true;
    QuoteStore.submitted = false;
  }

  render() {
    const { loading, submitted } = this.state;
    if(loading) {
      return (
        <div className="quote-loading" style={{height: this.height}}>
          <span className="glyphicon glyphicon-refresh loading"></span>
          <br/>
          <h2>Submitting...</h2>
        </div>
      );
    }
    if(submitted) {
      return (
        <div className="quote-success" style={{height: this.height}}>
          <div className="col-md-2 col-sm-2 col-xs-2" style={{textAlign: 'right'}}>
            <span className="glyphicon glyphicon-ok quote-checkmark"></span>
          </div>
          <div className="col-md-10 col-sm-10 col-xs-10" style={{borderLeft: '1px solid #eee'}}>
            Your request has been submitted.
            <br/>
            <strong>Please wait 24 - 48 hours for a reply to schedule your quote.</strong>
          </div>
        </div>
      );
    }
    return (
      <form className="quote-form" onSubmit={this.submit.bind(this)}>
        <h1><span className="glyphicon glyphicon-usd"></span> Request a Quote</h1>
        <hr/>
        <div className="form-group">
          <label htmlFor="emailInput">Email Address</label>
          <input type="email" className="form-control" id="emailInput" name="email" placeholder="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="nameInput">Full Name</label>
          <input type="text" className="form-control" id="nameInput" name="fullName" placeholder="full name"/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneInput">Phone Number</label>
          <input type="tel" className="form-control" id="phoneInput" name="phoneNumber" placeholder="phone number"/>
        </div>
        <input type="text" name="_gotcha" style={{display: 'none'}}/>
        <br/>
        <button type="submit" className="btn-round pull-right">Request Quote</button>
      </form>
    );
  }
}
