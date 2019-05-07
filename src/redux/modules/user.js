import { produce } from 'immer'

// Types
export const types = {
  FETCH_USERS: 'user/FETCH_USERS',
  SET_USERS: 'user/SET_USERS'
}

// Actions
export const actions = {
  fetchUsers() {
    return {
      type: types.FETCH_USERS
    }
  },
  setUsers(users) {
    return {
      type: types.SET_USERS,
      payload: { users }
    }
  }
}

// Reducer
const initialState = {
  users: []
}
const user = (state = initialState, action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_USERS:
        draft.users = action.payload.users
        break
    }
  })
export default user
