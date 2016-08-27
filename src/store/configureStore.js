import thunk from 'redux-thunk'
import DevTools from '../modules/tools/DevTools'
import rootReducer from '../reducers'
import { hashHistory } from 'react-router'
import { checkAuth } from '../middlewares'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'

const routerEnchancer = routerMiddleware(hashHistory)
const middlewares = applyMiddleware(thunk, checkAuth, routerEnchancer)


/* eslint-disable */
const enchancer = (APP_MODE === 'SITE')
  ? compose(middlewares,DevTools.instrument())
  : compose(middlewares)
/* eslint-enable */

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
