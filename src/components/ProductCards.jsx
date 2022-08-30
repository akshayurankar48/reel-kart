import React from 'react'
import { maps } from "../assets/data";
import ProductCard from './ProductCard'

function ProductCards({map}) {
  return (
    <>
   <div className= 'bg-gray-100 h-52 '>
   <div className="flex gap-x-3 -mt-20 p-4 grid-cols-1 bg-gray-100 ">
      {maps.slice(0, 5).map((map) => (
        <ProductCard map={map} key={map.id} />
      ))}
    </div>
   </div>
  </>
  )
}

export default ProductCards