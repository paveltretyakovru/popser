import { createStore } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../modules/tools/DevTools'

export function configureStore() {

  const	store	=	createStore(rootReducer,	DevTools.instrument())
		if	(module.hot)	{
			module.hot.accept('../reducers',	()	=>	{
				const	nextRootReducer	=	require('../reducers').default
				store.replaceReducer(nextRootReducer)
			})
		}

  return store
}
