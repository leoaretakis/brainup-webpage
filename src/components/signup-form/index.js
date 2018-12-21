import React, { Component } from 'react'
import { Form, Input, Alert } from 'antd'
import Button from 'brainup-components/lib/button'
import { withRouter } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import styles from './styles.module.scss'

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
}

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }
}

class SignUpFormBase extends Component {
  state = { error: null }

  onSubmit = event => {
    event.preventDefault()

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.firebase
          .doCreateUserWithEmailAndPassword(values.email, values.password)
          .then(authUser => {
            this.setState({ error: null })
            this.props.history.push(ROUTES.HOME)
          })
          .catch(error => {
            this.setState({ error })
          })
      }
    })
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('As passwords digitadas são inconsistêntes')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  onCloseError = () => {
    this.setState({ error: null })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.container}>
        {this.state.error && (
          <Alert
            message={this.state.error && this.state.error.message}
            type="error"
            closable
            showIcon
            onClose={this.onCloseError}
            className={styles.errorAlert}
          />
        )}

        <Form onSubmit={this.onSubmit}>
          <Form.Item {...formItemLayout} label={'E-mail'}>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'Email inválido'
                },
                {
                  required: true,
                  message: 'Por favor, preencha seu email'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={'Password'}>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, preencha sua password'
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={'Confirme a Password'}>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, confirme sua password'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={'Telefone'}>
            {getFieldDecorator('phone', {
              rules: [{ required: false }]
            })(<Input style={{ width: '100%' }} />)}
          </Form.Item>

          {/* TODO: <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
              rules: [
                {
                  required: true,
                  message: 'A política de proteção de dados deve ser aceite'
                }
              ]
            })(
              <Checkbox>
                Li e aceito a <a href="">política de proteção de dados</a>
              </Checkbox>
            )}
          </Form.Item> */}
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const SignUpForm = withRouter(Form.create()(SignUpFormBase))

export default SignUpForm
