import axios from 'axios'
import { useState } from 'react'

const weatherApi =  async (searchItem: string) => {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_KEY
  console.log(searchItem)
  
  const responseData = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${searchItem}&days=7&aqi=no&alerts=no`
    )
    return responseData
}

export default weatherApi
