import React from 'react'
import { maps } from "../assets/data";
import  active from "../assets/active.svg";

function ProductCard({map}) {
  return (
    <div
    className='h-48 w-44 relative ml-[8px] mt-10 grid grid-cols-1'
  >
    {/* Tags Highlighted*/}
    <div className='absolute top-2 px-3 flex items-center justify-between w-full'>
      {map.highlighted && <span className='uppercase text-white bg-orange-300 rounded-md px-1 py-[2px] font-extrabold text-[10px] tracking-widest'>highlighted</span>}
       { map.active  && <span className='uppercase text-white bg-green-600 rounded-md px-1 py-[2px] font-extrabold text-[10px] tracking-widest'>active</span> }
      <div className=''>
        <img src={map.icon} alt="" />
      </div>
    </div>

    {/* Images */}
    <img src={map.image} alt="" />

    {/* Footer */}
    {map.productName &&
        <div className='absolute -bottom-1 left-0  text-center bg-gray-400 w-[168px] rounded-b-lg text-white text-[14px] font-semibold h-8'>
          <p className='mt-1'>{map.productName}</p>
        </div>
      }
  </div>


  )
}

export default ProductCard