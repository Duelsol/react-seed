import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { importAll } from '../utils/operation'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
let reducers = {}
let sagas = []

const pushReducers = (array) => {
  for (let object of array) {
    reducers[object.default.name] = object.default
  }
}
try {
  pushReducers(importAll(require.context('src/redux/modules', true, /\.js$/)))
} catch (_) {
}

const pushSagas = (array) => {
  for (let object of array) {
    sagas.push(...Object.values(object))
  }
}
try {
  pushSagas(importAll(require.context('src/redux/sagas', true, /\.js$/)))
} catch (_) {
}

export default createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers
  }),
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  )
)

for (const saga of sagas) {
  sagaMiddleware.run(saga)
}
