import React from 'react'
import QueueAnim from 'rc-queue-anim'
import { Row, Col } from 'antd'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

import styles from './styles.module.scss'

const imageSources = [
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
    title: 'Salas de estudo - 1º ao 9º anos',
    content:
      'Permite auxiliar os alunos na elaboração dos trabalhos de casa, na resolução de fichas formativas, no esclarecimento de dúvidas e na preparação para a realização dos testes, das provas de aferição e dos exames nacionais.'
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
    title: 'Explicações individuais - 1º ao 12º anos',
    content:
      'Permitem um acompanhamento mais detalhado e personalizado das disciplinas, visando o desenvolvimento de aprendizagens, a melhoria/recuperação das notas e a preparação para a realização das provas de aferição e dos exames nacionais.'
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
    title: 'Aulas de línguas para adultos',
    content:
      'Destinam-se a adultos e visam a aquisição e a consolidação de conhecimentos e competências linguísticas - Português, Inglês e Francês. Disponibilizamos aulas de Português a cidadãos estrangeiros.'
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
    title: 'Aulas de música - Viola/guitarra',
    content:
      'De forma a reforçar as aprendizagens dos alunos e a proporcionar-lhes um tempo de lazer, o centro disponibiliza um professor para aulas de música (viola/guitarra). A marcação das aulas é feita semanalmente, consoante a disponibilidade do professor.'
  }
]

class ServicesSection extends React.PureComponent {
  render() {
    return (
      <div className={styles.container} {...this.props}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1>Serviços</h1>
          </div>
          <OverPack playScale={0.3}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              className={styles.blockWrapper}
              component={Row}
            >
              {imageSources.map((item, i) => {
                return (
                  <Col
                    key={i}
                    className={styles.block}
                    name={`block${i}`}
                    md={8}
                    xs={24}
                  >
                    <div className={styles.icon}>
                      <img src={item.icon} width="100%" alt="img" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </Col>
                )
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default ServicesSection
