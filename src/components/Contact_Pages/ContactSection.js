import React from 'react'
import {Link} from 'react-router-dom'

const ContactSection = () => {
 
  return (
              <div className="contactpage">
                  <div className="container">

               
              
              <div className="row w-100 gy-5">
                  <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-xs-12 col-12">
                  <div className="wrapper">
        <div className="inner">
          <form>
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <label className="form-group">
              <input type="text" className="form-control" required />
              <span>Your Name</span>
              <span className="border" />
            </label>
            <label className="form-group">
              <input type="email" className="form-control" required />
              <span>Your Mail</span>
              <span className="border" />
            </label>
            <label className="form-group">
              <textarea  className="form-control" required/>
              <span>Your Message</span>
              <span className="border" />
            </label>
            <button>Submit
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
      </div>
                  
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="second-container">
        <div className="info-context">
          <div> 
             <h3><i class="fa-solid fa-map-location-dot pe-3"></i>Address</h3>
            <p>H-block, Street no-17, New Delhi- 110001, India</p>
          </div>
          <div> 
            <h3><i class="fa-solid fa-headset pe-3"></i>Lets Talk</h3>
            <p>+1 800 1236879</p>
          </div>
          <div> 
            <h3><i class="fa-solid fa-envelopes-bulk pe-3"></i>General Support</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
              </div>
          </div>
          </div>
              </div>
     

  )
}

export default ContactSection