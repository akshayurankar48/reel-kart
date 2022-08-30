import React from 'react'
import { socials } from "../assets/data";

const ConnectionsCard = ({social}) => {
  return (
//    {Images}
    <div
    className='h-[96px] w-[96px]  ml-[8px] mt-[70px] grid grid-cols-1'>
       <img  src={social.image} alt="" />

       {/* Footer */}
      {social.socialName &&
       <p className='py-3 px-3 text-[12px] text-center font-bold'>{social.socialName}</p>
      }
    </div>
  )
}

export default ConnectionsCard