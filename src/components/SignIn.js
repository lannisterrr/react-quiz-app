import { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useAuth } from '../context/auth-context';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';

function SignIn({ formError, setFormError }) {
  const { dispatch, setIsActive, signIn, loginState, googleSignIn, user } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/home');
    }
  }, [user]);

  const logInFormHandler = async e => {
    e.preventDefault();
    setFormError({
      errorMsg: '',
      isError: false,
    });
    try {
      await signIn(loginState.email, loginState.password);
      navigate('/home');
    } catch (e) {
      setFormError({
        errorMsg: e.message,
        isError: true,
      });
    }
  };
  return (
    <div className="form login">
      <div className="flex space-between">
        <span className="form__title heading-3">Login</span>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
      <form onSubmit={logInFormHandler}>
        <div className="input-field">
          <input
            value={loginState.email}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'email', value: event.target.value },
              })
            }
            type="email"
            placeholder="Enter your email"
            className="form__email-input"
            required
          />
          <i className="uil uil-envelope form-icon left-icon"></i>
        </div>
        <div className="input-field">
          <input
            value={loginState.password}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'password', value: event.target.value },
              })
            }
            type={loginState.showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className="form__email-input password"
            required
          />

          <i className="uil uil-lock form-icon left-icon"></i>
          <i
            onClick={() => dispatch({ type: 'PASSWORD_SHOW' })}
            className={`uil uil-eye${
              loginState.showPassword ? '' : '-slash'
            }  form-icon showHidePw`}
          ></i>
        </div>

        <div className="checkbox-container">
          <div className="checkbox-content">
            <Checkbox
              id="login-checkbox"
              title="Remember me"
              handleCheckboxChange={event =>
                dispatch({
                  type: 'SIGN_IN_CHECKBOX',
                  payload: event.target.checked,
                })
              }
              booleanChecked={loginState.rememberMe}
              name="login-checkbox"
            />
          </div>
          <a href="#" className="t-c-3 f-6 f-bold forget-password">
            Forget Password?
          </a>
        </div>

        <div className="input-field button-container">
          <button className="btn btn-danger t-c-1 final-cta w-100 ">
            Login Now
          </button>
          <button
            onClick={() => dispatch({ type: 'FILL_GUEST' })}
            className="btn outline-danger t-c-2 final-cta__2 w-100  m-v-2"
          >
            Guest Login
          </button>
        </div>
      </form>

      <div className="login-signup center-text p-v-4">
        <span className="f-6">
          Not a member?
          <span
            onClick={() => setIsActive(prev => !prev)}
            className="f-6 f-bold form-change-link  t-c-4 p-h-2"
          >
            Signup now
          </span>
        </span>
        {formError.isError && (
          <p className="f-7 t-c-3">Invalid UserName or Password</p>
        )}
      </div>
    </div>
  );
}

export { SignIn };
