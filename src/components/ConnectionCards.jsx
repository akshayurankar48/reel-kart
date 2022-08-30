import React from 'react'
import { socials } from "../assets/data";
import ConnectionsCard from './ConnectionsCard';

const ConnectionCards = ({social}) => {
  return (
    <>
    <div className= ''>
    <div className='h-[62px] bg-gray-100 rounded-t-lg'>
            <h1 className='text-[24px] font-semibold mt-6 text-gray-500 p-[20px]'>Social Media</h1>
            </div>
    <div className="flex h-[284px] rounded-lg gap-x-[58px] -mt-20 p-4 grid-cols-1 bg-gray-100 ">
       {socials.slice(0, 6).map((social) => (
         <ConnectionsCard social={social} key={social.id} />
       ))}
     </div>
    </div>
   </>
  )
}

export default ConnectionCards