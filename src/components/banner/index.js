import React from 'react'
import { Button, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import bgImage from '../../../src/resources/images/option3.jpg'

import styles from './styles.module.scss'

const Banner = props => (
  <div {...props} className={styles.container}>
    <TweenOneGroup
      key="bannerGroup"
      enter={{ opacity: 0, type: 'from' }}
      leave={{ opacity: 0 }}
      component=""
    >
      <BannerAnim className={styles.bannerContainer}>
        <Element prefixCls={styles.bannerElement}>
          <Element.BgElement
            key="bg1"
            className={styles.bannerBackground}
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className={styles.bannerPage}>
            <QueueAnim
              type={['bottom', 'top']}
              delay={200}
              key="text"
              className={styles.bannerTextWrapper}
              id="wrapperBlock_0"
            >
              <div key="logo" className={styles.bannerTitle}>
                {/* <img src={title.children} width="100%" alt="img" /> */}
                <span className={styles.titleBlue}>Brain</span>
                <span className={styles.titleYellow}>Up</span>
              </div>
              <div key="content" className={styles.bannerContent}>
                Evolui o teu cérebro!
              </div>
              <Button type="ghost" key="button" className={styles.bannerButton}>
                Saiba mais
              </Button>
            </QueueAnim>
          </div>
        </Element>
      </BannerAnim>
    </TweenOneGroup>
    <TweenOne
      animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
      className={styles.bannerIcon}
      style={{ bottom: 40 }}
      key="icon"
    >
      <Icon type="down" />
    </TweenOne>
  </div>
)

export default Banner
