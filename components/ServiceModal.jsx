import { useRef, useEffect } from "react";

const ServiceModal = ({ onClose }) => {
    const modalRef = useRef(null);
  
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
  
    useEffect(() => {
      // Add event listener on document click
      document.addEventListener('click', handleClickOutside);
  
      // Cleanup function to remove listener on unmount
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);
  
    return (
      <div
        className="flex flex-wrap justify-content-start w-[20em] items-start absolute top-16 left-[22em] shadow-2xl border border-green-50  rounded-lg  bg-[#FFFFFF]"
        ref={modalRef}
        style={{ zIndex: 1 }}
      >
        <div><p className="text-[#01170C] text-[1em] p-2 pr-16 hover:bg-gray-100 m-2 rounded-lg">Accounting and Bookkeeping</p></div>
        <div><p className="text-[#01170C] text-[1em] p-2 pr-16 hover:bg-gray-100 m-2 rounded-lg">Business and Individual Taxes</p></div>
        <div><p className="text-[#01170C] text-[1em] p-2 pr-[9em] hover:bg-gray-100 m-2 rounded-lg">Business Formation</p></div>
        <div><p className="text-[#01170C] text-[1em] p-2 pr-[4.4em] hover:bg-gray-100 m-2 rounded-lg">Non-for-Profit Organizations</p></div>
        <div><p className="text-[#01170C] text-[1em] p-2 pr-[14.8em] hover:bg-gray-100 m-2 rounded-lg">Payroll</p></div>
      </div>
    );
  };
  
  export default ServiceModal;