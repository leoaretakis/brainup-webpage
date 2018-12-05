import React, { Component } from 'react'
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
    return <Text>Loggin off...</Text>
  }
}

const SignOutPage = withFirebase(withRouter(SignOutPageBase))

export default SignOutPage
