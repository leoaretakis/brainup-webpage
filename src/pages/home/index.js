import React from 'react'
import { Layout, Menu, Icon } from 'antd'

import { withAuthorization } from '../../components/session'
import logoBrandImg from '../../resources/logo-brand-white.svg'

const HomePage = () => (
  <Layout>
    <Layout.Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0
      }}
    >
      <div style={{ padding: 'var(--space-default)' }}>
        <img src={logoBrandImg} alt="logo" style={{ width: '100%' }} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="calendar" />
          <span className="nav-text">Calendário</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          <span className="nav-text">Alunos</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="upload" />
          <span className="nav-text">Pagamentos</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="bar-chart" />
          <span className="nav-text">Mês a mês</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="team" />
          <span className="nav-text">Explicadores</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="contacts" />
          <span className="nav-text">Pais</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Layout.Header
        style={{
          background: '#fff',
          padding: 0,
          position: 'fixed',
          zIndex: 1,
          width: 'calc(100% - 200px)',
          borderBottom: '1px solid var(--color-grey-300)'
        }}
      />
      <Layout.Content
        style={{ margin: 'calc(24px + 65px) 16px 0', overflow: 'initial' }}
      >
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Layout.Content>
    </Layout>
  </Layout>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)
