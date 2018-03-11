<<<<<<< HEAD
import * as types from '../constants';
=======
import { 
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants';
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
<<<<<<< HEAD
      type: types.SIGNUP_REQUEST
=======
      type: SIGNUP_REQUEST
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
    });
    
    return fetch('http://localhost:8000/v1/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
<<<<<<< HEAD

        throw new Error(json.message);        
      })
      .then(json => { 
=======
        throw new Error(json.message);        
      })
      .then(json => {
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }

        // Save JWT to LocalStorage
        localStorage.setItem('token', json.token);

        dispatch({
<<<<<<< HEAD
          type: types.SIGNUP_SUCCESS,
=======
          type: SIGNUP_SUCCESS,
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
          payload: json
        })
      })
      .catch(reason => dispatch({
<<<<<<< HEAD
        type: types.SIGNUP_FAILURE,
=======
        type: SIGNUP_FAILURE,
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
        payload: reason,
      })); 
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
<<<<<<< HEAD
      type: types.LOGIN_REQUEST
=======
      type: LOGIN_REQUEST
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
    });

    return fetch('http://localhost:8000/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
<<<<<<< HEAD

=======
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
        throw new Error(json.message);        
      })
      
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }

        // Save JWT to LocalStorage
        localStorage.setItem('token', json.token);
        
        dispatch({
<<<<<<< HEAD
          type: types.LOGIN_SUCCESS,
=======
          type: LOGIN_SUCCESS,
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
          payload: json
        })
      })
      .catch(reason => dispatch({
<<<<<<< HEAD
        type: types.LOGIN_FAILURE,
=======
        type: LOGIN_FAILURE,
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
        payload: reason
      })); 
  }
}

export function logout() {
  return (dispatch) => {
      dispatch({
<<<<<<< HEAD
        type: types.LOGOUT_REQUEST
      });
  }
}

export function recieveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    if (!token) {
      dispatch({
        type: types.RECIEVE_AUTH_FAILURE
      })
    }

    return fetch('http://localhost:8000/v1/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }

        throw new Error(json.message);        
      })      
      .then(json => dispatch({
        type: types.RECIEVE_AUTH_SUCCESS,
        payload: json
      }))
      .catch(reason => dispatch({
        type: types.RECIEVE_AUTH_FAILURE,
        payload: reason
      })); 
  }
}
=======
        type: LOGOUT_REQUEST
      });
  }
}
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
