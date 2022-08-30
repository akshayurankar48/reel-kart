import React from 'react'
import undo from "../assets/undo.svg";
import ToggleUnmapped from './ToggleUnmapped';

function ProdcuctHeadUnmapped() {
  return (
    <div className='flex h-[7 2px] w-full bg-gray-100 mt-16 px-2 items-start justify-between'>
    {/* My Products Header Left */}
    <div className='py-4  px-[20px]'>
    <h3 className='text-2xl text-gray-800 hover:cursor-pointer font-semibold'>Products</h3>
    <p className='text-base font-normal text-gray-600 '>20 Products Unmapped</p>
    </div>
    {/* My Produts Header Right */}
    <div className='flex items-center justify-center mr-[8px] p-2'>
    <div className='flex gap-3 items-center justify-center mr-6 -mt-[18px]'>
    <p className=''>Sync</p>
    <img src={undo} alt="" />
    </div>
    <div className=' gap-x-4 mt-[18px] justify-between'>
    <ToggleUnmapped/>
    </div>
    </div>
</div>
  )
}

export default ProdcuctHeadUnmapped