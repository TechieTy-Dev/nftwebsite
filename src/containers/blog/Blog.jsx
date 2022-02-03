import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='thoth__blog section__padding' id="blog">
      <div className="thoth__blog-heading">
        <h1 className="gradient__text">
        Thoth.io Blog Posts
        </h1>
      </div>
      <div className="thoth__blog-container">
        <div className="thoth__blog_groupA">
          <Article imgUrl={blog01} date="Sept 13, 2021"  title="AI/Blockchain improvements"/>
        </div>
        <div className="thoth__blog_groupB">
          <Article imgUrl={blog02} date="Sept 15, 2021" title="AI/Blockchain improvements"/>
          <Article imgUrl={blog03} date="Sept 16, 2021" title="AI/Blockchain improvements"/>
          <Article imgUrl={blog04} date="Sept 21, 2021" title="AI/Blockchain improvements"/>
          <Article imgUrl={blog05} date="Sept 22, 2021" title="AI/Blockchain improvements"/>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
