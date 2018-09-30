import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AStyle = styled.a`
  color: #4566b5;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: #4566b5;
  }
`

const A = ({ children, href }) => <AStyle href={href}>{children}</AStyle>

A.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

A.defaultProps = {
  href: '',
}

export default A
