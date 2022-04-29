import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Form from './components/Form'
import Nav from './components/Nav'

const Home: NextPage = () => {
  

  
  return (
    <div>
      <Nav/>
        <Form/>
    </div>
  )
}

export default Home
