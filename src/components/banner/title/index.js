import React from 'react'
import QueueAnim from 'rc-queue-anim'

import styles from './styles.module.scss'

const BannerTitle = ({ title, subtitle, children }) => (
  <div className={styles.container}>
    <QueueAnim
      type={['bottom', 'top']}
      delay={500}
      className={styles.animationWrapper}
    >
      <div key="1" className={styles.title}>
        {title}
      </div>
      <div key="2" className={styles.subtitle}>
        {subtitle}
      </div>
      <div key="3" className={styles.content}>
        {children}
      </div>
    </QueueAnim>
  </div>
)

export default BannerTitle
