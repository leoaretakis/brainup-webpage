import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.scss'

const Text = ({
  tag,
  type,
  color,
  fontColor,
  className,
  children,
  ...props
}) => {
  const classes = classNames(
    styles.text,
    styles[`fontType-${type}`],
    fontColor && `color-${fontColor}`,
    !fontColor && styles[`colorType-${color}`],
    className
  )

  return React.createElement(tag, { ...props, className: classes }, children)
}

Text.defaultProps = {
  tag: 'p',
  type: 'body',
  color: 'default'
}

Text.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.oneOf([
    'displayExtraLarge',
    'displayLarge',
    'displayMedium',
    'displaySmall',
    'heading',
    'subheading',
    'body',
    'caption'
  ]).isRequired,
  color: PropTypes.oneOf(['default', 'reversed', 'secondary']),
  fontColor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

Text.displayName = 'Text'

export default Text
