import { call, put, takeEvery } from 'redux-saga/effects'
import { getUserList } from 'src/services/user'
import { types } from '../modules/user'

export default function* watchFetchUsers() {
  yield takeEvery(types.FETCH_USERS, function* fetchUsers() {
    const users = yield call(
      () => getUserList().then(result => result.data).catch(() => []),
    )
    yield put({
      type: types.SET_USERS,
      payload: { users },
    })
  })
}
