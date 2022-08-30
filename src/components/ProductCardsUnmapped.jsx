import React from 'react'
import { maps } from "../assets/data";
import ProductCardUnmapped from './ProductCardUnmapped'

const ProductCardsUnmapped = ({map}) => {
  return (
    <>
    <div className= 'bg-gray-100  h-52 '>
    <div className="flex gap-x-3 -mt-20 p-4 grid-cols-2 bg-gray-100 ">
       {maps.slice(0, 5).map((map) => (
         <ProductCardUnmapped map={map} key={map.id} />
       ))}
     </div>
     <div className="flex gap-x-3 -mt-10 p-4 grid-cols-2 bg-gray-100 ">
       {maps.slice(5, 7).map((map) => (
         <ProductCardUnmapped map={map} key={map.id} />
       ))}
     </div>
    </div>
   </>
  )
}

export default ProductCardsUnmapped