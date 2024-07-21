import React from 'react'
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import FourthContainer from './FourthContainer';
import FifthContainer from './FifthContainer';
import SixthContainer from './SixthContainer';

const FeaturesContainer = () => {
  return (
    <div className='flex no-scroll- overflow-y-scroll  h-[40em] gap-8 mt-8 my-[20px] mx-[80px]'>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
        <FifthContainer />
        <SixthContainer />
    </div>
  )
}

export default FeaturesContainer;