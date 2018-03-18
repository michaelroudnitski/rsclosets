import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './components/common/Header';
import QuoteForm from './components/quote/QuoteForm';
import Footer from './components/common/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="container-fluid padded-container text-center">
          <div className="col-md-12 col-sm-12 col-xs-12 fadeIn-long">
            <h1 className="fadeIn-short"><strong>RS CLOSET ORGANIZERS</strong></h1>
            <h4>Enjoy More Space</h4>
          </div>
        </div>
        <img className="banner fadeIn-long" src="/images/banner.png" role="presentation"/>
        <div className="container-fluid padded-container text-center">
          <div className="col-md-12 col-sm-12 col-xs-12 fadeIn-long">
            <h4>Custom closets and wall units will help you fully utilize your space. We offer an assortment of options in maximizing every inch of your bedroom, walk-in closet, laundry room, basement or office.</h4>
            <hr/>
            <h3>Give us a call at <a href="tel:416-272-4854"> <strong>416-272-4854</strong></a></h3>
            <h4>OR</h4>
            <br/>
            <Link to="/quote" className="btn-round">Click Here to Book a Free Estimate</Link>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 padded-container">
          <div className="col-md-6 col-sm-6 col-xs-12 fadeIn-med">
            <h3>The Classic Closet</h3>
            <hr/>
            <p>The Classic closet is the perfect choice for walk-in or reach-in closets. We offer a variety of options: deep drawers, deep shelves and hanging rods. In addition, we offer a variety of style options.</p>
            <img className="main-image" src="/images/classic.jpg" role="presentation"/>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 fadeIn-med">
            <h3>Custom Closets</h3>
            <hr/>
            <p>We also offer closets with custom drawers and cabinetry. This is a great option for large walk-in closets and dressing rooms.</p>
            <img className="main-image" src="/images/custom.jpg" role="presentation"/>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 container-fluid text-center">
          <div className="col-md-12 col-sm-12 col-xs-12 fadeIn-long">
            <QuoteForm/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
