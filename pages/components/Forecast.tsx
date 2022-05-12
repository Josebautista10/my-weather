import React from 'react'
import {getMonthName} from '../../utils/getMonthName'

// -----remember to make interface for the props------
function Forecast(props: any) {
  const { forecastday } = props.data.forecast
  const { tempUnit } = props
  console.log('forecast', forecastday)
  const forecastReport = forecastday.map((date: any) => {

    const dateObj = getMonthName(date.date)
    console.log('dateobj',dateObj)
    // console.log(monthName)
    // console.log('hello', splitDate)
    return (
      <ul key={date.date} className='flex items-center flex-col text-md '>
        
          {dateObj.hasOwnProperty('monthName') && <li>{dateObj.monthName} {dateObj.day}, {dateObj.year}</li>}
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
    )
  })

  return (
    <div className='flex justify-around items-center h-4/10'>
      {forecastReport}
    </div>
  )
}

export default Forecast
