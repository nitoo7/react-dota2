'use strict';

const Q = require('q');
// const log = require('./../utils/logger');
// const mySQLService = require('./../services/salesStartMysqlService');
// const dbConfig = require('../config');
// const mailService = require('./../services/sesService');

// const usersDB = dbConfig.rds.tables.users;

module.exports = {
  queryUsers: function(username, password) {
    const deferred = Q.defer();
    const condition = {
      'username': username,
      'password': password,
      'active': true
    };
    // mySQLService.find(condition, 0, undefined, undefined, usersDB)
    //   .then(function(response) {
    //     deferred.resolve(response);
    //   }).catch(function(err) {
    //     deferred.reject(err);
    //   });

    deferred.resolve([{user:"abali"}]);

    return deferred.promise;
  },

  createUser: function(host, user) {
    let dbResponse;
    const deferred = Q.defer();
    user.id = Math.floor(new Date() / 1000);
    user.confirmation_key = parseInt(user.id / 2);
    user.active = false;
    mySQLService.find({
      'email': user.email
    }, 0, undefined, undefined, usersDB)
      .then(function(data) {
        if (data.length === 0) {
          mySQLService.insert(user, usersDB)
            .then(function(response) {
              dbResponse = response;
              return mailService.sendActivationLink(host, user);
            }).then((resp) => {
              log.info('user init resp,'+resp);
              deferred.resolve(dbResponse);
            }).catch((err) => {
              if (err.code === 'ER_DUP_ENTRY') {
                deferred.reject('User already exists');
              } else {
                deferred.reject(err);
              }
            });
        } else {
          deferred.reject('User already exists');
        }
      }).catch(function(err) {
        deferred.reject(err);
      });

    return deferred.promise;
  },

  activateUser: function(req) {
    const deferred = Q.defer();
    const condition = {
      'id': req.body.id
    };
    mySQLService.find(condition, 0, undefined, undefined, usersDB)
      .then(function(response) {
        if (response.length == 1) {
          if (response[0].confirmation_key == req.body.key) {
            mySQLService.activateUser(req.body.id, req.body.password, usersDB)
              .then(function(response) {
                deferred.resolve(response);
              }).catch(function(err) {
                log.error(err);
                deferred.reject('Account activation failed.');
              });
          } else {
            deferred.reject('Account activation link expired.');
          }
        } else {
          deferred.reject('User not found');
        }
      }).catch(function(err) {
        log.error(err);
        deferred.reject('Account activation failed.');
      });

    return deferred.promise;
  },

  resetPassword: function(username, password, newPassword) {
    const deferred = Q.defer();
    const condition = {
      'username': username
    };
    mySQLService.find(condition, 0, undefined, undefined, usersDB)
      .then(function(response) {
        if (response.length == 1) {
          if (response[0].password === password) {
            const id = response[0].id;
            mySQLService.updatePassword(id, newPassword, usersDB)
              .then(function(response) {
                deferred.resolve(response);
              }).catch(function(err) {
                deferred.reject(err);
              });
          } else {
            deferred.reject('Invalid password');
          }
        } else {
          deferred.reject('No matching user record found');
        }
      }).catch(function(err) {
        deferred.reject(err);
      });

    return deferred.promise;
  }
};
