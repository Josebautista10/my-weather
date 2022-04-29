import type { NextPage } from 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=0c9ffc35e2f748bb9e2165503222904&q=London&aqi=no')
    .then((res) => setData(res.data))
  }, []);
  console.log(data)

  
  return (
    <div >
        hello
    </div>
  )
}

export default Home
