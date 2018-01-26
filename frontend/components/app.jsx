import React from 'react';
import {
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

import Homepage from './pages/index'
import Services from './pages/services'
import Contact from './pages/contact'
import About from './pages/about_us'

const App = () => (
  <div>
    <div className="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <img className="rica-logo" src="./assets/imgs/RicaLogo.png" width="60px"/>
            <NavLink className="navbar-brand" to="/"> RICA Commercial </NavLink>
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
                <li className="nav active"> <NavLink to="/">Home</NavLink> </li>
                <li className="nav"> <NavLink to="/services">Services</NavLink> </li>
                <li className="nav"> <NavLink to="/contact">Contact Us</NavLink> </li>
                <li className="nav"> <NavLink to="/about_us">About Us</NavLink> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/services" component={Services} />
      <Route path="/about_us" component={About} />
      <Route path="/contact" component={Contact} />
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
