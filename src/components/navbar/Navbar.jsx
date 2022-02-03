import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo2.svg'

//BEM - Block Element Modifier

const Menu = () => (

  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#what">About</a></p>
  <p><a href="#features">Features</a></p>
  <p><a href="#blog">Blog</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='thoth__navbar'>
      <div className="thoth__navbar-links">
        <div className="thoth__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
<div className="thoth__navbar-links_container">
  <Menu />
</div>
      </div>
      <div className="thoth__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="thot__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='thoth__navbar-menu_container scale-up-center'>
          <div className='thoth__navbar-menu_container-links'>
            <Menu />
            <div className="thoth__navbar-menu_container-links-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
