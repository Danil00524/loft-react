import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from './views/Profile';
import Map from './views/Map';
import Login from './views/Login';
import Registration from './views/Registration';
import Page404 from './views/Page404';
import './App.scss';

import LoginContext from './context/Login';


const App = () => {
  const [isLoginIn, setLogin] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{ isLoginIn, setLogin }}>
        <Router>
          <Switch>
            <Route path={'/'} component={Map} exact />
            <Route path={'/login'} component={Login} />
            <Route path={'/registration'} component={Registration} />
            <Route path={'/profile'} component={Profile} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
