import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rate">Rate Movie</Link>
      </li>
    </ul>
    <div>
      <input type="search" />
      <Button>Search</Button>
    </div>
  </nav>
)

export default Navigation
