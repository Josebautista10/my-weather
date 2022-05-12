import axios from 'axios'
import React, { useState } from 'react'
import Form from './Form'
import WeatherDetails from './WeatherDetails'
import { FiSearch } from 'react-icons/Fi'
import { TiWeatherCloudy } from 'react-icons/Ti'
import Forecast from './Forecast'

function FormContainer() {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_KEY
  const [searchItem, setSearchItem] = useState('')
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [status, setStatus] = useState(0)
  const [tempUnit, setTemptUnit] = useState(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault()
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${searchItem}&days=7&aqi=no&alerts=no`
      )
      .then((res) => {
        setData(res.data)
        setLoaded(true)
        setStatus(200)
      })
      .catch((error) => setStatus(error.response.status))
  }
  console.log(data)

  return (
    <div className=' flex justify-center items-center bg-slate-100 h-screen/9'>
      <div className=' w-3/4 h-4/5 bg-yellow-400 rounded-3xl'>
        <div className='flex justify-end mr-5 mt-2 '>
          {loaded && (
            <button
              className='flex items-center hover:text-blue-400 transition duration-500'
              onClick={() => setTemptUnit(!tempUnit)}
            >
              <TiWeatherCloudy className='xs:text-md  sm:text-lg  md:text-xl lg:text-2xl ' />
              {tempUnit ? '°F' : '°C'}
            </button>
          )}
        </div>
        <div className='flex  flex-col w-full  h-1/5'>
          <div className='flex justify-center flex-col'>
            <form
              className=' h-1/2 justify-center flex-col align-center flex p-6'
              onSubmit={handleSubmit}
            >
                <label className='text-2xl ml-4 mb-1'>Search for any city:</label>
              <div className='flex justify-center'>
                <input
                  required
                  onChange={(e) => setSearchItem(e.target.value)}
                  placeholder='My City'
                  className='w-9/10 mr-3 p-2 rounded-xl'
                />
                <button type='submit'>
                  <FiSearch className='xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl text-white hover:text-blue-400 transition duration-500' />
                </button>
              </div>
            </form>
          </div>
          {status === 400 && <p>Error occurred please try again.</p>}
        </div>

        {loaded && <><WeatherDetails details={data} tempUnit={tempUnit} /><Forecast data={data} tempUnit={tempUnit}/></>}
      </div>
    </div>
  )
}

export default FormContainer
