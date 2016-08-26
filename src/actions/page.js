import { push } from 'react-router-redux'

import {
  SET_PAGE_TITLE,
} from '../constants/page'

export function routeToSearch() {
  return (dispatch) => {
    dispatch(push('/search'))
  }
}

export function setPageTitle(title) {
  return {
    type: SET_PAGE_TITLE,
    payload: title,
  }
}
