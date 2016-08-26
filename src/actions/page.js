import { push } from 'react-router-redux'

import {
  TOGGLE_DRAWER,
  SET_PAGE_TITLE,
} from '../constants/page'

export function routeToSearch() {
  return (dispatch) => {
    dispatch(push('/search'))
  }
}

export function routeToHome() {
  return (dispatch) => {
    dispatch(push('/'))
  }
}

export function setPageTitle(title) {
  return {
    type: SET_PAGE_TITLE,
    payload: title,
  }
}

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  }
}
