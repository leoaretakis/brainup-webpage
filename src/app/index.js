import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { withAuthentication } from '../components/session'

import LandingPage from '../pages/landing'
import SignUpPage from '../pages/signup'
import SignInPage from '../pages/signin'
import SignOutPage from '../pages/signout'
import ForgotPasswordPage from '../pages/forgot-password'
import HomePage from '../pages/home'
import AdminPage from '../pages/admin'

import * as ROUTES from '../constants/routes'

import 'brainup-components/src/styles/main.scss'
import 'antd/dist/antd.css'

const App = () => (
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
)

export default withAuthentication(App)
