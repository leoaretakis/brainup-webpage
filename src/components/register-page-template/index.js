import React from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'

import backgroundImage from '../../resources/images/background-blue-tall.svg'
import logoImage from '../../resources/logo-brand.svg'

import styles from './styles.module.scss'

const RegisterPageTemplate = ({ children }) => (
  <Grid
    fluid
    className={styles.container}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Row className={styles.row}>
      <Col xs={12} sm={6} lg={4} className={styles.formColumn}>
        <img src={logoImage} alt="logo" className={styles.logoImage} />
        {children}
      </Col>
    </Row>
  </Grid>
)

export default RegisterPageTemplate
