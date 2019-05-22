import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Layout} />
      </Router>
    </div>
  )
}
