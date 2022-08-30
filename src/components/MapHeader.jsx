import React from 'react'
import plus from "../assets/math-plus.svg";
import search from "../assets/search.svg";
import stroke from "../assets/stroke.svg";


function MapHeader() {
  return (
    <div className='flex h-[7 2px] w-full bg-gray-100 shadow-md rounded-t-lg py-4 px-2 items-center justify-between'>
        {/* Map Header Left */}
        <div>
        <h3 className='text-2xl hover:cursor-pointer font-semibold'>Products</h3>
        </div>
        {/* Map Header Right */}
        <div className='flex items-center gap-x-4  justify-between'>
        <button className="h-8 w-44 flex items-center justify-center bg-stone-300 rounded-lg w-52 gap-x-3">
          <span className="text-black">Search Products</span>
          <img src={search} alt="search" />
         </button>
         <button className="h-8 w-44 flex items-center justify-center bg-stone-300 rounded-lg w-52 gap-x-3">
          <span className="text-black">Highlights Only</span>
          <img src={stroke} alt="add" />
         </button>
        <button className="h-10 w-44 flex items-center justify-center bg-black rounded-lg gap-x-3">
         <img src={plus} alt="add" />
          <span className="text-white">Upload Reels</span>
         </button>
        </div>
    </div>
  )
}

export default MapHeader





