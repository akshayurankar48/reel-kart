import React from 'react'

const DefaultInput = () => {
  return (
    <div>
       <form className='ml-[23px]'>
    <input className='h-[48px] w-[274px] rounded-l-lg border-2 border-gray-400 text-[14px] font-normal text-center' placeholder="www.sleepyowl.com/reelkart" type="text" name="name" />
    <input className='p-2 bg-gray-100 ml-2 rounded-md text-[16px] font-normal' type="submit" value="Default Input" />
   </form>
    </div>
  )
}

export default DefaultInput