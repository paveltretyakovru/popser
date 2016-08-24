import { createStore } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../modules/tools/DevTools'

export function configureStore() {
  const store = createStore(
    rootReducer,
    DevTools.instrument()
  )

  return store
}
