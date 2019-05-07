import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={`${this.props.match.path}demo`}
          render={
            _ => (
              <div>Demo</div>
            )
          }
        />
        <Route render={_ => (<div>404</div>)} />
      </Switch>
    )
  }
}

export default withRouter(Router)
