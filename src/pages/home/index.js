import React from 'react'
import MediaQuery from 'react-responsive'
import Header from '../../components/header'
import Banner from '../../components/banner'
import ServicesSection from './services-section'
import Footer from '../../components/footer'
import AboutUs from './about-us'
import ContactSection from './contact-section'

const Mobile = props => <MediaQuery {...props} maxWidth={767} />

const Home = () => {
  return (
    <div>
      <Mobile>{isMobile => <Header isMobile={isMobile} />}</Mobile>
      <Banner />
      <AboutUs id="about-us" />
      <ServicesSection id="services-section" />
      <ContactSection id="contact-section" />
      <Footer />
    </div>
  )
}

export default Home
