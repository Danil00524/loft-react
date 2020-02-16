import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Profile from './views/Profile/Profile';
import Map from './views/Map/Map';
import Login from './views/Login/Login';
import Registration from './views/Registration/Registration';
import Page404 from './views/Page404/Page404';
import PrivateRoute from "./HOCs/PrivateRoute";
import Preloader from './components/Preloader';

import './App.scss';

const App = () => {
  const { isLogin, isLoading } = useSelector(state => state.auth);
  const { isLoadingCard } = useSelector(state => state.bankCard);
  const history = useHistory();

  useEffect(() => {
    if (isLogin) {
      history.push('/');
    }
  }, [isLogin])

  if (isLoading || isLoadingCard) return <Preloader />;

  return (
    <div data-testid='app' className="App">
      <Switch>
        <Route path={'/'} render={() => <Map />} exact />
        <Route path={'/login'} render={() => <Login />} exact />
        <Route path={'/registration'} render={() => <Registration />} exact />
        <PrivateRoute exact path={'/profile'} component={Profile} />
        <Route render={() => <Page404 />} />
      </Switch>
    </div>
  );
}

export default App;
