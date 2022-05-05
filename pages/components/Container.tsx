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
    <div className=' flex justify-center items-center bg-blue-500 h-screen'>
      <div className=' w-2/4 h-1/2 bg-green-500 rounded-3xl'>
        {!loaded ? (
          <div className='flex justify-center flex-col w-full justify-center h-3/4'>
            <div className='flex justify-center flex-col'>
            <label className=' text-2xl mb-2'>Search for any city:</label>
              <form
                className=' h-1/2 justify-center flex-col align-center flex bg-red-500 p-6'
                onSubmit={handleSubmit}
              >
                
                <div className='flex '>
                  <input
                    required
                    onChange={(e) => setSearchItem(e.target.value)}
                    placeholder='My City'
                    className='w-5/6 mr-3'
                  />
                  <button type='submit'>submit</button>
                </div>
              </form>
            </div>
            {status === 400 && <p>Error occurred please try again.</p>}
          </div>
        ) : (
          <div className='details'>
            {loaded && <WeatherDetails details={data} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default FormContainer
