import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

interface Props {
  children?: ReactNode
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <section className="mx-auto">
      <Header />
      {children}
    </section>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
