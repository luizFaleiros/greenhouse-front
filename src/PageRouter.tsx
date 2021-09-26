import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './auth/login/Login';


const PageRouter = () => {
    return (<Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    </Router>);
}

export default PageRouter;