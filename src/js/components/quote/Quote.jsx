import React, { Component } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import QuoteForm from './QuoteForm';
import '../../../css/quote.css';

export default class Quote extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="container-fluid" style={{background: 'white', padding: '0px'}}>
          <div className="col-md-6 col-sm-6 hidden-xs" style={{padding: '0px'}}>
            <div className="estimate-container fadeIn-long">
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 quote-container">
            <QuoteForm/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
