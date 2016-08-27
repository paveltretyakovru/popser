import $ from 'jquery'

import {
  USER_REGISTER_URL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_REQUEST_FAIL,
  USER_REGISTER_REQUEST_SUCCESS,
} from '../constants/user'

export function sendRegisterUser(data) {
  return (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    return $.post(USER_REGISTER_URL, data)
      .done(res => {
        console.info('user register success request', res);
        dispatch({
          type: USER_REGISTER_REQUEST_SUCCESS,
        })
      })
      .fail(res => {
        console.error('user register error request', res)
        dispatch({
          type: USER_REGISTER_REQUEST_FAIL,
        })
      })
  }
}
