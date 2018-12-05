import React from 'react'

import RegisterPageTemplate from '../../components/register-page-template'
import SignInForm from '../../components/signin-form'
import { withAuthorization } from '../../components/session'
import * as ROUTES from '../../constants/routes'

const SignInPageBase = () => (
  <RegisterPageTemplate>
    <SignInForm />
  </RegisterPageTemplate>
)

const condition = authUser => !authUser
const goToHome = () => ROUTES.HOME
const SignInPage = withAuthorization(condition, goToHome)(SignInPageBase)

export default SignInPage
