import React from 'react'
import { getMonthName } from '../../utils/getMonthName'

// -----remember to make interface for the props------
function Forecast(props: any) {
  console.log(props)
  const { forecastday } = props.data.forecast
  const { tempUnit } = props
  const forecastReport = forecastday.map((date: any) => {
    const dateObj = getMonthName(date.date)
    return (
      <div className='bg-blue-200 p-8 rounded-xl' key={date.date}>
        <ul className='flex items-center flex-col text-md '>
          <li className='font-semibold'>
            {dateObj.monthName} {dateObj.day}, {dateObj.year}
          </li>

          <li>{date.day.condition.text}</li>
          <li>
            <img src={date.day.condition.icon} />
          </li>
          <li>
            Avg Temp:{' '}
            {tempUnit
              ? `${Math.floor(date.day.maxtemp_c)}°C`
              : `${Math.floor(date.day.maxtemp_f)}°f`}
          </li>
          <li>Avg Humidity: {date.day.avghumidity}%</li>
        </ul>
      </div>
    )
  })

  return (
    <div className='flex justify-around items-center h-1/2 '>
      {forecastReport}
    </div>
  )
}

export default Forecast
