import React from 'react';
import { Feature } from '../../components';
import './whatthoth.css';

const WhatThoth = () => {
  return (
<div className='thoth__whatthoth section__margin' id="what">
  <div className="thoth__whatthoth-feature">
  <Feature title="What is Thoth.Io" text="Thoth.Io is a decentralized AI software that enables you to create systems for your business by learning from data. This learning is used to create better business solutions for your company. "/>
  </div>
  <div className="thoth__whatthoth-heading">
    <h1 className='gradient__text'>Decentralized Blockchain. AI Imagination. </h1>
    <p>Explore Possibilites</p>
  </div>
  <div className="thoth__whatthoth-container">
    <Feature title="Deep Learning" text="Machine learning technique that teaches computers to do what comes naturally to humans"/>
    <Feature title="Cloud Computing" text="Computer system resources, especially data storage and computing power, without direct active management by the user"/>
    <Feature title="Decentralized" text="Activities of an organization, particularly those regarding planning and decision making, are distributed or delegated away from a central, authoritative location or group"/>
    </div>
  </div>
  )
}

export default WhatThoth
