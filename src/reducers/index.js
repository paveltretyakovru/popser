import user from './user'
import page from './page'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

export default combineReducers({
  page,
  user,
  routing: routerReducer,
})
