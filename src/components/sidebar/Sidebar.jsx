import React from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar_container">
    <a href='/'>
      <FontAwesomeIcon icon={faGithub} size="2x" className='git' />
    </a>
    <a href='/'>
      <FontAwesomeIcon icon={faMedium} className="med" size="2x"  />
    </a>
    <a href='/'>
      <FontAwesomeIcon icon={faCodepen} size="2x" className='code' />
    </a>
    <a href='/'>
      <FontAwesomeIcon icon={faLinkedin} size="2x" className='link' />
    </a>
    </div>
  )
}

export default Sidebar