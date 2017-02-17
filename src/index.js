import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './js/App';
import Quote from './js/components/quote/Quote';
import Location from './js/components/contact/Location';
import Gallery from './js/components/gallery/Gallery';
import './css/common.css';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0,0)} history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/contact-us" component={Location}/>
    <Route path="/quote" component={Quote}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="*" component={App}/>
  </Router>,
  document.getElementById('root')
);
