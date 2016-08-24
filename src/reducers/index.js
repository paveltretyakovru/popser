import user from './user'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

export default combineReducers({
  user,
  routing: routerReducer,
})
