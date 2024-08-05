import React from 'react'
import Image from 'next/image';

const BlogSectionContainer = () => {
  return (
    <div>
        <div className='flex flex-row mb-12 mt-12'>
            <div className='mr-8 rounded-xl'><Image src="/blogsectionimage.png" width={400} height={400} alt="right arrow icon" /></div>
            <div className='mt-12 w-[22em]'>
                <div className='py-1 w-32 flex justify-center px-2 bg-[#FEF3EB] text-[#6E330C] font-serif font-semibold rounded-3xl '>Technology</div>
                <div className='font-medium font-serif text-xl text-[#01170C] mt-4 '>The Legendary and Highest-Paid Software Engineer From Google </div>
                <div className='font-medium font-sans mt-2 text-[18px] text-[#525866]'>Improving your designs with tactics instead of talent. — Every web developer inevitably runs into situations where they need to make...</div>
                <div className=''><button className='flex flex-row text-lg font-medium mt-4 text-[#025A2E] items-center'>View details <Image src="/arrow-right-s-line.png" width={30} height={30} alt="right arrow icon" /></button></div>

            </div>
        </div>

    </div>
  )
}

export default BlogSectionContainer;
