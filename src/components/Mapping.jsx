import React from 'react'
import Header from './Header'
import MapHeader from './MapHeader'
import Maps from './Maps'
import Sidebar from './Sidebar'
import Welcome from './Welcome'

function Mapping() {
  return (
    <div className="">
    <Header   />
    <main className="flex mt-3">
    <aside className="flex-[0.4] max-w-[240px]">
    <Sidebar  />
    </aside>
    <section className="flex-grow px-4 py-2 max-w-5xl">
    <Welcome />
    <MapHeader/>
    <Maps/>
    </section>
    </main>
    </div>
  )
}

export default Mapping