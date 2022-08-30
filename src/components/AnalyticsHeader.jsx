import React from 'react'
import search from "../assets/search.svg";
import months from "../assets/months.png";

const AnalyticsHeader = () => {
  return (
    <div className='flex h-[7 2px] w-full bg-white  rounded-lg py-4 px-2 items-center justify-between'>
        {/* Header Left */}
        <div>
            <h1 className='text-[34px] font-semibold'>Revenue Stats</h1>
        </div>
        {/* Header Right */}
        <div className='flex'>
        <button className="h-[40px] w-44 flex items-center px-2 justify-center m-2 rounded-lg bg-gray-200  gap-x-3">
          <img className='' src={search} alt="search" />
          <span className="text-black">Search Products</span>
         </button>
         <div className='mt-[8px]'>
         <img className='' src={months} alt=''/>
         </div>
        </div>
    </div>
  )
}

export default AnalyticsHeader