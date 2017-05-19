// Combine all reducers here. Maybe each container can contain different reducer?

import { combineReducers } from 'redux'
import fetch from './fetch'

const rootReducer = combineReducers({
  fetch
})

export default rootReducer
