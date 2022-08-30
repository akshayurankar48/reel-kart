import React from 'react'
import Header from './Header'
import MyproductsHeader from './MyproductsHeader'
import ProdcuctHeadUnmapped from './ProdcuctHeadUnmapped'
import ProductCardsUnmapped from './ProductCardsUnmapped'
import ProductCards from './ProductCards'
import Sidebar from './Sidebar'
import Welcome from './Welcome'


function Myproducts() {


  return (
    <div className="">
    <Header   />
    <main className="flex mt-3">
    <aside className="flex-[0.4] max-w-[240px]">
    <Sidebar  />
    </aside>
    <section className="flex-grow px-4 py-2 max-w-5xl">
    <Welcome />
    <MyproductsHeader/>
    <ProductCards />
    <ProdcuctHeadUnmapped/>
   <ProductCardsUnmapped/>
    </section>
    </main>
    </div>
  )
}

export default Myproducts