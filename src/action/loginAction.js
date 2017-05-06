import { verifyUserDetails } from '../api/api'


export function userLoginSuccess(userToken) {
  /**
   * Response should contain user details to be stored in state and
   * set token to sessionStorage or localStorage?(need to decide)
   */
  const token = userToken || 'afsdfsdfjsddfds'
  return {
    type: 'FETCH_USER_SUCCESS',
    response: {token: token}
  }
}

export function userLoginError() {
  return {
    type: 'FETCH_USER_ERROR',
    response: ''
  }
}

export function logoutAction() {
  return {
    type: 'LOGOUT_USER',
    response: ''
  }
}

const fetchUser = (username, password) => (dispatch) => {
  verifyUserDetails({ username, password })
    .then((data) => {
      dispatch(userLoginSuccess(data.headers.access_token))
    }).catch((e) => {
      dispatch(userLoginSuccess())
    })
}

export function fetchUserData() {
  return (dispatch, getState) => {
    if(!getState().login.isloggedIn) {
      dispatch(fetchUser())
    }
  }
}

export const userLogout = (username, password) => {
  return (dispatch, getState) => {
    if(getState().login.isloggedIn) {
      dispatch(logoutAction(username, password))
    }
  }
}