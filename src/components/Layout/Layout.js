import * as React from 'react'
import PropTypes from 'prop-types'

import Navigation from './Navigation'

const Layout = ({ children }) => (
  <div>
    <header>Logo</header>
    <Navigation />
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
