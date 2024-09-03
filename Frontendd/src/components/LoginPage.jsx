import React, { useState } from 'react';
 
const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login:', { usernameOrEmail, password });
  };
 
  return (
    <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
      <h2>Log In Page</h2>
      
      <button style={buttonStyle}>
        <img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google logo"
          style={{ width: '20px', marginRight: '10px' }}
        />
        Log in with Google
      </button>
      
      <p style={{ textAlign: 'center', margin: '20px 0' }}>or</p>
 
      <form onSubmit={handleLogin}>
        <div style={inputContainerStyle}>
          <img
src="https://img.icons8.com/material-rounded/24/000000/user.png"
            alt="user icon"
            style={iconStyle}
          />
          <input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
 
        <div style={inputContainerStyle}>
          <img
src="https://img.icons8.com/material-rounded/24/000000/lock-2.png"
            alt="lock icon"
            style={iconStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
 
        <p style={{ textAlign: 'center', margin: '20px 0', cursor: 'pointer', color: 'blue' }}>
          Forget/Reset password?
        </p>
 
        <button type="submit" style={buttonStyle}>
          Log In
        </button>
      </form>
    </div>
  );
};
 
const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '15px',
  padding: '10px',
};
 
const inputStyle = {
  border: 'none',
  outline: 'none',
  width: '100%',
  padding: '5px',
};
 
const iconStyle = {
  width: '20px',
  marginRight: '10px',
};
 
const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4285F4',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};
 
export default LoginPage;
