import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button } from 'antd'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import TweenOne from 'rc-tween-one'
import { Trans } from '@lingui/macro'
import Text from '../../../components/text'

import styles from './styles.module.scss'

const AboutUs = props => (
  <Grid fluid {...props} className={styles.container}>
    <Text type="displayExtraLarge" className={styles.title}>
      Sobre nós
    </Text>

    <Row>
      <Col md={6} xs={12}>
        <div className={styles.missonTextContainer}>
          <OverPack playScale={0.3}>
            <QueueAnim delay={400} type="bottom">
              <Text type="heading" className={styles.missonText} key="a">
                <Trans>
                  BrainUp is a tutoring center focused on students from the 1º,
                  2º e 3º cycles of primary school and high school (Portugal).
                </Trans>
              </Text>
              <Text type="heading" className={styles.missonText} key="b">
                <Trans>
                  The center has a mission of leveraging the development of the
                  students' skills regarding academic, personal and social
                  growth, instilling in them the appreciation for knowledge and
                  the sense of responsability and self improvement.
                </Trans>
              </Text>
              <Text type="heading" className={styles.missonText} key="c">
                <Trans>
                  We provide study room services, individual or group tutoring,
                  pedagogical and extracurricular activities.
                </Trans>
              </Text>
            </QueueAnim>
          </OverPack>
        </div>
      </Col>
      <Col md={6} xs={12}>
        <OverPack
          playScale={0.3}
          component={Row}
          className={styles.photosContainer}
        >
          <TweenOne
            key="img1"
            animation={{
              x: '=30',
              opacity: 0,
              type: 'from',
              ease: 'easeOutQuad'
            }}
            resetStyle
            component={Col}
            componentProps={{ md: 6, xs: 12 }}
          >
            <iframe
              title="photo1"
              className={styles.fbPhotoIframe}
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrainup.amadora%2Fphotos%2Fa.166987340666803%2F258384678193735%2F%3Ftype%3D3&width=350&show_text=false&height=437&appId"
              width="350"
              height="290"
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </TweenOne>
          <TweenOne
            key="img2"
            animation={{
              x: '=30',
              opacity: 0,
              type: 'from',
              ease: 'easeOutQuad'
            }}
            resetStyle
            component={Col}
            componentProps={{ md: 6, xs: 12 }}
          >
            <iframe
              title="photo2"
              className={styles.fbPhotoIframe}
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrainup.amadora%2Fphotos%2Fa.166987340666803%2F243310189701184%2F%3Ftype%3D3&width=350&show_text=false&height=262&appId"
              width="350"
              height="170"
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </TweenOne>
        </OverPack>
        <Row center="md" className={styles.photosButton}>
          <a
            href="https://www.facebook.com/pg/brainup.amadora/photos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Trans>More photos</Trans>
            </Button>
          </a>
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default AboutUs
