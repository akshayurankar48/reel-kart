import React from 'react'
import AnalyticsCrads from './AnalyticsCrads'
import AnalyticsGraphs from './AnalyticsGraphs'
import AnalyticsHeader from './AnalyticsHeader'
import Header from './Header'
import Sidebar from './Sidebar'


const Analytics = () => {
  return (
    <div className="">
    <Header   />
    <main className="flex mt-3">
    <aside className="flex-[0.4] max-w-[240px]">
    <Sidebar  />
    </aside>
    <section className="flex-grow px-4 py-2 max-w-5xl">
    {/* <AnalyticsHeader/> */}
    <AnalyticsGraphs/>
    <AnalyticsCrads/>
    </section>
    </main>
    </div>
  )
}

export default Analytics