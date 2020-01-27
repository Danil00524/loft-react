import React, { useState } from 'react';

import Profile from './views/Profile';
import Map from './views/Map';
import Login from './views/Login';
import Registration from './views/Registration';
import './App.scss';

import LoginContext from './context/Login';


const PAGES = {
  profile: setPage => <Profile setPage={setPage} />,
  map: setPage => <Map setPage={setPage} />,
  registration: setPage => <Registration setPage={setPage} />,
  login: setPage => <Login setPage={setPage} />,
}


function App() {
  const [page, setPage] = useState("map");
  const [isLoginIn, login] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoginIn, login }}>
      <div className="App">
        {PAGES[page](setPage)}
      </div>
    </LoginContext.Provider>

  );
}

export default App;
