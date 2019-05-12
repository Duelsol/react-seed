import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Layout} />
        </Router>
      </div>
    )
  }
}
