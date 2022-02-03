import React from 'react';
import './App.css';

import { Footer, Blog, Header, Features, Possibility, WhatThoth } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
    </div>
    <WhatThoth />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Brand />
    <Footer />
      
    </div>
  )
}

export default App
