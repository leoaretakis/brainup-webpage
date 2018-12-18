import React from 'react'
import { withAuthorization } from '../../components/session'
import LayoutBase from '../../components/layout-base'

const HomePage = () => (
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
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)
