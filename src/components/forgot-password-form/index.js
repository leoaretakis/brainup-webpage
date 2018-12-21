import React, { Component } from 'react'
import { Form, Icon, Input, Alert, Button } from 'antd'

import styles from './styles.module.scss'

class ForgotPasswordFormBase extends Component {
  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, { email }) => {
      if (!err) {
        this.props.firebase
          .doPasswordReset(email)
          .then(() => {
            // this.setState({ ...INITIAL_STATE })
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

        <Button
          type="primary"
          htmlType="submit"
          className={styles.submitButton}
        >
          Recuperar minha password
        </Button>
      </Form>
    )
  }
}

// const ForgotPasswordForm = withFirebase(Form.create()(ForgotPasswordFormBase))
const ForgotPasswordForm = Form.create()(ForgotPasswordFormBase)

export default ForgotPasswordForm
