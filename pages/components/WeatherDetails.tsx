import React from 'react'

function WeatherDetails(props: any) {
  console.log(props)
  const { current, location } = props.details

  const currentDate = new Date(Date.now());
  const day = currentDate.getDate()
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear()
  console.log(current)
  return (
    <div className='flex  items-center flex-start'>
      <div className='flex flex-col w-1/2'>
        <div className='flex items-center '>
          <img src={current.condition.icon} className='w-3/20'></img>
          <p className='xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl'>
            {props.tempUnit
              ? `${current.temp_c}°C`
              : `${Math.floor(current.temp_f)}°F`}
          </p>
        </div>
        <p className='ml-6 xs:text-sm  sm:text-md  md:text-lg lg:text-xl'>
          {current.condition.text}
        </p>
      </div>
      <div className='flex w-1/2 justify-end mr-2'>
        <ul>
          <li>
            {location.name}, {location.country}
          </li>
          <li>
          {month} {day}, {year}
          </li>
        </ul>
      </div>
      <h2></h2>
    </div>
  )
}

export default WeatherDetails
