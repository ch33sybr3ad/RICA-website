import React from 'react';

const Services = () => (
  <div>
    <div id="services-heading-block">
      <div className="wrapper" id="services-heading">
        <h2>Our Services</h2>
      </div>
    </div>

    <div id="services-content" className="content container-fluid">
      <div className="wrapper" id="services-block" >
        <table className="services-table table">
          <tbody>
            <tr>
              <td>
                <h3> <img src="./assets/imgs/glyphicons-nearby-circle.png"/> Free Drop-Off Recycling </h3>
                <p>RICA Commercial guarantees that all of the electronics dropped off will be recycled responsibly and efficiently. We currently have only one drop-off location located in Hayward, CA. You can drop off all your unwanted electronic devices completely <b>free</b>! Please help us reduce landfill waste and make the world a cleaner place.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="services-table table">
          <tbody>
            <tr>
              <td>
                <h3><img src="./assets/imgs/glyphicons-cargo.png"/> E-Waste and Metal Pick-Up</h3>
                <p>RICA Commercial offers free electronic and metal pick-ups for local businesses near Hayward, Ca. This includes Computers, Laptops, Desktops, Monitors, TV's, Servers, Phones, Printers, Toners, Microwaves, Fax Machines, DVD/VCR Players and more! Please send us an email scheduling a pick-up or ask for more information!</p>
                <form action="http://formspree.io/jzhao.690@gmail.com" method="post">
                  <div className="form-group">
                    <label htmlFor="formEmailInput">Email:</label>
                    <input type="email" className="form-control" id="formEmailInput" name="_replyto" placeholder="example@gmail.com"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="formTextarea">Description:</label>
                    <textarea className="form-control" id="formTextarea" rows="3" name="body" placeholder="Please describe the location and weight of the pick up"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="services-table table">
          <tbody>
            <tr>
              <td>
                <h3><img src="./assets/imgs/glyphicons-database-lock.png"/> Data Destruction</h3>
                <p>RICA Commercial offers Data Destruction Services on Hard Drives and ensures that all of the sensitive information inside will be thoroughly wiped and erased clean.</p>

                <ul>
                  <li>Software Wipe - $3/Drive</li>
                  <li>Physical Destruction - $5/Drive</li>
                </ul>

                <p>After we have checked to make sure all of the sensitive information is erased, we will issue you a certificate of destruction.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Services
