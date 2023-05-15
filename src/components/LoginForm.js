import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style-components/registrations.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v2 || !v3) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const response = dispatch(login(email, pwd));
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // clear state and controlled inputs
      // need value attrib on inputs for this
      setPwd('');
      setEmail('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="Register">
          <h1>Success!</h1>
          <p>
            <Link to="/Signup">Sign up</Link>
          </p>
        </section>
      ) : (
        <section className="Register">
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
          <h1>Log in</h1>
          <form className="login_form" onSubmit={handleSubmit}>

            <label className="login_label" htmlFor="email">
              <div>
                Email:
                <FontAwesomeIcon icon={faCheck} className={validEmail ? 'valid' : 'hide'} />
                <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? 'hide' : 'invalid'} />
              </div>

              <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby="eidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="login_form_comp"
              />
            </label>
            <p id="eidnote" className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label className="login_label" htmlFor="password">
              <div>
                Password:
                <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} />
              </div>

              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="login_form_comp"
              />
            </label>
            <p id="pwdnote" className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a special character.
              <br />
              Allowed special characters:
              {' '}
              <span aria-label="exclamation mark">!</span>
              {' '}
              <span aria-label="at symbol">@</span>
              {' '}
              <span aria-label="hashtag">#</span>
              {' '}
              <span aria-label="dollar sign">$</span>
              {' '}
              <span aria-label="percent">%</span>
            </p>

            <button className="login_form_comp" type="submit" disabled={!!(!validPwd || !validEmail)}>Log in</button>
          </form>
          <p>
            did not registered yet?
            <br />
            <span className="line">
              {/* put router link here */}
              <Link to="/Singup">Sign up</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default LoginForm;
