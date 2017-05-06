import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
const loggerMiddleware = createLogger()

const configureStore = preloadedState => createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
)

export default configureStore
