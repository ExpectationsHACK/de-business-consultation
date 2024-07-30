'use client'
import React, {useState} from 'react'
import Hover from './Hover';

const SecondContainer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleHover = () => {
      setIsVisible(true);
    };
  
    const handleLeave = () => {
      setIsVisible(false);
    };
  
    return (
     

      <div
        className=" p-4 w-[20em] h-[2em]  pl-[20px] rounded-md"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <h2 className="text-xl text-[#1C7F4E] w-[20em] font-serif font-medium mb-4">Financial Analysis</h2>
        <div className='bg-contain w-[20em] h-[23.8em]' style={{backgroundImage: `url('image.png')`}}>
        <div className={` rounded-md ${isVisible ? '' : 'invisible'}`} >
          <Hover />
        </div>
        </div>
        <p className='text-[#01170C] w-[20em] font-sans font-light mt-4'>Gain clear insights and make informed decisions with our thorough financial analysis.</p> 
        <div className='border-b-4 w-[20em] mt-2 mb-8 border-[#C1FA6B] group-hover:border-black'></div> 
      </div>

      
    );
  };
  

export default SecondContainer;