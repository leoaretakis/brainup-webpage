import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Text from 'brainup-components/lib/text'
import { Button } from 'antd'

import styles from './styles.module.scss'

const AboutUs = props => (
  <Grid fluid {...props} className={styles.container}>
    <Text type="displayExtraLarge" className={styles.title}>
      Sobre nós
    </Text>

    <Row>
      <Col md={6} xs={12}>
        <div className={styles.missonTextContainer}>
          <Text type="heading" className={styles.missonText}>
            O BrainUp é um centro de estudo dedicado aos alunos dos 1º, 2º e 3º
            ciclos.
          </Text>
          <Text type="heading" className={styles.missonText}>
            O centro tem por missão proporcionar o desenvolvimento das
            capacidades dos alunos referentes ao crescimento académico, pessoal
            e social, incutindo-lhes o apreço pelo conhecimento e o sentido de
            exigência e responsabilidade.
          </Text>
          <Text type="heading" className={styles.missonText}>
            Dispomos dos serviços de sala de estudo, explicações individuais
            e/ou em grupo, atividades pedagógicas e atividades
            extracurriculares.
          </Text>
        </div>
      </Col>
      <Col md={6} xs={12}>
        <Row middle="md" className={styles.photosContainer}>
          <Col md={6}>
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
          </Col>
          <Col md={6}>
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
          </Col>
        </Row>
        <Row center="md">
          <Button>Ver mais fotos</Button>
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default AboutUs
