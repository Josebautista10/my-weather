import React from 'react'

function WeatherDetails(props: any) {
  console.log(props)
  const { current, location } = props.details
  console.log(current)
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <h1></h1>
        <p>
          {current.temp_c} {current.condition.text}
          <img src={current.condition.icon} className=''></img>
        </p>
      </div>
      <h2>
        {location.name}, {location.country}
      </h2>
    </div>
  )
}

export default WeatherDetails
