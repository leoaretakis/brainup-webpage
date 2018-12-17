import React from 'react'
import MediaQuery from 'react-responsive'
import Header from './header'
import Banner from './banner'
import ServicesSection from './services-section'
import Footer from './footer'
import AboutUs from './about-us'
import ContactSection from './contact-section'

const Mobile = props => <MediaQuery {...props} maxWidth={767} />

const LandingPage = () => {
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

export default LandingPage
