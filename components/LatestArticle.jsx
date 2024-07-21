import React from 'react'

const LatestArticle = () => {
  return (
    <div className='pt-8 py-[20px] px-[8em] bg-[#FFFFFF] '>
        <div className='flex flex-row items-center gap-8'>
            <div className='font-semibold font-serif text-2xl text-[#01170C] '>Latest Article</div>
            <div className='text-lg font-semibold font-mono text-[#1C7F4E]'>See all</div>
            <div><img src="/forward.png" className='font-bold ' alt="Logo" /></div>
        </div>
        <div className='text-[#525866] font-mono text-xl font-medium pt-4  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.</div>
        <div>
            <div className='pt-16 flex flex-row gap-8'>
                <div className='w-[25em]'>
                  <img src="/house.png" className='w-[25em]' alt="Logo" />
                  <div className='text-[#01170C] text-xl font-mono font-medium pt-4'>Lorem ipsum dolor sit amet, adipiscing elit, adipiscing amet.</div>
                  <div className='py-1 w-32 flex justify-center mt-20 mb-24 px-2 bg-[#FEF3EB] text-[#6E330C] font-serif font-semibold rounded-3xl '>Technology</div>
                </div>
                <div className='w-[25em]'>
                  <img src="/house.png" className='w-[25em]' alt="Logo" />
                  <div className='text-[#01170C] text-xl font-mono font-medium pt-4'>Lorem ipsum dolor sit amet, adipiscing elit, adipiscing amet.</div>
                  <div className='py-1 w-32 flex justify-center mt-20 mb-24 px-2 bg-[#FEF3EB] text-[#6E330C] font-serif font-semibold rounded-3xl '>Finance</div>
                </div>
                <div className='w-[25em]'>
                  <img src="/house.png" className='w-[25em]' alt="Logo" />
                  <div className='text-[#01170C] text-xl font-mono font-medium pt-4'>Lorem ipsum dolor sit amet, adipiscing elit, adipiscing amet.</div>
                  <div className='py-1 w-32 flex justify-center mt-20 mb-24 px-2 bg-[#FEF3EB] text-[#6E330C] font-serif font-semibold rounded-3xl '>Art</div>
                </div>
                <div className='w-[25em]'>
                  <img src="/house.png" className='w-[25em]' alt="Logo" />
                  <div className='text-[#01170C] text-xl font-mono font-medium pt-4'>Lorem ipsum dolor sit amet, adipiscing elit, adipiscing amet.</div>
                  <div className='py-1 w-32 flex justify-center mt-20 mb-24 px-2 bg-[#FEF3EB] text-[#6E330C] font-serif font-semibold rounded-3xl '>Business</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestArticle;