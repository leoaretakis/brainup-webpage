import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthContext from './context'
import { auth } from '../../api/firebase'

const Authentication = ({ children }) => {
  const { user } = useAuthState(auth)

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default Authentication
