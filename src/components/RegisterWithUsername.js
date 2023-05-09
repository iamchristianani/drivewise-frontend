import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerByUsername } from '../redux/registerByUSername';
// import './style components/registrations.css';

const RegisterWithUsername = () => {
  const dispatch = useDispatch();

  const [username, setUsename] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = dispatch(registerByUsername(username));
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setUsename('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Registration Failed');
      }
    }
  };

  return (
    <>
      <section className="Register">
        <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>

          <label className="login_label" htmlFor="username">
            Username:

            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsename(e.target.value)}
              value={username}
              className="login_form_comp"
              required
            />
          </label>
          <button className="login_form_comp" type="submit" disabled={username === ''}>login</button>
        </form>
      </section>
    </>
  );
};

export default RegisterWithUsername;
