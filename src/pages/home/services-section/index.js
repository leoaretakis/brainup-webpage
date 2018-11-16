import React from 'react'
import QueueAnim from 'rc-queue-anim'
import { Row, Col } from 'antd'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

import styles from './styles.module.scss'

const imageSources = [
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
    title: 'One-stop service access',
    content:
      'Four times the efficiency of payment, settlement, and accounting access products'
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
    title: 'One-stop risk monitoring',
    content:
      'Prior risk control and quality control capabilities in all requirements configuration'
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
    title: 'One-stop data operation',
    content:
      'Precipitation product access efficiency and operational small two work efficiency data'
  }
]

class ServicesSection extends React.PureComponent {
  render() {
    return (
      <div className={styles.container} {...this.props}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1>Pricing</h1>
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
