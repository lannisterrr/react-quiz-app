import { Checkbox } from './Checkbox';
import { useAuth } from '../context/auth-context';

import { useNavigate, useLocation } from 'react-router-dom';

function SignUp({ formError, setFormError }) {
  const { loginState, dispatch, createUser, setIsActive } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const formSubmitHandler = async e => {
    e.preventDefault();
    const letter = /[a-zA-Z]/;
    const number = /[0-9]/;
    const valid =
      number.test(loginState.signUpConfirmPassword) &&
      letter.test(loginState.signUpConfirmPassword);

    const passwordMatch =
      loginState.signUpPassword === loginState.signUpConfirmPassword;

    if (passwordMatch && valid) {
      try {
        await createUser(
          loginState.signUpEmail,
          loginState.signUpConfirmPassword
        );
        navigate('/');
      } catch (e) {
        console.log(e);
      }
    } else {
      !passwordMatch &&
        setFormError({
          errorMsg: 'Password not matched',
          isError: true,
        });

      !valid &&
        setFormError({
          errorMsg: 'Password should be alpha numeric',
          isError: true,
        });
      setTimeout(() => setFormError(false), 2000);
    }
  };

  return (
    <div className="form sign-up">
      <span className="form__title heading-3">Sign up</span>
      <form onSubmit={formSubmitHandler}>
        <div className="input-field">
          <input
            value={loginState.signUpFirstName}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpFirstName', value: event.target.value },
              })
            }
            type="text"
            placeholder="First Name"
            className="form__email-input"
            required
          />
          <i className="uil uil-user form-icon left-icon"></i>
        </div>

        <div className="input-field">
          <input
            value={loginState.signUpLastName}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpLastName', value: event.target.value },
              })
            }
            type="text"
            placeholder="Last Name"
            className="form__email-input"
            required
          />
          <i className="uil uil-user form-icon left-icon"></i>
        </div>

        <div className="input-field">
          <input
            value={loginState.signUpEmail}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpEmail', value: event.target.value },
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
            value={loginState.signUpPassword}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpPassword', value: event.target.value },
              })
            }
            type={loginState.showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className="form__email-input password"
            required
          />
          <i className="uil uil-lock form-icon left-icon"></i>
        </div>

        <div className="input-field">
          <input
            value={loginState.signUpConfirmPassword}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: {
                  key: 'signUpConfirmPassword',
                  value: event.target.value,
                },
              })
            }
            type={loginState.showPassword ? 'text' : 'password'}
            placeholder="confirm password"
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
              id="signUp-checkbox"
              title="Agree to terms and services"
              booleanChecked={true}
              name="signUp-checkbox"
            />
          </div>
          <a href="#" className="t-c-3 f-6 f-bold forget-password">
            Need help?
          </a>
        </div>

        <div className="input-field button-container">
          <button className="btn btn-danger t-c-1 final-cta w-100 round-corner">
            Sign-Up Now
          </button>
        </div>
      </form>

      <div className="login-signup center-text">
        <span className="f-6">
          Already a member?
          <span
            onClick={() => setIsActive(prev => !prev)}
            className="f-6 f-bold form-change-link  t-c-4 p-h-2"
          >
            Sign-in now
          </span>
        </span>
        {formError.isError && <p className="f-7 t-c-3">{formError.errorMsg}</p>}
      </div>
    </div>
  );
}

export { SignUp };
