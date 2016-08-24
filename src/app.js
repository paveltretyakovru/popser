import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import DevTools from './modules/tools/DevTools'
import { configureStore } from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App'
import Home from './containers/Home'
import Users from './containers/Users'
import Login from './containers/Login'
import Search from './containers/Search'
import Serials from './containers/Serials'
import Register from './containers/Register'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>

          <IndexRoute component={Home}/>

          <Route path="login" component={Login} />
          <Route path="register" component={Register} />

          <Route path="users" component={Users}>
            <Route path=":id" component={Users} />
          </Route>

          <Route path="serials" component={Serials}>
            <Route path=":id" component={Serials} />
          </Route>

          <Route path="search" component={Search}>
            <Route path=":query" component={Search} />
          </Route>

        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('mount')
)
