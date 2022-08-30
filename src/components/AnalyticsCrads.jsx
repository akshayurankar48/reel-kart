import React from 'react'
import { analytics } from "../assets/data";
import AnalyticsCard from './AnalyticsCard';

const AnalyticsCrads = ({analytic}) => {
  return (
    <>
    <div className="grid gap-4 grid-cols-4">
      {analytics.slice(0, 4).map((analytic) => (
        <AnalyticsCard analytic={analytic} key={analytic.id} />
      ))}
    </div>
    {/* <div className="grid gap-x-4 mt-4 grid-cols-3">
      {cards.slice(4, cards.length).map((card) => (
        <AnalyticsCrads card={card} key={card.id} />
      ))}
    </div> */}
  </>
  )
}

export default AnalyticsCrads