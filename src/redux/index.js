import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { importAll } from '../utils/operation'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const reducers = {}
const sagas = []

const pushReducers = (array) => {
  array.forEach(object => {
    reducers[object.default.name] = object.default
  })
}
try {
  pushReducers(importAll(require.context('src/redux/modules', true, /\.js$/)))
} catch (_) {
}

const pushSagas = (array) => {
  array.forEach(object => {
    sagas.push(...Object.values(object))
  })
}
try {
  pushSagas(importAll(require.context('src/redux/sagas', true, /\.js$/)))
} catch (_) {
}

export default createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  }),
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  ),
)

sagas.forEach(saga => {
  sagaMiddleware.run(saga)
})
