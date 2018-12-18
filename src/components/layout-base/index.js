import React from 'react'
import { Layout, Menu, Icon } from 'antd'

import styles from './styles.module.scss'
import logoBrandImg from '../../resources/logo-brand-white.svg'
import Header from '../header'

const menus = [
  { key: '1', name: 'home', label: 'Home', icon: 'home' },
  { key: '2', name: 'calendar', label: 'Calendário', icon: 'calendar' },
  { key: '3', name: 'students', label: 'Alunos', icon: 'user' },
  { key: '4', name: 'payments', label: 'Pagamentos', icon: 'euro' },
  { key: '5', name: 'charts', label: 'Mês a mês', icon: 'bar-chart' },
  { key: '6', name: 'tutors', label: 'Explicadores', icon: 'team' },
  { key: '7', name: 'parents', label: 'Pais', icon: 'contacts' }
]

const LayoutBase = ({ children, page }) => (
  <Layout>
    <Layout.Sider className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <img src={logoBrandImg} alt="logo" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={menus
          .filter(({ name }) => name === page)
          .map(({ key }) => key)}
      >
        {menus.map(({ key, label, icon }) => (
          <Menu.Item key={key}>
            <Icon type={icon} />
            <span>{label}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
    <Layout className={styles.mainRegionContainer}>
      <Layout.Header className={styles.headerContainer}>
        <Header />
      </Layout.Header>
      <Layout.Content className={styles.contentRegionContainer}>
        <div className={styles.contentContainer}>{children}</div>
      </Layout.Content>
    </Layout>
  </Layout>
)

export default LayoutBase
