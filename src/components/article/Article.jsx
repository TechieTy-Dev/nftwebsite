import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, text }) => {
  return (
    <div className='thoth__blog-container__article'>
      <div className="thoth__blog-container__article-img">
        <img src={imgUrl} alt="blog img"/>
      </div>
      <div className="thoth__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <h5>{text}</h5>
        </div>
      </div>
    </div>
  )
}

export default Article
