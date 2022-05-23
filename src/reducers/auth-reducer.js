export const initialState = {
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

export const signInReducer = (state, action) => {
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
        email: 'test@test.com',
        password: '@Test1234',
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
