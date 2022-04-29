import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Form from './components/Form'
import Nav from './components/Nav'

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Form />
      <Footer />
    </div>
  )
}

export default Home
