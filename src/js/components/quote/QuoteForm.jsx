import React, { Component } from 'react'
import QuoteStore from '../../QuoteStore';

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
    if(!this.validateEmail(email.value)) {
      this.setState({error: 'Invalid Email!'});
      return;
    }
    if(!this.validatePhone(phoneNumber.value)) {
      this.setState({error: 'Invalid Phone Number!'});
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/viarbox@yahoo.ca', true);
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

  validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  validatePhone(phone) {
    const phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    return phoneRegex.test(phone);
  }

  render() {
    const { loading, submitted, error } = this.state;
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
        <h1>Request a Quote</h1>
        <p>Fill out the form with your details and<br/>we'll reach out to you as soon as possible.</p>
        <hr/>
        <div className="form-group">
          <label htmlFor="emailInput">Email Address</label>
          <input type="email" className="form-control" id="emailInput" name="email" placeholder="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" name="fullName" placeholder="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneInput">Phone Number</label>
          <input type="tel" className="form-control" id="phoneInput" name="phoneNumber" placeholder="phone number"/>
        </div>
        <input type="text" name="_gotcha" style={{display: 'none'}}/>
        {error ? <div className="quote-error">{error}</div> : ''}
        <br/>
        <button type="submit" className="btn-round btn-block">Request Quote</button>
        <div className="text-center">
          <h4>Or call us at <a href="tel:416-272-4854">416-272-4854</a></h4>
        </div>
        <hr/>
      </form>
    );
  }
}
