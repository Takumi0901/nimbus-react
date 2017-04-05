import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
// import createLogger from 'redux-logger'
import rootReducer from './RootReducer'

const reduxRouterMiddleware = routerMiddleware(browserHistory)
export default function configureStore() {

  const store = createStore(
    rootReducer
  )

  return store
}