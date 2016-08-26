import { push } from 'react-router-redux'

export function routeToSearch() {
  return (dispatch) => {
    dispatch(push('/search'))
  }
}
