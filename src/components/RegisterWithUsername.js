import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerByUsername } from '../redux/registerByUSername';
import logo from '../images/drivewise_logo.png';
import './style-components/registrations.css';

const RegisterWithUsername = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = dispatch(registerByUsername(username));
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setUsername('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Registration Failed');
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
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button className="login-button" type="submit" disabled={username === ''}>
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default RegisterWithUsername;
