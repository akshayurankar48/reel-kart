import React from 'react'
import error from "../assets/error.svg";
import chevronRight from "../assets/chevron-right.svg";

function ErrorCard() {
  return (
       <div className='bg-white w-96 border-2 -mt-8 border-gray-300 rounded-lg shadow-lg p-3 flex flex-col items-center justify-center'>
        <div className='h-32 w-32'>
            <img src={error} alt="Error"/>
        </div>
       <h3 className='font-semibold text-2xl'>Something Isn't Right</h3>
        <p className=''>There seems to be an issue while connecting with your store. You may Try again or Contact Us</p>
         <div className=' mt-2 flex justify-between'>
            <button className='p-3 mr-5'>Contact Us</button>
            <button
          onClick={() => alert("Button Clicked")}
          className="h-10 mt-1 flex items-center justify-center bg-black rounded-lg w-[146px] gap-x-3"
        >
          <span className="text-white">Try Again</span>
          <img src={chevronRight} alt="add" />
          </button>
         </div>
       </div>
  )
}

export default ErrorCard