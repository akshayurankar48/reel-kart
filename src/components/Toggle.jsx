import React from 'react'

function Toggle() {
  return (
    <div class="flex mb-10">
    <label for="checkbox" class="flex cursor-pointer">
     <div class="relative">
    <input type="checkbox"  id="checkbox" class="sr-only peer"/>
       <div class="block bg-gray-300 w-[148px]  h-10 rounded-[14px] pt-[2px]  pr-3 leading-9">
        <p className='text-sm p-2 text-right text-gray-600 font-normal'>Draft</p>

       </div>
     <div class="text-md text-center absolute left-1 top-1 bg-white w-[72px] h-8 rounded-xl peer-checked:translate-x-[68px] transition">
         <p className='p-1'> Active</p>
        </div>
      </div>
    </label>
  </div>
  )
}

export default Toggle