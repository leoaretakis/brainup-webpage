import React from 'react'
import { Button, Icon } from 'antd'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import Text from 'brainup-components/lib/text'
import { Link } from 'rc-scroll-anim'

import BannerTitle from './title'

import 'rc-banner-anim/assets/index.css'
import bgImage1 from '../../resources/images/option3.jpg'
// import bgImage2 from '../../resources/images/option7.jpg'
// import bgImage3 from '../../resources/images/option2.jpg'
import brandNameImage from '../../resources/brand_name_blue.svg'

import styles from './styles.module.scss'

const followParallax = {
  delay: 1000,
  minMove: 0.1,
  data: [
    {
      id: `bg1`,
      value: 15,
      type: 'x'
    },
    { id: `wrapperBlock1`, value: -15, type: 'x' }
  ]
}

const Banner = props => (
  <div {...props} className={styles.container}>
    <TweenOneGroup
      key="bannerGroup"
      enter={{ opacity: 0, type: 'from' }}
      leave={{ opacity: 0 }}
      component=""
    >
      <BannerAnim
        type="acrossOverlay"
        dragPlay={false}
        autoPlay
        className={styles.bannerContainer}
      >
        <Element
          prefixCls={styles.bannerElement}
          key="a"
          followParallax={followParallax}
        >
          <Element.BgElement
            id="bg1"
            key="bg1"
            className={styles.bannerBackground}
            style={{ backgroundImage: `url('${bgImage1}')` }}
          />
          <BannerTitle
            id="wrapperBlock1"
            title={<img id="title" src={brandNameImage} alt="Brainup" />}
            subtitle={
              <Text id="content" type="displayLarge">
                Evoluí o teu cérebro!
              </Text>
            }
          >
            <Link to="services-section">
              <Button type="primary">
                <Text color="reversed">Conheça nossos serviços</Text>
              </Button>
            </Link>
          </BannerTitle>
        </Element>

        {/* <Element prefixCls={styles.bannerElement} key="b">
          <Element.BgElement
            key="bg2"
            className={styles.bannerBackground}
            style={{ backgroundImage: `url('${bgImage2}')` }}
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

        <Element prefixCls={styles.bannerElement} key="c">
          <Element.BgElement
            key="bg3"
            className={styles.bannerBackground}
            style={{ backgroundImage: `url('${bgImage3}')` }}
          />
          <BannerTitle
            title={<img src={brandNameImage} alt="Brainup" />}
            subtitle={<Text type="displayLarge">Evoluí o teu cérebro!</Text>}
          >
            <Button type="primary">
              <Text color="reversed">Conheça nossos serviços</Text>
            </Button>
          </BannerTitle>
        </Element> */}
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
