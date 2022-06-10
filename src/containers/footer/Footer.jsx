import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='thoth__footer section__padding'>

      <div className="thoth__footer-heading">
        <h1 className='gradient__text'>Future Knowledge is one step away</h1>
        </div>

        <div className="thoth__footer-btn">
          <p>Get Started</p>
        </div>

        <div className="thoth__footer-links">
          <div className="thoth__footer-links_logo">
            <p>Lorem Ipsum 212, United States 00000</p>
          </div>

          <div className="thoth__footer-links_div">
            <h4>Links</h4>
            <p>Projects</p>
            <p>Media</p>
            <p>Community</p>
            <p>Contact</p>
          </div>

          <div className="thoth__footer-links_div">
            <h4>Company</h4>
            <p>Terms and Conditions</p>
            <p>Policies</p>
            <p>Customer Service</p>
            <p>Careers</p>
          </div>

          <div className="thoth__footer-links_div">
            <h4>Contact</h4>
            <p>Phone</p>
            <p>Socials</p>
            <p>Email</p>
          </div>

        </div>
        
      <div className="thoth__footer-copyright"><p>© 2022 Thoth.io. All rights reserved.</p></div>
    </div>
  )
}

export default Footer
