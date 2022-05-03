import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Form() {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_KEY
  const [searchItem, setSearchItem] = useState('')
  const [data, setData] = useState({})

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault()
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${searchItem}&aqi=no`
      )
      .then((res) => setData(res.data))
  }
  console.log(data)

  return (

        <form className='w-2/5 justify-center flex-col align-center flex bg-red-500' onSubmit={handleSubmit}>
          <input required onChange={(e) => setSearchItem(e.target.value)} placeholder="My City"/>
          <button type='submit'>submit</button>
        </form>

  )
}

export default Form
