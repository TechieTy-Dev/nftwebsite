import React from 'react';
import { Article } from '../../components';
import harpocrypto from '../../assets/harpocrypto.PNG'
import realestate from '../../assets/real-estate.PNG'
import punks from '../../assets/punks-clone.png';
import thoth from '../../assets/thoth.png';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className='thoth__blog section__padding' id="portfolio">
      <div className="thoth__blog-heading">
        <h1 className="gradient__text">
        Portfolio Projects
        </h1>
      </div>
      <div className="thoth__blog-container">
        <div className="thoth__portfolio_groupB">
          <Article imgUrl={harpocrypto}  url="https://harpocrypto.vercel.app/" text="Crypto Dashboard built in React, AntDesign, CoinMarketCo API to get real coin data, Bing API for real time blog posts on crypto and deployed and hosted on Vercel " date="June 6, 2022"  title="HarpoCrypto" />
          <Article imgUrl={realestate} text="Real Estate Website built in NextJS with Real Estate API and styled with Chakra-UI."date="June 1, 2022" title="Real Estate Group" url="https://real-estate-group.vercel.app/"/>
          <Article imgUrl={punks} text="OpenSea Clone made in React and hosted on Firebase"date="Sept 16, 2021" title="Punks Clone"/>
          <Article imgUrl={thoth} text="OpenSea Clone made in React and hosted on Firebase"date="Sept 16, 2021" title="Punks Clone" url="https://thothio.firebaseapp.com/" />
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio
