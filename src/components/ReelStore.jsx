import React from 'react'
import DefaultInput from './DefaultInput'
import Header from './Header'
import ReelStorePreviews from './ReelStorePreviewDesktop'
import ReelStorePreviewsMobile from './ReelStorePreviewsMobile'
import Sidebar from './Sidebar'
import Welcome from './Welcome'

const ReelStore = () => {
  return (
    <div className="">
    <Header   />
    <main className="flex mt-3">
    <aside className="flex-[0.4] max-w-[240px]">
    <Sidebar  />
    </aside>
    <section className="flex-grow px-4 py-2 max-w-5xl">
    <Welcome />
    <DefaultInput/>
    <div className='flex gap-52 -mt-2'>
    <ReelStorePreviews/>
    <ReelStorePreviewsMobile/>
    </div>
    </section>
    </main>
    </div>
  )
}

export default ReelStore