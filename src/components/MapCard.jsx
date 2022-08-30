import React from 'react'
import { maps } from "../assets/data";
import cx from 'classnames';

function MapCard({map}) {
  console.log(map)
  return (
    <div
      className='mt-10 h-40 w-44 grid grid-cols-2 grid-rows-2 relative'
    >
      {/* Tags */}
      <div className='absolute top-2 px-2 flex items-center justify-between w-full'>
        {map.highlighted && <span className='uppercase text-white bg-orange-300 rounded px-1 py-[2px] font-extrabold text-[10px] tracking-widest'>highlighted</span> }
        <div className=''>
          <img src={map.icon} alt="" />
        </div>
      </div>

      {/* Images */}
      {
        map?.images.map(img => (
          <div key={img.id} className={
            cx({
              'col-span-2 row-span-2': map.images.length === 1,
              'col-span-1': map.images.length === 2,
              'row-span-2': map.images.length === 3,
            })
          } >
            <img className='object-contain'  src={img.src} alt="" />
          </div>
        ))
      }
     

      {/* Footer */}
      {map.productName &&
          <div className='absolute -bottom-1 left-0 text-center bg-pink-200 w-full rounded-b-lg text-white text-base font-semibold h-8'>
            {map.productName}
          </div>
      }
    </div>

  )
}

export default MapCard;

