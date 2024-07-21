import React from 'react'


const Section = () => {
  return (
    <>
    <div className="container mx-auto  flex-wrap flex-row  flex justify-center items-center w-[70em]">
            <div><h2 className="text-[3em] text-[#01170C] leading-tight font-serif font-medium">Discover how our tailored</h2></div> 
            <div><img src='/text1.svg' alt="My descriptive image text" className='bg-[#FEE9D1]'  /></div>  
            <div><h2 className="text-[3em] text-[#01170C] leading-tight font-serif font-medium">services</h2></div>
            <div><h2 className="text-[2.8em] leading-tight text-[#01170C] font-serif font-medium">and expert team can transform your</h2></div>
    </div>
    
    <div className="container mx-auto  flex-wrap flex-row  flex justify-center items-center">
            <div><h2 className="text-[2.8em] text-[#F17B2C] font-serif font-medium mr-[3em]">financial</h2></div> 
            <div><img src='/text2.svg' alt="My descriptive image text" className='mt-4 absolute left-[47em] top-[52em]' /></div>  
            <div><h2 className="text-[2.8em] text-[#F17B2C] font-serif font-medium">future.</h2></div>
    </div>
    </>

    )
}

export default Section