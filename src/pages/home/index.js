import React from 'react'
import Header from '../../components/header'
import Banner from '../../components/banner'
import ServicesSection from './services-section'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ServicesSection id="services-section" />
    </div>
  )
}

export default Home
