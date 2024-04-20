import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import PlayerStats from './components/PlayerStats';
import ServerInfo from './components/ServerInfo';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('loggedIn');
    if (isUserLoggedIn) {
      setLoggedIn(true);
    }
  }, []);


  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };


  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Domů</Link></li>
            <li><Link to="/player-stats">Statistiky hráče</Link></li>
            <li><Link to="/server-info">Informace o serverech</Link></li>
            {!loggedIn ? (
              <li><Link to="/login">Přihlásit se</Link></li>
            ) : (
              <li><button onClick={handleLogout}>Odhlásit se</button></li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/player-stats" component={PlayerStats} />
          <Route path="/server-info" component={ServerInfo} />
          <Route path="/login">
            <Login handleLogin={handleLogin} loggedIn={loggedIn} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
