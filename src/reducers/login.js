// Reducers for login module

const login = (state = {
  isloggedIn: localStorage.getItem('accessToken') ? true : false
  }, action) => {
    switch (action.type) {
      case 'FETCH_USER_SUCCESS':
        localStorage.setItem('accessToken', action.response.token)
        return {
          isloggedIn: true,
        }
      case 'FETCH_USER_ERROR':
        return {
          isloggedIn: false,
          message: 'invalidUserDetails'
        }
      case 'LOGOUT_USER':
        localStorage.removeItem('accessToken')
        return {
          isloggedIn: false
        }
      default:
        return state
    }
}

export default login;
