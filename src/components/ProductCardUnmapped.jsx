import React from 'react'
import { maps } from "../assets/data";

const ProductCardUnmapped = ({map}) => {
  return (

    <div
    className='h-48 w-44 relative ml-[8px] mt-10 grid grid-cols-1'
  >
    {/* Tags Highlighted */}
    <div className='absolute top-2 left-32 flex items-center justify-between w-full'>
    <img src={map.icon} alt="" />
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

export default ProductCardUnmapped