import React from 'react'
import { render } from 'react-dom'
import {
    Router,
    Route,
    Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import UserList from './components/user/UserList';

const history = createBrowserHistory()
render (
    <Router history={history}>
        <Switch>
            <Route path='/' component={UserList} />
        </Switch>
    </Router>, document.getElementById('app')
)