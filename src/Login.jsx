import React from 'react';

function Login({ handleLogin, loggedIn }) {
  const handleLoginClick = () => {
    handleLogin();
  };

  return (
    <div>
      <h2>Přihlášení</h2>
      {!loggedIn ? (
        <button onClick={handleLoginClick}>Přihlásit se</button>
      ) : (
        <p>Jste již přihlášený.</p>
      )}
    </div>
  );
}

export default Login;
