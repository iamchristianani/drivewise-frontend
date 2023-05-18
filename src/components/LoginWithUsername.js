import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Add this import
import { loginByUsername } from '../redux/loginByUsername';
import logo from '../images/drivewise_logo.png';
import './style-components/registrations.css';

const LoginWithUsername = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = dispatch(loginByUsername(username));
      setUsername('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-logo-cont">
        <img className="register-logo" src={logo} alt="logo" />
      </div>
      <section className="register">
        <p data-testid="err-msg" className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
          {errMsg}
        </p>
        <h1>Login</h1>
        <form
          className="login-form
"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="login-input"
              required
            />
          </label>
          <p>
            If you don&lsquo;t have an account, click here to
            {' '}
            <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
          {' '}
          <button className="login-button" type="submit" disabled={username === ''}>
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginWithUsername;
