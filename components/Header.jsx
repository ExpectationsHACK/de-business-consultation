'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import ServiceModal from './ServiceModal'
 



const Header = () => {
  const router = useRouter()

  const [showModal, setShowModal] = React.useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };


    

  return (
    <div className="h-[80px] fixed top-0 left-0 w-full z-50 bg-[#FFFCFB] py-[20px] px-[80px] shadow-xl">
      <header className="container mx-auto flex justify-between items-center">
        <nav className='flex space-x-12'>
          
            <button type="button" onClick={() => router.push('/')}>
                <img src="/logo.png" alt="Logo" />
            </button>

            <button type="button" onClick={() => router.push('/about')}>
                 <p className='text-[#525866]  px-4 py-2 rounded-lg  font-mono font-bold hover:bg-gray-100 focus:bg-gray-200'>About</p>   
            </button>
                
          <button onClick={handleClick}>
            <p className='text-[#525866] px-4 py-2 rounded-lg font-mono font-bold  hover:bg-gray-100' >Services</p>
            {showModal && <ServiceModal onClose={handleClose} />}
          </button>

          <button type="button" onClick={() => router.push('/blog/all')}>
             <p className='text-[#525866] font-mono font-bold px-4 py-2 rounded-lg hover:bg-gray-100'>Blog</p>
          </button>
         
     </nav>
      <div className='flex'>
          <button>
          <a href="#" className="text-[#03713A] border border-[#03713A] font-medium px-4 py-2 rounded-lg  flex hover:bg-[#C1FA6B] hover:border-none focus:bg-[#C1FA6B] focus:border-none">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M15.25 8.5H16C16.1989 8.5 16.3897 8.57902 16.5303 8.71967C16.671 8.86032 16.75 9.05109 16.75 9.25V16.75C16.75 16.9489 16.671 17.1397 16.5303 17.2803C16.3897 17.421 16.1989 17.5 16 17.5H4C3.80109 17.5 3.61032 17.421 3.46967 17.2803C3.32902 17.1397 3.25 16.9489 3.25 16.75V9.25C3.25 9.05109 3.32902 8.86032 3.46967 8.71967C3.61032 8.57902 3.80109 8.5 4 8.5H4.75V7.75C4.75 7.06056 4.8858 6.37787 5.14963 5.74091C5.41347 5.10395 5.80018 4.5252 6.28769 4.03769C6.7752 3.55018 7.35395 3.16347 7.99091 2.89963C8.62787 2.6358 9.31056 2.5 10 2.5C10.6894 2.5 11.3721 2.6358 12.0091 2.89963C12.646 3.16347 13.2248 3.55018 13.7123 4.03769C14.1998 4.5252 14.5865 5.10395 14.8504 5.74091C15.1142 6.37787 15.25 7.06056 15.25 7.75V8.5ZM4.75 10V16H15.25V10H4.75ZM9.25 11.5H10.75V14.5H9.25V11.5ZM13.75 8.5V7.75C13.75 6.75544 13.3549 5.80161 12.6517 5.09835C11.9484 4.39509 10.9946 4 10 4C9.00544 4 8.05161 4.39509 7.34835 5.09835C6.64509 5.80161 6.25 6.75544 6.25 7.75V8.5H13.75Z" fill="#03713A"/>
            </svg>
            Client Login
            
            </a>
          </button>
          <button className="ml-8">
            <a href="#" className="bg-[#C1FA6B] font-medium border border-[#03713A] text-[#01170C] px-4 py-[0.7em] rounded-lg ">
                Schedule Appointment
            </a>
          </button>
      </div> 
      </header>
     
    </div>
    
  )
}

export default Header