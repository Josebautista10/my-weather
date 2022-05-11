import React from 'react'

// -----remember to make interface for the props------
function Forecast(props:any) {
  const {forecastday} = props.data.forecast
  console.log('forecast', forecastday)
  const forecastReport = forecastday.map((day: any) => {
   return  <ul key={day.date} className='flex items-center flex-col'>
      <li>{day.date}</li>
      <li>{day.day.condition.text}</li>
      <li><img src={day.day.condition.icon}/></li>
      <li>{day.day.maxtemp_c}</li>
      <li>{day.day.avghumidity}%</li>
    </ul>
    console.log(forecastReport);
    console.log(day.day.condition.text)
  }) 
  return (
    <div className='flex justify-around items-center'>{forecastReport}</div>
  )
}

export default Forecast