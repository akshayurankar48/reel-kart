import React from 'react'
import { analytics } from "../assets/data";

const AnalyticsCard = ({analytic}) => {
  return (
    <div className="bg-white rounded-xl border-2 shadow-md p-3 border-gray-300">
    <div
      className={`h-12 w-12 ${
        analytic.whiteBg ? "bg-white" : "bg-gray-200"
      } shadow-lg rounded-lg flex items-center justify-center`}
    >
      <img src={analytic.icon} alt={analytic.cardTitle} />
    </div>

    <p className="text-4xl font-semibold text-gray-900 mt-3">{analytic.count}</p>

    <h2 className="text-xl font-semibold text-gray-900 mt-3">
      {analytic.cardTitle}
    </h2>

    <p className="text-base font-normal text-gray-400 mt-1">
      {analytic.cardDesc}
    </p>
  </div>
  )
}

export default AnalyticsCard