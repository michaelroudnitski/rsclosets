import React, { Component } from 'react'
import Header from './Header';
import QuoteForm from './QuoteForm';
import '../../css/quote.css';

export default class Quote extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="container-fluid" style={{background: 'white', padding: '0px'}}>
          <div className="col-md-6 col-sm-6 hidden-xs" style={{padding: '0px'}}>
            <div className="estimate-container">
              <h1><strong>Get an estimate</strong></h1>
              <p>Fill out the form with your details and<br/>we'll reach out to you as soon as possible.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop: '10%', paddingBottom: '15%'}}>
            <QuoteForm/>
          </div>
        </div>
      </div>
    );
  }
}
