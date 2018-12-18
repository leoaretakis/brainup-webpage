import React from 'react'
import { Icon, Input, AutoComplete } from 'antd'

import styles from './styles.module.scss'

const dataSource = [
  {
    title: '话题',
    children: [
      {
        title: 'AntDesign',
        count: 10000
      },
      {
        title: 'AntDesign UI',
        count: 10600
      }
    ]
  },
  {
    title: '问题',
    children: [
      {
        title: 'AntDesign UI 有多好',
        count: 60100
      },
      {
        title: 'AntDesign 是啥',
        count: 30010
      }
    ]
  },
  {
    title: '文章',
    children: [
      {
        title: 'AntDesign 是一个设计语言',
        count: 100000
      }
    ]
  }
]

const SearchBox = () => (
  <div className={styles.container}>
    <AutoComplete
      className={styles.autocompleteContainer}
      dropdownMatchSelectWidth={false}
      size="large"
      dataSource={dataSource
        .map(group => (
          <AutoComplete.OptGroup
            key={group.title}
            label={
              <span>
                {group.title}
                <a
                  style={{ float: 'right' }}
                  href="https://www.google.com/search?q=antd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  更多
                </a>
              </span>
            }
          >
            {group.children.map(opt => (
              <AutoComplete.Option key={opt.title} value={opt.title}>
                {opt.title}
                <span className="certain-search-item-count">
                  {opt.count} 人 关注
                </span>
              </AutoComplete.Option>
            ))}
          </AutoComplete.OptGroup>
        ))
        .concat([
          <AutoComplete.Option disabled key="all" className="show-all">
            <a
              href="https://www.google.com/search?q=antd"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看所有结果
            </a>
          </AutoComplete.Option>
        ])}
      placeholder="Procurar"
      optionLabelProp="value"
    >
      <Input suffix={<Icon type="search" />} />
    </AutoComplete>
  </div>
)

export default SearchBox
