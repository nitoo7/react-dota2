// Combine all reducers here. Maybe each container can contain different reducer?

import { combineReducers } from 'redux'
import login from './login'
import fetch from './fetch'

const rootReducer = combineReducers({
  login, fetch
})

export default rootReducer
