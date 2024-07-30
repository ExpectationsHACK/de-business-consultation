import React from 'react'
import ReviewContactCard from './ReviewContactCard';

const Review = () => {
  return (
    <div className='bg-[rgb(254,243,235)] container mx-auto '>
        <div className='flex flex-col items-center justify-center'>
            <div className='text-[3.5em] font-medium pt-24 text-[#6E330C] font-serif '>What our clients say</div>
            <div className='text-[#F17B2C] font-medium text-xl pt-2 font-mono '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua.</div>
        </div>

        <div className='mt-24 pb-12 container mx-auto grid grid-cols-2 justify-center items-center grid-rows-2 gap-8 w-[75em]  '>
            <div className='border-b-8 border-r-8 border-t-2 border-l-2 bg-[#FFFFFF] border-[#F17B2C] w-[35em] p-12 rounded-2xl '>
              <div className='font-serif font-normal text-xl'>I was glad the day I discovered Kuzco’s poison. As the name indicates, it makes the process of creating content for publication incredibly easy.</div>
              <div className='flex flex-row gap-4 mt-12'>
                 <div><img src='/review.png' alt="My descriptive image text" className='' /></div>  
                 <div>
                   <div className='font-serif font-semibold text-lg'>Ahamd Ekstrom Bothman</div>
                   <div className='font-mono '>Lead Product Designer, Google</div>
                 </div>
              </div>

            </div>

            <div className='border-b-8 border-r-8 border-t-2 border-l-2 bg-[#FFFFFF] border-[#F17B2C] w-[35em] p-12 rounded-2xl '>
              <div className='font-serif font-normal text-xl'>I was glad the day I discovered Kuzco’s poison. As the name indicates, it makes the process of creating content for publication incredibly easy.</div>
              <div className='flex flex-row gap-4 mt-12'>
                 <div><img src='/review.png' alt="My descriptive image text" className='' /></div>  
                 <div>
                   <div className='font-serif font-semibold text-lg'>Ahamd Ekstrom Bothman</div>
                   <div className='font-mono '>Lead Product Designer, Google</div>
                 </div>
              </div>

            </div>

            <div className='border-b-8 border-r-8 border-t-2 border-l-2 bg-[#FFFFFF] border-[#F17B2C] w-[35em] p-12 rounded-2xl '>
              <div className='font-serif font-normal text-xl'>I was glad the day I discovered Kuzco’s poison. As the name indicates, it makes the process of creating content for publication incredibly easy.</div>
              <div className='flex flex-row gap-4 mt-12'>
                 <div><img src='/review.png' alt="My descriptive image text" className='' /></div>  
                 <div>
                   <div className='font-serif font-semibold text-lg'>Ahamd Ekstrom Bothman</div>
                   <div className='font-mono '>Lead Product Designer, Google</div>
                 </div>
              </div>

            </div>

            <div className='border-b-8 border-r-8 border-t-2 border-l-2 bg-[#FFFFFF] border-[#F17B2C] w-[35em] p-12 rounded-2xl '>
              <div className='font-serif font-normal text-xl'>I was glad the day I discovered Kuzco’s poison. As the name indicates, it makes the process of creating content for publication incredibly easy.</div>
              <div className='flex flex-row gap-4 mt-12'>
                 <div><img src='/review.png' alt="My descriptive image text" className='' /></div>  
                 <div>
                   <div className='font-serif font-semibold text-lg'>Ahamd Ekstrom Bothman</div>
                   <div className='font-mono '>Lead Product Designer, Google</div>
                 </div>
              </div>

            </div>
        </div>

        <div className='pb-20'>
          <ReviewContactCard />
        </div>

    </div>
  )
}

export default Review;