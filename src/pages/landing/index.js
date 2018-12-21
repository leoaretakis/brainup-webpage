import React, { useContext } from 'react'
import MediaQuery from 'react-responsive'
import { Redirect } from 'react-router-dom'
import Header from './header'
import Banner from './banner'
import ServicesSection from './services-section'
import Footer from './footer'
import AboutUs from './about-us'
import ContactSection from './contact-section'
import * as ROUTES from '../../constants/routes'
import AuthContext from '../../components/authentication/context'

const Mobile = props => <MediaQuery {...props} maxWidth={767} />

const LandingPage = () => {
  const authUser = useContext(AuthContext)

  return !authUser ? (
    <div>
      <Mobile>{isMobile => <Header isMobile={isMobile} />}</Mobile>
      <Banner />
      <AboutUs id="about-us" />
      <ServicesSection id="services-section" />
      <ContactSection id="contact-section" />
      <Footer />
    </div>
  ) : (
    <Redirect to={ROUTES.HOME} />
  )
}

export default LandingPage
