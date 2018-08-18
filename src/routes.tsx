import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/user/UserList';
import { Admin } from './components/layout/Admin';

export const Routes = hot(module)(() => (
    <Router>
        <Admin>
            <Route path='/' component={UserList} />
            <Route path='/Category' component={UserList} />
            <Route path='/Product' component={UserList} />
        </Admin>
    </Router>
));

