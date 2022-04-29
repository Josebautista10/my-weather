import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import axios from 'axios'
import TextField from '@mui/material/TextField'

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
    <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField required onChange={(e) => setSearchItem(e.target.value)} />
      <Button type='submit' variant='contained'>
        submit
      </Button>
    </Box>
  )
}

export default Form
