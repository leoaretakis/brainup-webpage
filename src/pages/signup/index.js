import React, { Component } from 'react'
import { FirebaseContext } from '../../components/firebase'
import { Link, withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { Form, Input, Checkbox, Alert } from 'antd'
import Button from 'brainup-components/lib/button'
import Text from 'brainup-components/lib/text'

import styles from './styles.module.scss'
import { Grid, Col, Row } from 'react-flexbox-grid'
import backgroundImage from '../../resources/images/background-blue.svg'
import logoImage from '../../resources/logo-brand.svg'

class SignUpForm extends Component {
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

    const formItemLayout = {
      labelCol: { xs: { span: 24 }, sm: { span: 8 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
    }

    const tailFormItemLayout = {
      wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }
    }

    return (
      <div className={styles.formContainer}>
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
          <Form.Item {...formItemLayout} label={<Text tag="span">E-mail</Text>}>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: <Text tag="span">Email inválido</Text>
                },
                {
                  required: true,
                  message: <Text tag="span">Por favor, preencha seu email</Text>
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label={<Text tag="span">Password</Text>}
          >
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: (
                    <Text tag="span">Por favor, preencha sua password</Text>
                  )
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label={<Text tag="span">Confirme a Password</Text>}
          >
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: (
                    <Text tag="span">Por favor, confirme sua password</Text>
                  )
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label={<Text tag="span">Telefone</Text>}
          >
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: false,
                  message: (
                    <Text tag="span">
                      Por favor, preencha seu telefone/telemóvel
                    </Text>
                  )
                }
              ]
            })(<Input style={{ width: '100%' }} />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked'
            })(
              <Checkbox>
                <Text tag="span">
                  Li e aceito a <a href="">política de privacidade</a>
                </Text>
              </Checkbox>
            )}
          </Form.Item>
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

const SignUpFormCard = withRouter(Form.create()(SignUpForm))

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

const SignUpPage = () => (
  <Grid
    fluid
    className={styles.container}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Row className={styles.row}>
      <Col sm={12} md={6} className={styles.cardContainer}>
        <img src={logoImage} alt="logo" className={styles.logoImage} />
        <FirebaseContext.Consumer>
          {firebase => <SignUpFormCard firebase={firebase} />}
        </FirebaseContext.Consumer>
      </Col>
    </Row>
  </Grid>
)

export default SignUpPage

export { SignUpForm, SignUpLink }
