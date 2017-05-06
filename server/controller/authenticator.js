'use strict';

const userService = require('../services/userService');
const tokenCache = require('../services/tokenCache');
const log = console;

module.exports = {
  authenticate: function(req, res) {
    const username = req.body.username,
      password = req.body.password;
    userService.queryUsers(username, password)
      .then(function(user) {
        if (user.length === 1) {
          require('crypto').randomBytes(48, function(ex, buf) {
            const token = buf.toString('hex');
            tokenCache.add(token, token, 24 * 60 * 60 * 1000);
            res.header('access_token', token);
            res.send(user);
          });
        } else {
          res.json({
            err: 'AUTH_FAILED'
          });
        }
      }).catch(function(err) {
        log.error(err);
        res.json({
          err: 'AUTH_FAILED'
        });
      });
  },

  validateAccess: function(req, res, next) {
    const token = req.headers.token;
    log.info('Validating token');
    const item = tokenCache.get(token);
    if (item) {
      log.info('Token valid');
      return next();
    } else {
      log.info('Invalid token');
      res.json({
        err: 'ERR_INVALIDTOKEN'
      });
    }
  },

  clearUserToken: function(req, res) {
    const token = req.headers.token;
    tokenCache.remove(token);
    res.json({
      code: 'SUCCESS_LOGOUT'
    });
  }
};
