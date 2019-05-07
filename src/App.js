import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from './redux/modules/app'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Modal } from 'antd'
import Layout from './pages/layout/Layout'

class App extends Component {
  hideInvalidUserAlert = () => {
    this.props.dispatch(actions.hideInvalidUserAlert())
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Layout} />
        </Router>
        <Modal
          title="提示"
          visible={this.props.invalidUserAlertVisible}
          keyboard={false}
          maskClosable={false}
          onCancel={this.hideInvalidUserAlert}
        >
          你已被登出，点击“确定”重新登录，或点击“取消”继续留在当前页面
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    invalidUserAlertVisible: state.app.invalidUserAlertVisible
  }
}

export default connect(mapStateToProps)(App)
