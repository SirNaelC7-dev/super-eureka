import type { NextPage } from 'next'


import Header from '../components/home/Header'
import Footer from '../components/shared/Footer'
import Dimension from '../pages/categories/Dimension'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Dimension/>
      <Footer />
    </>
  )
}

export default Home
