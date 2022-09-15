import React from 'react'
import PropTypes from 'prop-types'

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function BaseLayout({ children }) {
  return <>{children}</>
}
