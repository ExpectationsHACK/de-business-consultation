import React from 'react'

const BlogHeroSection = () => {
  return (
    <div className="h-[28em] mt-32 rounded-2xl"  style={{backgroundImage: `url('WorkplaceFirends.jpg')`}}>
      <div className='pt-[13em] pl-16 gap-4 flex flex-row items-center'>
        <div className='py-1 w-32 flex justify-center px-2 bg-[#FEF3EB] text-[#6E330C] font-serif font-semibold rounded-3xl '>Technology</div>
        <div className='text-[#ffffff]'>3 mins read</div>
      </div>

      <div className='px-16 pt-4 text-[#ffffff] text-[50px] font-serif leading-[55px]'>The Legendary and Highest-Paid Software Engineer From Google </div>
      <div className='px-16 pt-2 pb-4 text-[#ffffff] text-[20px] font-serif '>Improving your designs with tactics instead of talent. — Every web developer inevitably runs into situations where they need to make...</div>
    
  </div>
  )
}

export default BlogHeroSection;