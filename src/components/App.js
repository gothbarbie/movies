import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
import Home from 'views/Home/Home'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route component={Home} exact path="/" />
    </Layout>
  </BrowserRouter>
)

export default App
