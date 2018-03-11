<<<<<<< HEAD
import * as types from '../constants';
=======
import { 
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants';
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
<<<<<<< HEAD
  token,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
=======
  token
};

export default function auth(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
<<<<<<< HEAD
    case types.RECIEVE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.RECIEVE_AUTH_FAILURE:
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
=======
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
        user: null,
        token: ''
      };
    default:
      return state;
  }
}
