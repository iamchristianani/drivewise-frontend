import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupByUsername } from '../redux/loginByUsername';
import logo from '../images/drivewise_logo.png';
import './style-components/registrations.css';

const SignupWithUsername = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = dispatch(signupByUsername(username));
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
        <h1>Sign Up</h1>
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
          <p>
            If you do have an account, click here to
            {' '}
            <Link to="/login" className="login-link">login</Link>
          </p>
          <button className="login-button" type="submit" disabled={username === ''}>
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignupWithUsername;
