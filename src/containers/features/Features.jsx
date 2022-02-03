import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Secured Data' ,
    text: 'Insulated data transaction environment secured by encryption algorithms and smart contracts.'
  },
  {
    title: 'Scale AI Across the Business',
    text: 'Easily expand business capability with intelligent data'
  },
  {
    title: 'Low Cost',
    text: 'Our system saves enterprises up to 70% computing power costs'
  },
  {
    title: 'Privacy Protection',
    text: 'Separating data ownership from data usage right using smart contracts.'
  },
]

const Features = () => {
  return (
    <div className='thoth__features section__padding' id="features">
      <div className="thoth__features-heading">
        <h1 className='gradient__text'>Integrate AI services into your own applications</h1>
        <p>Thoth.Io has re-imagined traditional analytics approaches by embedding data and information with artificial intelligence, allowing digital information to act on its own, essentially eliminating the application layer</p>
      </div>
      <div className="thoth__features-container">
        {featuresData.map((item, index)=> (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
