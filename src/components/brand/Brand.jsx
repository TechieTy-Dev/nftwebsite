import React from 'react';
import './brand.css';
import {
  slack,
  atlassian,
  dropbox,
  shopify, } from'./imports'

const brand = () => {
  return (
    <div className='thoth__brand section__padding'>

      <div> 
        <img src={slack} alt="slack"/>
      </div>
      <div> 
        <img src={atlassian} alt="atlassian"/>
      </div>
      <div> 
        <img src={shopify} alt="shopify"/>
      </div>
      <div> 
        <img src={dropbox} alt="dropbox"/>
      </div>
      
    </div>
  )
}

export default brand
