'use strict';

var Request = require('./request');

module.exports = MMS;

function MMS(options) {
  this.options = options;
}

MMS.prototype.request = function request(options, callback) {
  var key;

  if (typeof options === 'function') {
    callback = options;
    options = this.options;
  } else {
    for (key in this.options) {
      if (Object.keys(options).indexOf(key) == -1) options[key] = this.options[key];
    }
  }

  return Request.request(options, function requestCallback(err, body) {
    if (callback) callback(err, body);
  });
};

MMS.prototype.get = function get(path, callback) {
  return this.request({ method: 'GET', path: path }, callback);
};

MMS.prototype.post = function post(path, body, callback) {
  if (typeof body === 'function') {
    callback = body;
    body = {};
  }

  return this.request({ method: 'POST', path: path, body: body }, callback);
};

MMS.prototype.patch = function patch(path, body, callback) {
  if (typeof body === 'function') {
    callback = body;
    body = {};
  }

  return this.request({ method: 'PATCH', path: path, body: body }, callback);
};

MMS.prototype.delete = function _delete (path, callback) {
  return this.request({ method: 'DELETE', path: path }, callback);
};

require('./resourceBuilder').build();
