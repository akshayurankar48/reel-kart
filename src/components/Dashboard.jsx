import React from 'react'
import Header from './Header'
import Cards from './Cards'
import Welcome from './Welcome'
import Sidebar from './Sidebar'


function Dashboard() {
  return (
<div className="">
<Header   />
<main className="flex mt-3">
<aside className="flex-[0.4] max-w-[240px]">
<Sidebar  />
</aside>
<section className="flex-grow px-4 max-w-5xl">
<Welcome />
<Cards />
</section>
</main>
</div>

  )
}

export default Dashboard