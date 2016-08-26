/* eslint-disable */
export const checkAuth = store => next => action => {
  if(action.type === '@@router/LOCATION_CHANGE') {
    // console.log('Change location :))', action.payload.pathname, store.getState());
  }

  window.store = store
  return next(action)
}
