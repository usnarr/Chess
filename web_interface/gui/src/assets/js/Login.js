import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  //console.log("Login component is rendering");
  const handleLogin = () => {
    localStorage.setItem('username', username);

    navigate('/gamemode');
  };

  return (
    <div className="login-container">
      <h2 className="main-text">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;