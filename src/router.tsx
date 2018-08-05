import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import UserList from './components/user/UserList'

const history = createBrowserHistory()

export const RouterComponent = hot(module)(() => (
  <Router history={history}>
    <Switch>
      <Route path='/' component={UserList} />
    </Switch>
  </Router>
));