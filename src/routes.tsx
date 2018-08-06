import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/user/UserList';

export const Routes = hot(module)(() => (
    <Router>
        <Switch>
            <Route path='/' component={UserList} />
        </Switch>
    </Router>
));

