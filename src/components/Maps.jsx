import React from 'react'
import { maps } from "../assets/data";
import MapCard from './MapCard';


function Maps() {
  return (
    <>
      {/* <div className="grid gap-x-3 grid-cols-1 ">
      {maps.slice(0, 2).map((map) => (
        <MapCard map={map} key={map.id} />
      ))}
    </div> */}
      <div className=" flex items-center justify-start  bg-gray-100">
        {maps.map((map) => (
          <MapCard map={map} key={map.id} />
        ))}
        <div className="flex   items-center justify-between max-w-[540px]  flex-wrap ml-5  ">
          {maps[0]?.reels.map((mapItem) => (
            <div className="h-[186px] w-[168px] mt-2">
              <img className="object-contain " src={mapItem.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Maps



