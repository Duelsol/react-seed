import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import { actions } from 'src/redux/modules/app'
import Main from './components/Main'

class Layout extends Component {
  hideInvalidUserAlert = () => {
    this.props.dispatch(actions.hideInvalidUserAlert())
  }

  render() {
    return (
      <React.Fragment>
        <Main />
        <Modal
          title="提示"
          visible={this.props.invalidUserAlertVisible}
          keyboard={false}
          maskClosable={false}
          onCancel={this.hideInvalidUserAlert}
        >
          你已被登出，点击“确定”重新登录，或点击“取消”继续留在当前页面
        </Modal>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    invalidUserAlertVisible: state.app.invalidUserAlertVisible,
  }
}

export default connect(mapStateToProps)(Layout)
