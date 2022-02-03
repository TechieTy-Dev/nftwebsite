import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='thoth__possibility section__padding' id="possibility">
      <div className="thoth__possibility-image">
        <img src={possibilityImage} alt="VR Headset" />
      </div>
      <div className="thoth__possibility-content">
        <h4>
          Request Access to Get Started
        </h4>
        <h1 className='gradient__text'>
          Unlimited Possibilities. Unlimited Imagination.
        </h1>
        <p>Traditional approaches to software systems are increasingly difficult to integrate, support, and adapt to rapidly changing markets. These challenges result in increased cost of ownership that can quickly deteriorate your competitive advantage</p>
        <h4>Explore the Possibilities</h4>
      </div>
      
    </div>
  )
}

export default Possibility
