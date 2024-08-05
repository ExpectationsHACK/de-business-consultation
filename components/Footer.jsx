import React from 'react'
import Link from 'next/link';
import Newsletter from './Newletters';

const Footer = () => {
  return (
    <div className='mt-12  mx-[40px]'>
        <div className='flex flex-row w-full justify-between pb-8 border-b-2 border-[#FFDAC2]'>
            <div className='flex flex-col gap-4'>
                <div><img src="/logo.png" alt="Logo" /></div>
                <div className='font-medium font-serif text-[#4F4D55] text-lg '>You are just one step away from transforming</div>
                <div className='flex flex-row'>
                <Link href="/about">
                        <p className='text-[#525866]  pr-4 py-2 rounded-lg  font-mono font-bold hover:bg-gray-100 focus:bg-gray-200'>About</p>
                    </Link>
                    <Link href='/servies'>
                        <p className='text-[#525866] px-4 py-2 rounded-lg font-mono font-bold  hover:bg-gray-100' >Contact Us</p>
                    </Link>
                    <Link href="/blog">
                        <p className='text-[#525866] font-mono font-bold px-4 py-2 rounded-lg hover:bg-gray-100'>Blog</p>
                    </Link>
                </div>
            </div>

            <div>
                <Newsletter />
            </div>
        </div>

        <div className='my-8 flex flex-row justify-between'>
            <div className='text-[#525866] font-medium font-serif '>© 2023 D&E Consulting - All rights reserved</div>
            <div className='flex flex-row gap-8'>
                <p className='text-[#525866] font-medium font-serif '>Terms & Conditions</p>
                <p className='text-[#525866] font-medium font-serif '>Cookies</p>
                <p className='text-[#525866] font-medium font-serif '>Privacy Policy</p>
            </div>
        </div>

    </div>
  )
}

export default Footer;