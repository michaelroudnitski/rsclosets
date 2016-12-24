import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './components/Header';
import QuoteForm from './components/QuoteForm';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="container-fluid padded-container text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2>Organize Your Space and Give It Lasting Value!</h2>
            <hr/>
            <p>Custom closets and wall units will help you to fully utilize your space. We offer an assortment of options in maximizing every square foot of your bedroom, walk-in closet, laundry room, basement or office. </p>
            <p>We will be with you every step of the way, to aid you in optimizing your options and reaching a decision that will allow you to fully utilize your space.  No matter how small or spacious your room, our custom shelving and organizing will make it functional based on your custom needs and budget. Whatever your needs, we will figure out how best to store all your belongings.</p>
            <br/>
            <Link to="/quote" className="btn-round">Book a Free Estimate <span className="glyphicon glyphicon-menu-right"></span></Link>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 padded-container">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <h3>The Classic Closet</h3>
            <hr/>
            <p>The Classic is a floor-supported system. It is the quintessential choice for walk-in or reach-in closets that require organization to stay clutter-free. We offer a wide array of customization options: deep drawers, deep shelves and hanging rods. In addition, we offer a variety of style options which will allow you to further customize your organized space to achieve the look you desire.</p>
            <p>We can create towers and shelves that will provide ample room for storing clothes, shoes and linens.</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <img className="main-image" src="/images/classic.jpg" role="presentation"/>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 padded-container">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <img className="main-image" src="/images/custom.jpg" role="presentation"/>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <h3>Custom Cabinetry</h3>
            <hr/>
            <p>In addition to closets, we offer custom cabinetry. This is a great option for large walk-in closets and dressing rooms. Choose from a wide array of styles, colours and accessories for a stylish and functional space.</p>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 container-off-white text-center">
          <div className="col-md-5 col-sm-5 hidden-xs">
            <h1>Benefits</h1>
            <hr/>
            <ul className="text-left">
              <li>Free no obligations estimate</li>
              <li>Custom design to fit your needs</li>
              <li>Professional installation</li>
              <li>Parts & maintenance warranty</li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-7 col-xs-12">
            <QuoteForm/>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 padded-container">
          <a className="btn btn-round btn-block" onClick={e => window.scrollTo(0,0)}>Back to top <span className="glyphicon glyphicon-menu-up"></span></a>
        </div>
      </div>
    );
  }
}
