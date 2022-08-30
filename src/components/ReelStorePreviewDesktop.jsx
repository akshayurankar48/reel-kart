import React from 'react'
import desktopview from "../assets/desktopview.png";
import external from "../assets/external.svg";

const ReelStorePreviewDesktop = () => {
  return (
    <div className='mt-12'>
        <div className='items-center justify-center'>
            <h3 className='ml-[226px] font-normal p-4 text-[16px]'>Desktop</h3>
            <img className='' src={desktopview} alt="Desktop-preview" />
        </div>
       <div className='pt-[36px] pl-44'>
       <button
          className="h-10 flex items-center justify-center bg-black rounded-lg w-52 gap-x-3"
        >
          <span className="text-white">Preview Reel Store</span>
          <img src={external} alt="add" />
        </button>
       </div>
    </div>
  )
}

export default ReelStorePreviewDesktop