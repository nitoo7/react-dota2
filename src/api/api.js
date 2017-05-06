import request from 'axios';

export function verifyUserDetails(userAuth) {

  // Change api url here.
  return request
      .post('/login/authenticate', {
        username: userAuth.username,
        password: userAuth.password
      });
}
