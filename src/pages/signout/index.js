import React, { Component } from 'react'
import { Trans } from '@lingui/macro'
import Text from 'brainup-components/lib/text'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../components/firebase'

import * as ROUTES from '../../constants/routes'

class SignOutPageBase extends Component {
  componentDidMount() {
    this.props.firebase.doSignOut().then(() => {
      this.props.history.push(ROUTES.LANDING)
    })
  }

  render() {
    return (
      <Text>
        <Trans>Loggin off...</Trans>
      </Text>
    )
  }
}

const SignOutPage = withFirebase(withRouter(SignOutPageBase))

export default SignOutPage
