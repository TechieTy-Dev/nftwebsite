import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


//BEM - Block Element Modifier

const Menu = () => (

  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#portfolio">Work</a></p>
  <p><a href="#what">About Me</a></p>
  <p><a href="#features">Learning</a></p>
  <p><a href="#blog">Blog</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='thoth__navbar'>
      <div className="thoth__navbar-links">
<div className="thoth__navbar-links_container">
  <Menu />
</div>
      </div>
      <div className="thoth__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='thoth__navbar-menu_container scale-up-center'>
          <div className='thoth__navbar-menu_container-links'>
            <Menu />
            <div className="thoth__navbar-menu_container-links-sign">
      </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
