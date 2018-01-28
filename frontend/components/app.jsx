import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import Homepage from './pages/index'
import Services from './pages/services'
import Contact from './pages/contact'
import About from './pages/about_us'
import Nav from './pages/nav_link'
const App = () => (
  <div>
    <div className="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <img className="rica-logo" src="./assets/imgs/RicaLogo.png" width="60px"/>
            <Nav className="navbar-brand" to="/index"> RICA Commercial </Nav>
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
                <li className="nav"> <Nav to="/index">Home</Nav> </li>
                <li className="nav"> <Nav to="/services">Services</Nav> </li>
                <li className="nav"> <Nav to="/contact">Contact Us</Nav> </li>
                <li className="nav"> <Nav to="/about_us">About Us</Nav> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <Switch>
      <Route path="/index" component={Homepage} />
      <Route path="/services" component={Services} />
      <Route path="/about_us" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" render={() => (
          <Redirect to="/index"/>)
          }/>
    </Switch>

    <div className="container" id="footer-block">

        <div className="panel panel-default col-md-4 col-md-offset-1 footer-table">
            <h3>Recycling Hours</h3>
            <table className="table">
              <tbody>
                <tr>
                    <td>Monday - Friday</td>
                    <td>9AM - 4PM</td>
                </tr>
                <tr>
                    <td>Weekend</td>
                    <td>Closed</td>
                </tr>
              </tbody>
            </table>
        </div>

        <div className="panel panel-default col-md-5 col-md-offset-1 footer-table">
          <h3>Contact Information</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Address</td>
                <td>27105 Industrial Boulevard, Hayward, CA 94545</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>(510) 780-9668</td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>customerservice@ricacommercialinc.com</td>
              </tr>
              <tr>
                <td>Fax Number</td>
                <td>(510) 780-9227</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
)

export default App;
