import type { NextPage } from 'next'


import Header from '../components/home/Header'
import Footer from '../components/shared/Footer'
import Capacitance from '../pages/categories/Electricity/Capacitance'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Capacitance/>
      <Footer />
    </>
  )
}

export default Home
