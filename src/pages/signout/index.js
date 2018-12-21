import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Text from 'brainup-components/lib/text'

import logout from '../../api/logout'
import * as ROUTES from '../../constants/routes'

const noRepeat = [0]

const SignOutPage = () => {
  const [loggedOff, setLoggedOff] = useState(false)
  useEffect(() => {
    logout().then(() => setLoggedOff(true))
  }, noRepeat)

  return loggedOff ? (
    <Redirect to={ROUTES.LANDING} />
  ) : (
    <Text>Loggin off...</Text>
  )
}

export default SignOutPage
