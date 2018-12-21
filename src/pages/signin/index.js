import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import RegisterPageTemplate from '../../components/register-page-template'
import SignInForm from '../../components/signin-form'
import AuthContext from '../../components/authentication/context'
import * as ROUTES from '../../constants/routes'

const SignInPage = () => {
  const authUser = useContext(AuthContext)

  return !authUser ? (
    <RegisterPageTemplate>
      <SignInForm />
    </RegisterPageTemplate>
  ) : (
    <Redirect to={ROUTES.HOME} />
  )
}

export default SignInPage
