import React from 'react'
import { Dropdown, Icon, Menu, Button } from 'antd'
import SearchBox from '../search-box'

import styles from './styles.module.scss'

function handleMenuClick(e) {
  // message.info('Click on menu item.')
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
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
    </Menu.Item>
  </Menu>
)

const Header = () => (
  <div className={styles.container}>
    <SearchBox />

    <div>
      {/* <Dropdown overlay={menu}>
        <Icon type="plus-circle" theme="filled" className={styles.actionIcon} />
      </Dropdown> */}
      <Dropdown overlay={menu}>
        <Button type="primary">
          Novo <Icon type="plus" />
        </Button>
      </Dropdown>

      <Dropdown overlay={menu}>
        <Icon type="setting" theme="filled" className={styles.actionIcon} />
      </Dropdown>
    </div>
  </div>
)

export default Header
