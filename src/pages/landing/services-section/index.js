import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { Grid, Row, Col } from 'react-flexbox-grid'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import Text from '../../../components/text'
import { Trans } from '@lingui/macro'
import styles from './styles.module.scss'

import studyRoomImage from '../../../resources/images/study-room.svg'
import tutorImage from '../../../resources/images/tutoring.svg'
import languageImage from '../../../resources/images/languages.svg'
import guitarImage from '../../../resources/images/guitar-player.svg'

const ServicesSection = props => {
  return (
    <Grid fluid {...props}>
      <Text type="displayExtraLarge" className={styles.title}>
        <Trans>Services</Trans>
      </Text>

      <OverPack playScale={0.3} component={Row} className={styles.serviceRow}>
        <TweenOne
          key="img"
          animation={{
            x: '-=30',
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad'
          }}
          resetStyle
          component={Col}
          componentProps={{ md: 6, xs: 12 }}
        >
          <img className={styles.image} src={studyRoomImage} alt="img" />
        </TweenOne>
        <QueueAnim
          key="text"
          type="right"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          component={Col}
          componentProps={{ md: 6, xs: 12 }}
        >
          <Text key="a" type="displayMedium" className={styles.sectionTitle}>
            <Trans>
              Study rooms - 1st to 9th cycles of primary school (Portugal)
            </Trans>
          </Text>
          <Text key="b" className={styles.sectionText}>
            <Trans>
              Help students elaborate their homework, solve training fiches,
              clarify questions and preparations for the tests, exams, and
              portuguese national exams.
            </Trans>
          </Text>
        </QueueAnim>
      </OverPack>

      <OverPack playScale={0.3} component={Row} className={styles.serviceRow}>
        <QueueAnim
          key="text2"
          type="left"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          component={Col}
          componentProps={{ md: 6, xs: 12 }}
        >
          <Text key="c" type="displayMedium" className={styles.sectionTitle}>
            <Trans>Individual tutoring - 1st to 12th school years</Trans>
          </Text>
          <Text key="d" className={styles.sectionText}>
            <Trans>
              More detailed and personalized assistance on the disciplines,
              aiming apprenticeship development, betterment of grades and
              preparation for tests, exams and portuguese national exams.
            </Trans>
          </Text>
        </QueueAnim>
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
          <img className={styles.image} src={tutorImage} alt="img" />
        </TweenOne>
      </OverPack>

      <OverPack playScale={0.3} component={Row} className={styles.serviceRow}>
        <TweenOne
          key="img"
          animation={{
            x: '-=30',
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad'
          }}
          resetStyle
          component={Col}
          componentProps={{ md: 6, xs: 12 }}
        >
          <img className={styles.image} src={languageImage} alt="img" />
        </TweenOne>
        <QueueAnim
          key="text"
          type="right"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          component={Col}
          componentProps={{ md: 6, xs: 12 }}
        >
          <Text key="a" type="displayMedium" className={styles.sectionTitle}>
            <Trans>Language classes for adults</Trans>
          </Text>
          <Text key="b" className={styles.sectionText}>
            <Trans>
              Focused on adults, the classes aim to consolidate and aquire
              knowledge and competence on languages - Porguguese, English and
              French. We provide Porguese classes for foreigners.
            </Trans>
          </Text>
        </QueueAnim>
      </OverPack>

      <OverPack playScale={0.3} component={Row} className={styles.serviceRow}>
        <QueueAnim
          key="text2"
          type="left"
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          component={Col}
          componentProps={{ md: 6, xs: 12 }}
        >
          <Text key="c" type="displayMedium" className={styles.sectionTitle}>
            <Trans>Music classes - Guitar</Trans>
          </Text>
          <Text key="d" className={styles.sectionText}>
            <Trans>
              Reinforce musical learning and giving leisure time to the
              students, the center provides a music teacher for those interested
              in guitar learning. The scheduling of the classes are done weekly,
              according with the availability of the teacher.
            </Trans>
          </Text>
        </QueueAnim>
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
          <img className={styles.image} src={guitarImage} alt="img" />
        </TweenOne>
      </OverPack>
    </Grid>
  )
}

export default ServicesSection
