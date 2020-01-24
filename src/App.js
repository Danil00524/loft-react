import React from 'react';

import Header from './components/Header';
import Profile from './views/Profile';
import Map from './views/Map';
import Login from './views/Login';
import Registration from './views/Registration';
import './App.scss';

const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  registration: setPage => <Registration setPage={setPage} />,
  login: setPage => <Login setPage={setPage} />,
}

function App() {
  const [page, setPage] = React.useState("login");

  return (
    <div className="App">
      {/* <Header setPage={setPage} /> */}
      {PAGES[page](setPage)}
    </div>
  );
}

export default App;
