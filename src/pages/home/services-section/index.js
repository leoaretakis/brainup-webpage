import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { Grid, Row, Col } from 'react-flexbox-grid'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import Text from 'brainup-components/lib/text'

import styles from './styles.module.scss'

import studyRoomImage from '../../../resources/images/study-room.svg'
import tutorImage from '../../../resources/images/tutoring.svg'
import languageImage from '../../../resources/images/languages.svg'
import guitarImage from '../../../resources/images/guitar-player.svg'

const ServicesSection = props => {
  return (
    <Grid fluid {...props}>
      <Text type="displayExtraLarge" className={styles.title}>
        Serviços
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
            Salas de estudo - 1º ao 9º
          </Text>
          <Text key="b" className={styles.sectionText}>
            Permite auxiliar os alunos na elaboração dos trabalhos de casa, na
            resolução de fichas formativas, no esclarecimento de dúvidas e na
            preparação para a realização dos testes, das provas de aferição e
            dos exames nacionais.
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
            Explicações individuais - 1º ao 12º
          </Text>
          <Text key="d" className={styles.sectionText}>
            Permitem um acompanhamento mais detalhado e personalizado das
            disciplinas, visando o desenvolvimento de aprendizagens, a
            melhoria/recuperação das notas e a preparação para a realização das
            provas de aferição e dos exames nacionais.
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
            Aulas de línguas para adultos
          </Text>
          <Text key="b" className={styles.sectionText}>
            Destinam-se a adultos e visam a aquisição e a consolidação de
            conhecimentos e competências linguísticas - Português, Inglês e
            Francês. Disponibilizamos aulas de Português a cidadãos
            estrangeiros.
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
            Aulas de música - Viola/guitarra
          </Text>
          <Text key="d" className={styles.sectionText}>
            De forma a reforçar as aprendizagens dos alunos e a
            proporcionar-lhes um tempo de lazer, o centro disponibiliza um
            professor para aulas de música (viola/guitarra). A marcação das
            aulas é feita semanalmente, consoante a disponibilidade do
            professor.
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
