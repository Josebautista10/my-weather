import axios from 'axios'
import React, { useState } from 'react'
import Form from './Form'

function FormContainer() {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_KEY
  const [searchItem, setSearchItem] = useState('')
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)

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
      }).catch((error) => console.log(error))
  }
  console.log(data)

  return (
    <div className=' flex w-4/5 justify-center bg-blue-500'>
      <div className='flex justify-center flex-col w-full justify-center'>
        <h2>Search for any city:</h2>
        <div className='flex justify-center'>
          <form
            className='w-2/5 justify-center flex-col align-center flex bg-red-500'
            onSubmit={handleSubmit}
          >
            <input
              required
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder='My City'
            />
            <button type='submit'>submit</button>
          </form>
        </div>
        <div className="flex flex-col">
          <div className='flex'>
          <h1>{loaded && data.current.temp_c}</h1>
          <p>{loaded && data.current.condition.text} <img src={loaded && data.current.condition.icon} className=''></img></p>
          </div>
          <h2>{loaded && data.location.name}, {loaded && data.location.country}</h2>
        </div>
      </div>
    </div>
  )
}

export default FormContainer
