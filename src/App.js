import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogin, getToken } from './redux/modules/auth/selectors';

import Profile from './views/Profile';
import Map from './views/Map';
import Login from './views/Login';
import Registration from './views/Registration';
import Page404 from './views/Page404';
import './App.scss';

const App = () => {
  // const { getIsLogin } = useSelector('./redux/modules/auth/selectors.js');

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path={'/'} component={Map} exact />
            <Route path={'/login'} component={Login} />
            <Route path={'/registration'} component={Registration} />
            <Route path={'/profile'} component={Profile} />
            <Route component={Page404} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
