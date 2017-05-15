import { verifyUserDetails } from '../api/api'
import axios from 'axios'
const url = 'https://community-dota-2.p.mashape.com/IDOTA2Match_570/GetMatchHistory/V001/?key=95882E4633AECE786EEFC5BB32471E12&format=JSON&account_id=348480252'
axios.defaults.headers.common['X-Mashape-Key'] = 'i53rchyDbnmsheUDmATHzVAa2atpp1JOAx7jsnNPmRHrR2aiRn';
axios.defaults.headers.common['Accept'] = 'application/json';

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

const fetchDotaData = (response)  => {
    console.log('ACTION..............', response)
  return {
    type: 'FETCH_DOTA_DATA',
    response: {'test': response}
  }
}

export function fetchData() {
  return (dispatch) => {
    axios.get(url).then(function(response) {
      return dispatch(fetchDotaData(response))
   }) 
  }
}

export const userLogout = (username, password) => {
  return (dispatch, getState) => {
    if(getState().login.isloggedIn) {
      dispatch(logoutAction(username, password))
    }
  }
}