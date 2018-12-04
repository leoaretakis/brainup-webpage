import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LandingPage from '../pages/landing'
import SignUpPage from '../pages/signup'
// import SignInPage from '../SignIn'
// import PasswordForgetPage from '../PasswordForget'
// import HomePage from '../Home'
// import AccountPage from '../Account'
// import AdminPage from '../Admin'

import * as ROUTES from '../constants/routes'

import 'brainup-components/src/styles/main.scss'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          {/* <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} /> */}
        </>
      </BrowserRouter>
    )
  }
}

export default App
