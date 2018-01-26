import React from 'react';

const Contact = () => (
  <div>
    <div id="contact-heading-block">
      <div className="wrapper" id="contact-heading">
        <h2>Connect with Us!</h2>
      </div>
    </div>

      <div id="contact-content" className="content">
        <div className="wrapper">

          <div className="content-pane left" id="map">
            <div className="iframe-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3159.8977927499523!2d-122.10847150000001!3d37.6280919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f96c7d063be73%3A0x5b06383063b0f466!2s27105+Industrial+Blvd%2C+Hayward%2C+CA+94545!5e0!3m2!1sen!2sus!4v1405742994372" width="598" height="480" frameBorder="0" style={{border:0}}></iframe>
            </div>
          </div>
          <div id="map-right-content">
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-envelope"></span>
                  </td>
                  <td>
                    <a href="mailto:customerservice@ricacommercialinc.com?Subject=Hello%20RICA" target="_top">Send Us an Email</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-map-marker"></span>
                  </td>
                  <td>
                    <p>27105 Industrial Boulevard, Hayward, CA 94545</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-phone-alt"></span>
                  </td>
                  <td>
                    P (510) 780-9668
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-print"></span>
                  </td>
                  <td>
                    F (510) 780-9227
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="glyphicon glyphicon-time"></span>
                  </td>
                  <td>
                    <p>Monday - Friday: 9AM - 4PM</p>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
)

export default Contact
