'use client'

import React, { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email Submitted:', email)
    // Implement your email submission logic here
    setEmail('')
  }

  return (
    <div className="">
      <div className='flex flex-col'> 
      <div className="font-medium font-mono text-[#01170C] text-base mb-4">Subscribe to our newsletter</div>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-start  items-center flex-row'>
        <div className="flex h-12  w-[26em]">
          <input
            type="email"
            placeholder="Enter your email"
            className="pr-44 pl-2 rounded-lg py-[2px] text-[#868C98] border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex h-12 justify-center">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-[#01170C] bg-[#C1FA6B] font-medium "
          >
            Subscribe
          </button>
        </div>
        </div>
      </form>
      </div> 
    </div>
  )
}

export default Newsletter;