import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Index from './index/index'

const App = () => (
  <div>
    <div className="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <img className="rica-logo" src="./assets/imgs/RicaLogo.png" width="60px"/>
            <a className="navbar-brand" href="index.html"> RICA Commercial </a>
            <button className="btn btn-default navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
          </div>

          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li className="nav active"> <a href="index.html">Home</a> </li>
                <li className="nav"> <a href="services.html">Services</a> </li>
                <li className="nav"> <a href="contact.html">Contact Us</a> </li>
                <li className="nav"> <a href="about_us.html">About Us</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <Switch>
      <Route path="/index" component={Index} />
    </Switch>
  </div>
)
// <Route path="/services" component={holder} />
// <Route path="/contact" component={holder} />
// <Route path="/about_us" component={holder} />

export default App;
