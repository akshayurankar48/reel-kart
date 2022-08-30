import React from 'react'
import ConnectionCards from './ConnectionCards'
import ConnectionsStore from './ConnectionsStore'
import Header from './Header'
import Sidebar from './Sidebar'
import Welcome from './Welcome'

const Connections = () => {
  return (
    <div className="">
    <Header   />
    <main className="flex mt-3">
    <aside className="flex-[0.4] max-w-[240px]">
    <Sidebar  />
    </aside>
    <section className="flex-grow px-4 py-2 max-w-5xl">
    <Welcome />
    <ConnectionsStore/>
    <ConnectionCards/>
    </section>
    </main>
    </div>
  )
}

export default Connections