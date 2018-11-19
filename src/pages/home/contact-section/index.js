import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Text from 'brainup-components/lib/text'
import { Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import styles from './styles.module.scss'
import contactPageImage from '../../../resources/images/contact-page-image.svg'

const ContactSection = props => (
  <Grid
    fluid
    className={styles.container}
    {...props}
    style={{ backgroundImage: `url(${contactPageImage})` }}
  >
    <Row>
      <Col md={6} className={styles.textWrapper}>
        <OverPack playScale={0.3}>
          <QueueAnim delay={400} type="bottom">
            <Text key="a" className={styles.title} type="displayMedium">
              Contacte-nos
            </Text>
            <Text key="b" type="heading" className={styles.contactText}>
              <Icon type="phone" className={styles.contactIcon} />
              927 975 655
            </Text>
            <Text key="c" type="heading" className={styles.contactText}>
              <Icon type="compass" className={styles.contactIcon} />
              Rua Elias Garcia, nº287A Amadora
            </Text>
            <Text
              type="heading"
              className={styles.contactText}
              tag="a"
              key="d"
              href="mailto:brainup.amadora@gmail.com"
            >
              <Icon type="mail" className={styles.contactIcon} />
              brainup.amadora@gmail.com
            </Text>
          </QueueAnim>
        </OverPack>
      </Col>
      <Col md={6}>
        <iframe
          title="map"
          className={styles.mapContainer}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.1442666922835!2d-9.244927584198098!3d38.76039497959202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecda4f77a8c2b%3A0x89aa683a4ecca7ab!2sBrainUp+-+Centro+de+Estudo!5e0!3m2!1sen!2spt!4v1542635851249"
          width="400"
          height="300"
          frameBorder="0"
          allowFullScreen
        />
      </Col>
    </Row>
  </Grid>
)

export default ContactSection
