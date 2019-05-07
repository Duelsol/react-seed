import { call, put, takeEvery } from 'redux-saga/effects'
import { types } from '../modules/user'
import { getUserList } from 'src/services/user'

export function* fetchUsers() {
  yield takeEvery(types.FETCH_USERS, function* () {
    const users = yield call(
      () => getUserList().then(result => result.data).catch(() => [])
    )
    yield put({
      type: types.SET_USERS,
      payload: { users }
    })
  })
}
