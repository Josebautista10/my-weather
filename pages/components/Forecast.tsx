import React from 'react'

// -----remember to make interface for the props------
function Forecast(props: any) {
  const { forecastday } = props.data.forecast
  const {tempUnit} = props
  console.log('forecast', forecastday)
  const forecastReport = forecastday.map((day: any) => {
    return (
      <ul key={day.date} className='flex items-center flex-col text-md'>
        <li>{day.date}</li>
        <li>{day.day.condition.text}</li>
        <li>
          <img src={day.day.condition.icon} />
        </li>
        {/* tempUnit ? '°F' : '°C' */}
        <li>Avg Temp: {tempUnit ? `${Math.floor(day.day.maxtemp_c)}°C` : `${Math.floor(day.day.maxtemp_f)}°f`}</li>
        <li>Humidity: {day.day.avghumidity}%</li>
      </ul>
    )
  })

  return (
    <div className='flex justify-around items-center'>{forecastReport}</div>
  )
}

export default Forecast
