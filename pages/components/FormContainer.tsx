import axios from 'axios'
import React, { useState } from 'react'
import Form from './Form'
import WeatherDetails from './WeatherDetails'

function FormContainer() {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_KEY
  const [searchItem, setSearchItem] = useState('')
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [status, setStatus] = useState(0)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault()
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${searchItem}&aqi=no`
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
    <div className=' flex  justify-center bg-blue-500'>
      {!loaded ? (
        <div className='flex justify-center flex-col w-full justify-center'>
          <div className='flex justify-center'>
            <form
              className='w-2/5 justify-center flex-col align-center flex bg-red-500'
              onSubmit={handleSubmit}
            >
              <label>Search for any city:</label>
              <input
                required
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder='My City'
              />
              <button type='submit'>submit</button>
            </form>
          </div>
          {status === 400 && <p>Please check your spelling or try again</p>}
        </div>
      ) : (
        <div className='details'>
          {loaded && <WeatherDetails details={data} />}
        </div>
      )}
    </div>
  )
}

export default FormContainer
