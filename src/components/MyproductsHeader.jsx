import React from 'react'
import Toggle from './Toggle'

function MyproductsHeader() {
  return (
    <div className='flex h-[7 2px] w-full bg-gray-100 rounded-t-lg  py-4  px-[26px] items-start justify-between'>
        {/* My Products Header Left */}
        <div className=''>
        <h3 className='text-2xl text-gray-800 hover:cursor-pointer font-semibold'>Products</h3>
        <p className='text-base font-normal text-gray-600 '>5 Products Mapped</p>
        </div>
        {/* My Produts Header Right */}
        <div className='items-center gap-x-4  justify-between'>
        <Toggle/>
        </div>


    </div>
  )
}

export default MyproductsHeader