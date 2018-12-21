import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import TweenOne from 'rc-tween-one'
import { Link } from 'rc-scroll-anim'
import { Link as RouterLink } from 'react-router-dom'
import Text from '../../../components/text'
import { Button, Menu } from 'antd'
import classNames from 'classnames'
import { Col } from 'react-flexbox-grid'
import { Trans } from '@lingui/macro'

import * as ROUTES from '../../../constants/routes'
import logoBrandImg from '../../../resources/logo-brand-white.svg'

import styles from './styles.module.scss'

const menuItems = [
  { name: 'item0', a: { children: <Trans>Home</Trans>, href: '' } },
  {
    name: 'item2',
    a: {
      children: <Trans>About us</Trans>,
      to: 'about-us'
    }
  },
  {
    name: 'item1',
    a: {
      children: <Trans>Services</Trans>,
      to: 'services-section'
    }
  },
  {
    name: 'item3',
    a: {
      children: <Trans>Contacts</Trans>,
      to: 'contact-section'
    }
  }
]

class Header extends Component {
  state = {
    phoneOpen: false,
    menuHeight: 0
  }

  phoneClick = () => {
    const menu = findDOMNode(this.menu)
    const phoneOpen = !this.state.phoneOpen
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? menu.scrollHeight : 0
    })
  }

  render() {
    const { isMobile } = this.props
    const { menuHeight, phoneOpen } = this.state

    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        className={classNames(styles.container, phoneOpen && styles.menuOpen)}
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

        {isMobile && (
          <div className={styles.mobileMenu} onClick={() => this.phoneClick()}>
            <em />
            <em />
            <em />
          </div>
        )}

        <TweenOne
          animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
          style={isMobile ? { height: menuHeight } : null}
          component={Col}
          componentProps={{ md: 8, xs: 12, className: styles.menuWrapper }}
        >
          <Menu
            mode={isMobile ? 'inline' : 'horizontal'}
            defaultSelectedKeys={['0']}
            theme={isMobile ? 'dark' : 'default'}
            ref={ref => (this.menu = ref)}
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
            <Menu.Item name="button">
              <RouterLink to={ROUTES.SIGN_IN}>
                <Button ghost>
                  <Trans>Log in</Trans>
                </Button>
              </RouterLink>
            </Menu.Item>
          </Menu>
        </TweenOne>
      </TweenOne>
    )
  }
}

export default Header
