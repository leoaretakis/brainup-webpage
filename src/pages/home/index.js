import React from 'react'
import Header from '../../components/header'
import Banner from '../../components/banner'
import ServicesSection from './services-section'
import Footer from '../../components/footer'
import AboutUs from './about-us'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs id="about-us" />
      <ServicesSection id="services-section" />

      <Footer />
    </div>
  )
}

export default Home
