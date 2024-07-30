import React from 'react'

const ExploreContainer = () => {
  return (
    <div className='my-[20px] h-[76em] bg-[#01170C]'>
        <div>
            <div className='container mx-auto'>
                <h2 className='text-[#FFFFFF] leading-tight font-mono text-[3em] font-semibold pl-36 w-[18em] pt-32 '>Explore our  unique value proposition today.</h2>
                <p className='text-[#F9FEF0] text-[1.4em] pl-36 pt-4 font-serif font-light'>Introducing the extraordinary perks of teaming up with us!</p>
                {/* <div className='border-l-4 border-[#C1FA6B] '></div> */}
                <div className='pl-36 pt-8'>
                   <button className="gap-2 flex  justify-center items-center">
                    <a href="#" className="bg-[#C1FA6B] border border-[#03713A] text-[#01170C] px-4  py-3 rounded-xl  flex justify-center items-center hover:bg-[#C1FA6B] hover:border-none focus:bg-[#C1FA6B] focus:border-none">
                        <p className="mr-4 ml-4 font-serif  font-medium  text-lg">Schedule Consultation</p>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.129 10.23L9.106 6.20698L10.1665 5.14648L16 10.98L10.1665 16.8135L9.106 15.753L13.129 11.73H4V10.23H13.129Z" fill="#01170C"/>
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
            <div>
                <div className='container mx-auto pt-24 grid grid-cols-3 grid-rows-2 gap-8 w-[79em]'>
                    <div className='p-8 border border-[#C1FA6B] rounded-2xl  w-[24em]'>
                        <div className='p-4 w-12 rounded-xl flex justify-center items-center bg-[#C1FA6B]'><img src="/search.png" alt="Logo" /></div>
                        <div className='font-medium font-serif text-[#FFFFFF] pt-6 pb-6 text-xl'>Brand Perception</div>
                        <div className='text-[#FFFFFF] font-sans text-lg '>We ensure every interaction with your brand leaves a lasting, positive impression.</div>
                    </div>

                    <div className='p-8 border border-[#C1FA6B] rounded-2xl  w-[24em]'>
                        <div className='p-4 w-12 rounded-xl flex justify-center items-center bg-[#C1FA6B]'><img src="/handshake.png" alt="Logo" /></div>
                        <div className='font-medium font-serif text-[#FFFFFF] pt-6 pb-6 text-xl'>Investments & Acquisitions</div>
                        <div className='text-[#FFFFFF] font-sans text-lg '>Trust our expertise to guide you to smart, attractive investments.</div>
                    </div>

                    <div className='p-8 border border-[#C1FA6B] rounded-2xl  w-[24em]'>
                        <div className='p-4 w-12 rounded-xl flex justify-center items-center bg-[#C1FA6B]'><img src="/shield.png" alt="Logo" /></div>
                        <div className='font-medium font-serif text-[#FFFFFF] pt-6 pb-6 text-xl'>Crisis Management</div>
                        <div className='text-[#FFFFFF] font-sans text-lg '>From small businesses to big names, we offer honest, practical advice in any crisis or special situation.</div>
                    </div>

                    <div className='p-8 border border-[#C1FA6B] rounded-2xl  w-[24em]'>
                        <div className='p-4 w-12 rounded-full flex justify-center items-center bg-[#C1FA6B]'><img src="/diamond.png" alt="Logo" /></div>
                        <div className='font-medium font-serif text-[#FFFFFF] pt-6 pb-6 text-xl'>Quality</div>
                        <div className='text-[#FFFFFF] font-sans text-lg '>Our team stays up-to-date with ever-changing tax laws to provide you with the latest, most accurate information.</div>
                    </div>

                    <div className='p-8 border border-[#C1FA6B] rounded-2xl  w-[24em]'>
                        <div className='p-4 w-12 rounded-full flex justify-center items-center bg-[#C1FA6B]'><img src="/results.png" alt="Logo" /></div>
                        <div className='font-medium font-serif text-[#FFFFFF] pt-6 pb-6 text-xl'>Results</div>
                        <div className='text-[#FFFFFF] font-sans text-lg'>You will work closely with seasoned professionals to find the best solutions tailored to your needs.</div>
                    </div>

                    <div className='p-8 border border-[#C1FA6B] rounded-2xl  w-[24em]'>
                        <div className='p-4 w-12  rounded-full flex justify-center font-bold items-center bg-[#C1FA6B]'><img src="/loop.png" alt="Logo" /></div>
                        <div className='font-medium font-serif text-[#FFFFFF] pt-6 pb-6 text-xl'>Consistency</div>
                        <div className='text-[#FFFFFF] font-sans text-lg '>Delivering exceptional service to your customers is key to your long-term success, and we’re here to ensure it.</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ExploreContainer;