'use strict';

let cache = {};

function isDefined(item) {
  return typeof item !== 'undefined';
}

function isExpired(key) {
  const currentTime = new Date();
  let expired;
  if (cache[key].expires === Infinity) {
    expired = false;
  } else {
    expired = !!(currentTime.getTime() >= cache[key].expires.getTime()
    || cache[key].expires === 0);
  }
  if (expired) {
    // clear this item from cache
    delete cache[key];
  }
  return expired;
}

function getFromCache(key) {
  if (isDefined(cache[key]) && !isExpired(key)) {
    cache[key].uses = cache[key].uses + 1;
    return cache[key].data;
  }
  return null;
}

function cacheEntries() {
  const obj = {};
  Object.keys(cache).forEach(function(item) {
    obj[item] = {
      expires: cache[item].expires,
      uses: cache[item].uses
    };
  });
  return obj;
}

function clearCache(pruneThreshold) {
  if (isDefined(pruneThreshold)) {
    Object.keys(cache).forEach(function(item) {
      if (cache[item].uses <= pruneThreshold &&
          cache[item].expires !== Infinity) {
        delete cache[item];
      }
    });
  } else {
    cache = {};
  }
}

function pruneCache(threshold) {
  return clearCache(threshold);
}

function removeFromCache(key) {
  if (!isDefined(key)) {
    throw new Error('key must be passed in');
  }

  if (isDefined(cache[key])) {
    return delete cache[key];
  }
  return false;
}

function addToCache(key, object, expiresIn) {
  const expires = expiresIn || 300000;

  cache[key] = {
    data: object,
    expires: 0,
    uses: 0
  };

  // permanent cache option... pass in Infinity as the expires period
  if (expires === Infinity) {
    cache[key].expires = Infinity;
  } else {
    cache[key].expires = new Date(new Date().getTime() + expires);
  }
}

const validateToken = function(token) {
  return !!getFromCache(token);
};

module.exports = {
  get: getFromCache,
  clear: clearCache,
  remove: removeFromCache,
  entries: cacheEntries,
  add: addToCache,
  prune: pruneCache,
  validateToken: validateToken
};
