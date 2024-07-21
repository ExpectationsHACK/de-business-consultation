import React from 'react'

const Hover = () => {
  return (
      <div className="flex flex-col justify-between items-end pr-0 mr-0 ">
       
        <div className="flex flex-wrap justify-center mt-12 gap-4">
          <div className="w-64 bg-white/20  rounded-tl-2xl rounded-bl-2xl backdrop-filter backdrop-blur-lg border-1 border-white shadow-md">
            <h3 className="text-sm pl-4 pt-4 text-white">Business Management</h3>
            <div className='border-b  pl-0 border-gray-100 mt-2 w-64'></div>
            <p className="text-white text-[12px] pl-4 pt-2">REFINE YOUR SEARCH</p>
            <div className='flex flex-row gap-2 pl-4 pt-2 pb-4'>
              <div className='py-1 px-2 text-white text-[12px] rounded-full border border-white'>School</div>
              <div className='py-1 px-2 text-white text-[12px] rounded-full border border-white'>Tuition Fees </div>
              <div className='py-1 px-2 text-white text-[12px] rounded-full border border-white'>Start Date  </div>
            </div>
            <div className='border-b  pl-0 border-gray-100 mt-2 w-64'></div>
            <div className='flex flex-col gap-2 pl-4 pt-2 pb-4'>
              <div className='py-1 px-2 text-white text-[12px]'>Yale University</div>
              <div className='py-1 px-2 text-white text-[12px]'>Massachusetts Institute Of Technology</div>
              <div className='py-1 px-2 text-white text-[12px]'>Business Adminstration</div>
            </div>
          </div>
        </div>
        <div><img src='/plus.svg' alt="My descriptive image text" className='mt-4 p-4 rounded-full border border-white mr-8 bg-white/20 backdrop-filter backdrop-blur-lg' /></div> 
      </div>
  )
}

export default Hover;