import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from './views/Profile';
import Map from './views/Map';
import Login from './views/Login';
import Registration from './views/Registration';
import Page404 from './views/Page404';
import PrivateRoute from "./HOCs/PrivateRoute";

import './App.scss';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path={'/'} component={Map} exact />
            <Route path={'/login'} component={Login} />
            <Route path={'/registration'} component={Registration} />
            <PrivateRoute exact path={'/profile'} component={Profile} />
            <Route component={Page404} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
