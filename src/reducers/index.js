// Combine all reducers here. Maybe each container can contain different reducer?

import { combineReducers } from 'redux'
import login from './login'

const rootReducer = combineReducers({
  login
})

export default rootReducer
