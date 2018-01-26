import React from 'react';

const Index = () => (
  <div>
    <div className="photo-container">
      <div id="motto-text">
        Pursuing a Greener World
      </div>
      <div id="intro-paragraph-text">
        20 years of dedicated electronic waste recycling
        <br/>
        one pound at a time
      </div>
    </div>

    <div id="who-we-are">
      <div className="wrapper">

        <h1 id="about-heading">About</h1>

      <div className="about-table-container">
        <table className="about-table">
          <tbody>
            <tr>
              <th><span className="glyphicon glyphicon-user"></span> </th>
            </tr>
            <tr>
              <th><h3> Who we are?</h3></th>
            </tr>
            <tr>
              <td className="about-table"><p>We are an electronic waste recycling company located in Hayward, California. Our facility is open on weekdays and accept drop offs for any electronic devices.</p></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="about-table-container">
        <table className="about-table">
          <tbody>
            <tr>
              <th><span className="glyphicon glyphicon-trash"></span></th>
            </tr>
            <tr>
              <th><h3> How we work?</h3></th>
            </tr>
            <tr>
              <td className="about-table"><p>As innovators in the recycling industry, we aim to dynamically change the way we recycle eletronic waste in the United States in a sustainable and economical way.</p></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="about-table-container">
        <table className="about-table">
          <tbody>
            <tr>
              <th><span className="glyphicon glyphicon-leaf"></span> </th>
            </tr>
            <tr>
              <th><h3> Why we do it?</h3></th>
            </tr>
            <tr>
              <td className="about-table"><p> Used electronics is most rapidly growing  waste stream. Through recycling and re-use, we can permenently reduce our global enviromental impact.</p></td>
            </tr>
          </tbody>
        </table>
      </div>

      </div>
    </div>

    <div id="mission-block">
      <div className="wrapper" id="mission-text">
          <h1 id="mission-heading">Our Mission</h1>
          <p>
          RICA Commercial wants to encourage the world to raise their standards of reduction, recycling, and reuse through providing economic and efficient ways for individuals and companies to safely and responsibly recycle electronics.
          </p>
      </div>
    </div>

    <div className="wrapper" id="partners-block">
      <h1>Our Partners</h1>
        <ol>
          <li><img src="./assets/imgs/alcoLogo.png" width="100px"/></li>
          <li><img src="./assets/imgs/WesternDigitalLogo.svg" width="130px"/></li>
          <li>E-Recycling of California</li>
        </ol>
    </div>
  </div>
)

export default Index
