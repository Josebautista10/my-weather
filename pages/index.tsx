import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Form from './components/Form'
import FormContainer from './components/Container'
import Nav from './components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <FormContainer/>
      {/* <Form /> */}
      <Footer />
    </>
  )
}

export default Home
