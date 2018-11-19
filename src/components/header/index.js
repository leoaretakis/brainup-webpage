import React from 'react'
import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'
import { Link } from 'rc-scroll-anim'
import Text from 'brainup-components/lib/text'

import logoBrandImg from '../../resources/logo-brand-white.svg'

import styles from './styles.module.scss'

const menuItems = [
  { name: 'item0', a: { children: 'Home', href: '' } },
  { name: 'item2', a: { children: 'Sobre nós', to: 'about-us' } },
  { name: 'item1', a: { children: 'Serviços', to: 'services-section' } },
  { name: 'item3', a: { children: 'Contactos', to: 'contact-section' } }
]

const Header = () => (
  <TweenOne
    component="header"
    animation={{ opacity: 0, type: 'from' }}
    className={styles.container}
  >
    <TweenOne
      animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
      className={styles.logoContainer}
    >
      <img
        width="100%"
        className={styles.logoImage}
        src={logoBrandImg}
        alt="img"
      />
    </TweenOne>

    <TweenOne animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['0']}
        theme="default"
        className={styles.menu}
      >
        {Object.keys(menuItems).map((key, i) => (
          <Menu.Item
            key={i}
            className={styles.menuItem}
            name={menuItems[key].name}
          >
            <Link to={menuItems[key].a.to}>
              <Text className={styles.menuLink}>
                {menuItems[key].a.children}
              </Text>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </TweenOne>
  </TweenOne>
)

export default Header
