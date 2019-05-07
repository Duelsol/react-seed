import { produce } from 'immer'

// Types
export const types = {
  SHOW_INVALID_USER_ALERT: 'app/SHOW_INVALID_USER_ALERT',
  HIDE_INVALID_USER_ALERT: 'app/HIDE_INVALID_USER_ALERT'
}

// Actions
export const actions = {
  showInvalidUserAlert() {
    return { type: types.SHOW_INVALID_USER_ALERT }
  },
  hideInvalidUserAlert() {
    return { type: types.HIDE_INVALID_USER_ALERT }
  }
}

// Reducer
const initialState = {
  invalidUserAlertVisible: false
}
const app = (state = initialState, action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SHOW_INVALID_USER_ALERT:
        draft.invalidUserAlertVisible = true
        break
      case types.HIDE_INVALID_USER_ALERT:
        draft.invalidUserAlertVisible = false
        break
    }
  })
export default app
