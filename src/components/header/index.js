import React from 'react'
import { Popover, Icon, Menu, Button } from 'antd'
import { Trans } from '@lingui/macro'
import SearchBox from '../search-box'

import styles from './styles.module.scss'

function handleMenuClick(e) {
  console.log('click', e)
}

const addNewMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      <Trans>Student</Trans>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="euro" />
      <Trans>Payments</Trans>
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="team" />
      <Trans>Tutors</Trans>
    </Menu.Item>
  </Menu>
)

const settingsMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="tool" />
      <Trans>Settings</Trans>
    </Menu.Item>
  </Menu>
)

const Header = () => (
  <div className={styles.container}>
    <SearchBox />

    <div>
      <Popover content={addNewMenu} placement="bottom">
        <Button type="primary">
          <Trans>New</Trans> <Icon type="plus" />
        </Button>
      </Popover>

      <Popover content={settingsMenu} placement="bottomRight">
        <Icon type="setting" theme="filled" className={styles.actionIcon} />
      </Popover>
    </div>
  </div>
)

export default Header
