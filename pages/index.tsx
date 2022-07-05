import type { NextPage } from 'next'
import Footer from './components/Footer'
import FormContainer from './components/Container'
import Nav from './components/Nav'

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
    <>
      <Nav />
      <FormContainer />
      {/* <Form /> */}
      <Footer />
    </>
  )

export default Home
