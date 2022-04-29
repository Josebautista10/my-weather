import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Form() {
  const APIKEY =  process.env.NEXT_PUBLIC_WEATHER_KEY
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
    <div >
      <form action="" onSubmit={handleSubmit}>
      <input required onChange={(e) => setSearchItem(e.target.value)} />
      <button type='submit' >
        submit
      </button>

      </form>
    </div>
  )
}

export default Form
