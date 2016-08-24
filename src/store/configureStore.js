import DevTools from '../modules/tools/DevTools'
import rootReducer from '../reducers'
import { hashHistory } from 'react-router'
import { checkAuth } from '../middlewares'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'

const routerEnchancer = routerMiddleware(hashHistory)
const enchancer = compose(
  applyMiddleware(checkAuth, routerEnchancer),
  DevTools.instrument(),
)

export function configureStore() {

  const	store	=	createStore(
    rootReducer,
    enchancer
  )

  if	(module.hot)	{
		module.hot.accept('../reducers',	()	=>	{
			const	nextRootReducer	=	require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}

  return store
}
