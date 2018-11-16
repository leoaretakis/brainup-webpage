import React from 'react'
import { Button, Icon } from 'antd'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import Text from 'brainup-components/lib/text'

import BannerTitle from './title'

import 'rc-banner-anim/assets/index.css'
import bgImage from '../../resources/images/option3.jpg'
import brandNameImage from '../../resources/brand_name_blue.svg'

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
          <BannerTitle
            title={<img src={brandNameImage} alt="Brainup" />}
            subtitle={<Text type="displayLarge">Evoluí o teu cérebro!</Text>}
          >
            <Button type="primary">
              <Text color="reversed">Conheça nossos serviços</Text>
            </Button>
          </BannerTitle>
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
