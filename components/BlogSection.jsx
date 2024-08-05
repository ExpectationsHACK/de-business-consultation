import React from 'react'
import BlogSectionContainer from './BlogSectionContainer';
import Pagination from './Pagination';

const BlogSection = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 grid-rows-3 gap-4'>
        <BlogSectionContainer />
        <BlogSectionContainer />
        <BlogSectionContainer />
        <BlogSectionContainer />
        <BlogSectionContainer />
        <BlogSectionContainer />         
      </div>
      <div><Pagination /></div>
    </div>

  )
}

export default BlogSection;