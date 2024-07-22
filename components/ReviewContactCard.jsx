import React from 'react'

const ReviewContactCard = () => {
  return (
    <div className="bg-orange-300  h-[20em] mt-12  mx-[80px] relative rounded-2xl overflow-hidden">
    <div className=" absolute inset-y-0 flex flex-col justify-center p-12 text-white z-10">
      <h1 className="w-[30em] font-mono mt-12 text-[2em] font-semibold mb-4 text-[#FFFFFF]">Ready to experience financial excellence? Let's start your journey to success today!</h1>
      <div className="mt-4 flex ">
        <button className="gap-2  justify-center items-center">
        <a href="#" className="bg-[#C1FA6B] border border-[#03713A] text-[#01170C] px-4  py-3 rounded-xl  flex justify-center items-center hover:bg-[#C1FA6B] hover:border-none focus:bg-[#C1FA6B] focus:border-none">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.75 10.315V12.967C13.7501 13.1569 13.6781 13.3397 13.5487 13.4786C13.4192 13.6176 13.2419 13.7022 13.0525 13.7155C12.7247 13.738 12.457 13.75 12.25 13.75C5.62225 13.75 0.25 8.37775 0.25 1.75C0.25 1.543 0.26125 1.27525 0.2845 0.9475C0.297792 0.758083 0.382436 0.580758 0.521353 0.451307C0.660269 0.321855 0.843117 0.249914 1.033 0.25H3.685C3.77803 0.249906 3.86777 0.284394 3.9368 0.346765C4.00582 0.409136 4.0492 0.494937 4.0585 0.5875C4.07575 0.76 4.0915 0.89725 4.1065 1.0015C4.25555 2.04169 4.561 3.05337 5.0125 4.00225C5.08375 4.15225 5.03725 4.3315 4.90225 4.4275L3.28375 5.584C4.27334 7.88984 6.11091 9.72741 8.41675 10.717L9.57175 9.1015C9.61896 9.0355 9.68784 8.98816 9.76637 8.96774C9.84491 8.94732 9.92812 8.95511 10.0015 8.98975C10.9503 9.4404 11.9617 9.74509 13.0015 9.8935C13.1058 9.9085 13.243 9.925 13.414 9.9415C13.5064 9.95098 13.592 9.99443 13.6543 10.0634C13.7165 10.1324 13.7509 10.2221 13.7507 10.315H13.75Z" fill="#01170C"/>
            </svg>
            <p className="ml-4 font-serif font-medium text-lg">Schedule Appointment</p>
            </a>
        </button>
        <button className="ml-8 ">
            <a href="#" className="text-[#03713A] border border-[#03713A] px-4 py-3 rounded-xl bg-[#ffffff]  flex hover:bg-[#C1FA6B] hover:border-none focus:bg-[#C1FA6B] focus:border-none">
                <p className="text-lg pr-4 pl-4 font-serif font-medium">Contact Us</p>
          </a>
      </button>
      </div> 
    </div>
  </div>
  )
}

export default ReviewContactCard;
