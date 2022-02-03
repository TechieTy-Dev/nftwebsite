import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='thoth__header section__padding'id="home">
      <div className="thoth__header-content">
        <h1 className='gradient__text'>Build Predictive Disruption Systems with Thoth.IO</h1>
        <p>Thoth.IO enables you to create Predictive Systems that learn with AI and is stored on the XTS Blockchain. These two technologies combined will improve production and add transparency to your business.</p>
        <div className="thoth__header-content__input">
          <input type="email" placeholder='Your Email Address'></input>
            <button type='button'>Get Started</button>      
        </div>
        <div className="thoth__header-content__people"><img src={people} alt="people"/> 
        <p>1,650 people are using Thoth.IO</p>
          </div>
        </div>
        <div className="thoth__header-image">
          <img src={ai} alt="AI" />
        
      </div>
    </div>
  )
}

export default Header
