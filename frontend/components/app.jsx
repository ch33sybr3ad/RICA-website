import React from 'react';
import NavbarContainer from './header_bar/navbar_container';
import {
  Route,
  Switch
} from 'react-router-dom';


const App = () => (
  <div>
    <div class="header">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <img class="rica-logo" src="./assets/imgs/RicaLogo.png" width="60px"/>
            <a class="navbar-brand" href="index.html"> RICA Commercial </a>
            <button class="btn btn-default navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
          </div>

          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="nav active"> <a href="index.html">Home</a> </li>
                <li class="nav"> <a href="services.html">Services</a> </li>
                <li class="nav"> <a href="contact.html">Contact Us</a> </li>
                <li class="nav"> <a href="about_us.html">About Us</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <Switch>
      <Route path="/index" component={} />
      <Route path="/services" component={} />
      <Route path="/contact" component={} />
      <Route path="/about_us" component={} />
    </Switch>
  </div>
)

export default App;
