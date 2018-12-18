import React from 'react'
import { Dropdown, Icon, Menu, Button } from 'antd'
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
      <Trans>Aluno</Trans>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      <Trans>Pagamento</Trans>
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      <Trans>Explicador</Trans>
    </Menu.Item>
  </Menu>
)

const settingsMenu = (
  <Menu onClick={handleMenuClick}>
    {/* <Menu.Item key="1">
      <Icon type="user" />
      Aluno
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      Pagamento
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      Explicador
    </Menu.Item> */}
  </Menu>
)

const Header = () => (
  <div className={styles.container}>
    <SearchBox />

    <div>
      {/* <Dropdown overlay={menu}>
        <Icon type="plus-circle" theme="filled" className={styles.actionIcon} />
      </Dropdown> */}
      <Dropdown overlay={addNewMenu}>
        <Button type="primary">
          <Trans>Novo</Trans> <Icon type="plus" />
        </Button>
      </Dropdown>

      <Dropdown overlay={settingsMenu}>
        <Icon type="setting" theme="filled" className={styles.actionIcon} />
      </Dropdown>
    </div>
  </div>
)

export default Header
