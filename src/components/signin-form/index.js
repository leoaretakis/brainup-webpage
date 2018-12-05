import React, { Component } from 'react'
import { Form, Icon, Input, Checkbox, Alert } from 'antd'
import Button from 'brainup-components/lib/button'
import { withRouter } from 'react-router-dom'

import { withFirebase } from '../firebase'
import * as ROUTES from '../../constants/routes'

import styles from './styles.module.scss'

class SignInFormBase extends Component {
  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, { email, password }) => {
      if (!err) {
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.props.history.push(ROUTES.HOME)
          })
          .catch(error => {
            this.setState({ error })
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit} className={styles.container}>
        {this.state.error && (
          <Alert
            message={this.state.error && this.state.error.message}
            type="error"
            showIcon
            onClose={this.onCloseError}
            className={styles.errorAlert}
          />
        )}

        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Email inválido'
              },
              { required: true, message: 'Favor preencher o seu email' }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Favor preecher o seu password' }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Lembrar-me</Checkbox>)}
          <a className={styles.forgotPasswordLink} href="">
            Esqueceu a password?
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
          >
            Log in
          </Button>
          {/* Ou <a href="">registre-se aqui!</a> */}
        </Form.Item>
      </Form>
    )
  }
}

const SignInForm = withFirebase(withRouter(Form.create()(SignInFormBase)))

export default SignInForm
