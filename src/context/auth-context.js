import { createContext, useContext, useReducer, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebaseApp';

const authContext = createContext();
const useAuth = () => useContext(authContext);

const initialState = {
  showPassword: false,
  email: '',
  password: '',
  rememberMe: false,
  signUpFirstName: '',
  signUpLastName: '',
  signUpEmail: '',
  signUpPassword: '',
  signUpConfirmPassword: '',
};

const signInReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_FORM':
      return initialState;
    case 'TEXT_INPUT':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case 'SIGN_IN_CHECKBOX':
      return {
        ...state,
        rememberMe: action.payload,
      };
    case 'SWITCH_FORM':
      return {
        ...state,
        isActive: !state.isActive,
      };
    case 'PASSWORD_SHOW':
      return {
        ...state,
        showPassword: !state.showPassword,
      };

    case 'SWITCH_AUTH':
      return {
        ...state,
        isAuth: !state.isAuth,
      };

    case 'FILL_GUEST':
      return {
        ...state,
        email: 'adarshbalika@gmail.com',
        password: 'adarshBalika123',
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [loginState, dispatch] = useReducer(signInReducer, initialState);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const contextValue = {
    loginState,
    dispatch,
    createUser,
    isActive,
    setIsActive,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export { AuthProvider, useAuth };
