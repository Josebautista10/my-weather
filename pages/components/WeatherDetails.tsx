import React from 'react'
import {getMonthName} from '../../utils/getMonthName'


function WeatherDetails(props: any) {
  const { current, location } = props.details
  const {forecastday} = props.details.forecast
  console.log(forecastday)
  const {date} = forecastday[0]
  console.log(date)
  const dateObj = getMonthName(date)
  return (
    <div className='flex items-center flex-start ml-6 mr-6 mt-5'>
      <div className='flex flex-col w-1/2'>
        <div className='flex items-center '>
          <img src={current.condition.icon} className='w-3/20'></img>
          <p className='xs:text-xl  sm:text-2xl  md:text-3xl lg:text-4xl'>
            {props.tempUnit
              ? `${Math.floor(current.temp_c)}°C`
              : `${Math.floor(current.temp_f)}°F`}
          </p>
        </div>
        <ul className='ml-2 text-sm'>
          <li>Humidity: {current.humidity}%</li>
          <li>
            Feels like:{' '}
            {props.tempUnit
              ? `${Math.floor(current.feelslike_c)}°C`
              : `${Math.floor(current.feelslike_f)}°F`}
          </li>
          <li>Wind Speed: {Math.floor(current.wind_kph)}km/h</li>
        </ul>
        <p className='ml-6 xs:text-sm  sm:text-md  md:text-lg lg:text-xl'></p>
      </div>
      <div className='flex w-1/2 justify-end mr-2'>
        <ul className='flex items-end flex-col'>
          <li className='font-bold'>
            {location.name}, {location.country}
          </li>
          <li>
            {dateObj.monthName} {dateObj.day}, {dateObj.year}
          </li>
          <li>{current.condition.text}</li>
        </ul>
      </div>
    </div>
  )
}

export default WeatherDetails
