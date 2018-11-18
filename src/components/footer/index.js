import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import { Row, Col } from 'react-flexbox-grid'
import Text from 'brainup-components/lib/text'

import styles from './styles.module.scss'

import logo from '../../resources/logo-brand.svg'

class Footer extends React.Component {
  render() {
    return (
      <div {...this.props} className={styles.container}>
        <OverPack playScale={0.2}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            className={styles.sectionsContainer}
          >
            <Col
              key="0"
              name="block0"
              xs={12}
              md={3}
              className={styles.section}
            >
              <img src={logo} width="100%" alt="img" />
            </Col>
            <Col
              key="1"
              name="block1"
              xs={12}
              md={3}
              className={styles.section}
            >
              <Text
                color="reversed"
                className={styles.sectionTitle}
                type="displaySmall"
              >
                Morada
              </Text>
              <div className={styles.sectionOptions}>
                <Text color="reversed">Rua Elias Garcia, nº287A</Text>
                <Text color="reversed">2700-321, Amadora</Text>
              </div>
            </Col>

            <Col
              key="2"
              name="block2"
              xs={12}
              md={3}
              className={styles.section}
            >
              <Text
                color="reversed"
                className={styles.sectionTitle}
                type="displaySmall"
              >
                Horário
              </Text>
              <div className={styles.sectionOptions}>
                <Text color="reversed">Segunda a Sexta</Text>
                <Text color="reversed">9h - 13h</Text>
                <Text color="reversed">14h30 - 19h30</Text>
                <Text color="reversed">Sábado</Text>
                <Text color="reversed">10h - 13h</Text>
              </div>
            </Col>

            <Col
              key="3"
              name="block3"
              xs={12}
              md={3}
              className={styles.section}
            >
              <Text
                color="reversed"
                className={styles.sectionTitle}
                type="displaySmall"
              >
                Contactos
              </Text>
              <div className={styles.sectionOptions}>
                <Text color="reversed">brainup.amadora@gmail.com</Text>
                <Text color="reversed">927 975 655</Text>
              </div>
            </Col>
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            className={styles.copyrightSection}
          >
            <Text color="secondary">
              ©2018 by{' '}
              <a href="mailto:leoaretakis@gmail.com">Leonardo Aretakis</a> All
              Rights Reserved
            </Text>
          </TweenOne>
        </OverPack>
      </div>
    )
  }
}

export default Footer
