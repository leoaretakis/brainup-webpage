import React from 'react'
import { Redirect } from 'react-router-dom'
import LayoutBase from '../../components/layout-base'
import Authorized from '../../components/authorized'
import * as ROUTES from '../../constants/routes'

const HomePage = () => (
  <Authorized
    perform="home-page:visit"
    yes={() => (
      <LayoutBase page="home">
        ...
        <br />
        Really
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        long
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        content
      </LayoutBase>
    )}
    no={() => <Redirect to={ROUTES.SIGN_IN} />}
  />
)

export default HomePage
