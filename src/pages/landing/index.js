import React from 'react'
import MediaQuery from 'react-responsive'
import Header from './header'
import Banner from './banner'
import ServicesSection from './services-section'
import Footer from './footer'
import AboutUs from './about-us'
import ContactSection from './contact-section'
import { withAuthorization } from '../../components/session'
import * as ROUTES from '../../constants/routes'

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

const condition = authUser => !authUser
const goToHome = () => ROUTES.HOME
export default withAuthorization(condition, goToHome)(LandingPage)
