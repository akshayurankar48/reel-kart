import React from 'react'
import mobilepreview from "../assets/mobilepreview.png";

const ReelStorePreviewsMobile = () => {
  return (
    <div className='mt-12'>
    <div className='ml-4'>
        <h3 className='ml-[18px] font-normal p-4 text-[16px]'>Mobile</h3>
        <img className='-mt-[6px] ' src={mobilepreview} alt="Desktop-preview" />
    </div>
   <div className='mt-[42px] ml-[1px]'>
   <button
      className="h-10 flex items-center justify-center bg-black rounded-lg w-[170px] gap-x-3"
    >
      <span className="text-white">Preview For Mobile</span>
    </button>
   </div>
</div>
  )
}

export default ReelStorePreviewsMobile


