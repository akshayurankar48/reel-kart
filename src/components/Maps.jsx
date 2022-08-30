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
    <div className="grid gap-x-0 gap-y-4 items-center justify-center -mt-8 bg-gray-100 grid-cols-5">
    {maps.slice(0, 1).map((map) => (
     <MapCard map={map} key={map.id} />
     ))}
</div>
  </>
  )
}

export default Maps



