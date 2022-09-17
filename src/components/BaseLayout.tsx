import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

interface Props {
  children?: ReactNode
}

export const BaseLayout = ({ children }: Props) => {
  return <div className="flex flex-col min-h-screen">{children}</div>
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
