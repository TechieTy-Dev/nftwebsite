import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='thoth__header section__padding'id="home">
      <div className="thoth__header-content">
        <h1 className='gradient__text'>Tyler Smith</h1>
        <p>Front End Developer, Blockchain Noob, AI Enthusiast </p>
        <div className="thoth__header-content__input">
          <p><a href="/">Current Book: The Internet of Money</a></p>
          <br/>
          <p><a href="/">Current Course: Blockchain Theory 101</a></p>
          <br />
          <p><a href="/">Current Project: BlockChain Facebook Clone</a></p>
          <br />
        </div>
        </div>
        <div className="thoth__social-links">
          
        </div>
        <div className="thoth__header-image">
          <img src={ai} alt="AI" />
        
      </div>
    </div>
  )
}

export default Header
