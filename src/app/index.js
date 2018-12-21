import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { I18nProvider } from '@lingui/react'

import LandingPage from '../pages/landing'
import SignUpPage from '../pages/signup'
import SignInPage from '../pages/signin'
import SignOutPage from '../pages/signout'
import ForgotPasswordPage from '../pages/forgot-password'
import HomePage from '../pages/home'
import AdminPage from '../pages/admin'

import * as ROUTES from '../constants/routes'
import ptCatalog from '../locales/pt/messages.js'

import 'brainup-components/src/styles/main.scss'
import 'antd/dist/antd.css'
import Authentication from '../components/authentication'

const catalogs = { pt: ptCatalog }

const App = () => (
  <Authentication>
    <I18nProvider language="en" catalogs={catalogs}>
      <BrowserRouter>
        <>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.SIGN_OUT} component={SignOutPage} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            component={ForgotPasswordPage}
          />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          {/*  TODO  <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
           */}
        </>
      </BrowserRouter>
    </I18nProvider>
  </Authentication>
)

export default App
